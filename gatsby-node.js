const path = require('path')
const slash = require('slash')
const { kebabCase, uniq, get, compact, times } = require('lodash')

// Don't forget to update hard code values into:
// - `templates/blog-page.tsx:23`
// - `pages/blog.tsx:26`
// - `pages/blog.tsx:121`
const POSTS_PER_PAGE = 10
const cleanArray = arr => compact(uniq(arr))

// Add Gatsby's extract-graphql Babel plugin (we'll chain it with babel-loader)
const extractQueryPlugin = path.resolve(
  __dirname,
  `node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js`
)

// Create slugs for files.
// Slug will used for blog page path.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  switch (node.internal.type) {
    case `MarkdownRemark`:
      const fileNode = getNode(node.parent)
      const [basePath, name] = fileNode.relativePath.split('/')
      slug = `/${basePath}/${name}/`
      break
  }
  if (slug) {
    createNodeField({ node, name: `slug`, value: slug })
  }
  if (node.frontmatter) {
    node.frontmatter.source = node.frontmatter.source || '';
    node.frontmatter.sourceType = node.frontmatter.sourceType || '';
    if (node.frontmatter.updatedDate) {
      const parts = node.frontmatter.updatedDate.split('-')
      node.frontmatter.year = ` ${parts[0]}`
      node.frontmatter.month = ` ${parts[1]}`
      node.frontmatter.day = ` ${parts[2]}`
      node.frontmatter.yearWithMonth = ` ${parts.slice(0, 2).join('-')}`
      node.frontmatter.updatedDate = new Date(Date.parse(node.frontmatter.updatedDate))
    }
    if (node.frontmatter.createdDate) {
      node.frontmatter.createdDate = new Date(Date.parse(node.frontmatter.createdDate))
    } else {
      node.frontmatter.createdDate = node.frontmatter.updatedDate
    }
  }
}

// Implement the Gatsby API `createPages`.
// This is called after the Gatsby bootstrap is finished
// so you have access to any information necessary to
// programatically create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
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

      // Create blog pages
      posts
        .filter(post => post.fields.slug.startsWith('/blog/'))
        .forEach(post => {
          createPage({
            path: post.fields.slug,
            component: slash(templates.blogPost),
            context: {
              slug: post.fields.slug,
            },
          })
        })

      // Create tags pages
      posts
        .reduce(
          (mem, post) => cleanArray(mem.concat(get(post, 'frontmatter.tags'))),
          []
        )
        .forEach(tag => {
          createPage({
            path: `/blog/tags/${kebabCase(tag)}/`,
            component: slash(templates.tagsPage),
            context: {
              tag,
            },
          })
        })

      // Create blog pagination
      const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE)
      times(pageCount, index => {
        createPage({
          path: `/blog/page/${index + 1}/`,
          component: slash(templates.blogPage),
          context: {
            skip: index * POSTS_PER_PAGE,
          },
        })
      })

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
