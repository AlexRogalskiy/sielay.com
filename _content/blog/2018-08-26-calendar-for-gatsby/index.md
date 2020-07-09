---
title: 'Calendar for gatsby'
createdDate: '2018-08-26'
date: '2018-08-26'
author: sielay
tags: [gatsbyjs, reactjs, calendar, javascript, tutorial, hack, chronology, indexing, graphql]
draft: false
categories: ["Software Development & Management"]
---

I've just updated my blog by adding something that is essential for traditional blogging:
chronological indexing.

Won't spend much time explaining as you may see this messy blog source code on
my [GitHub](https://github.com/sielay/sielay.com)

## Idea

 * Need to added field `frontmatter.yearWithMonth` to the page
    * That can be done by various plugins or simply in `onCreateNode` of `/gatsby-node.js` (see on [GitHub](https://github.com/sielay/sielay.com/blob/master/gatsby-node.js#L33))
    ## gatsby-node.js
    ```javascript
    // ..
    // Create slugs for files.
    // Slug will used for blog page path.
    exports.onCreateNode = ({ node, actions, getNode }) => {
    // ...
    // exptract date elements for indexing
    // yearWithMonth allows concatenation otherwise difficult/impossible while
    // graphql aggregation/filtering
    if (node.frontmatter && node.frontmatter.updatedDate) {
        const parts = node.frontmatter.updatedDate.split('-')
        node.frontmatter.year = parts[0]
        node.frontmatter.month = parts[1]
        node.frontmatter.day = parts[2]
        node.frontmatter.yearWithMonth = parts.slice(0, 2).join('-')
    }
    // ...
    }
    ```
 * Can query by that field to show year/month pages
    * You can add that query to any page you want to show calendar on (see on [GitHub](https://github.com/sielay/sielay.com/blob/master/src/templates/blog-page.jsx#L16))
    ```graphql
    # Get calendar
    calendar: allMarkdownRemark {
        group(field: frontmatter___updatedDate) {
            fieldValue
            totalCount
        }
    }
    ```
    * Also you can create component printing list of months like categories (see on [GitHub](https://github.com/sielay/sielay.com/blob/master/src/components/Calendar.jsx))
 * You can build pages for each month by groupingby newly created field
    * That can be done using `createPages` of `/gatsby-node.js` (Example on [GitHub](https://github.com/sielay/sielay.com/blob/master/gatsby-node.js#L126))

    ```javascript
    exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        // added monthsPage to the templates
        const templates = ['blogPost', 'tagsPage', 'blogPage', 'monthsPage'].reduce(
        (mem, templateName) => {
            return Object.assign({}, mem, {
            [templateName]: path.resolve(
                `src/templates/${kebabCase(templateName)}.jsx`
            ),
            })
        },
        {}
        )
        // added yearWithMonth to frontmatter
        graphql(
        `
            {
            posts: allMarkdownRemark {
                edges {
                node {
                    fields {
                    slug
                    }
                    frontmatter {
                    tags
                    yearWithMonth
                    }
                }
                }
            }
            }
        `
        ).then(result => {
        if (result.errors) {
            return reject(result.errors)
        }
        const posts = result.data.posts.edges.map(p => p.node)

        // ...
        // Create months pages
        posts
            .reduce(
            (mem, post) =>
                cleanArray(mem.concat(get(post, 'frontmatter.yearWithMonth'))),
            []
            )
            .forEach(month => {
            createPage({
                path: `/blog/months/${kebabCase(month)}/`,
                component: slash(templates.monthsPage),
                context: {
                month,
                },
            })
            })

        resolve()
        })
    })
    }
    ```
