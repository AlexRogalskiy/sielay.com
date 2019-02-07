import { graphql } from 'gatsby'
import Blog from './blog';

export default Blog;

export const pageQuery = graphql`
  query PageIndexBlog {

    site: site {
      siteMetadata {
        title
      }
    }

    # Get tags
    tags: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            updatedDate(formatString: "DD MMMM, YYYY")
            image {
              children {
                ... on ImageSharp {
                  fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
            author {
              id
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(width: 35, height: 35) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
