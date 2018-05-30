import * as React from "react";
import Blog from "../pages/blog";

export default Blog;

export const pageQuery = graphql`
query CategoryTagPage($category: String) {
  # Get categories

  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  categories: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___category) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___updatedDate] },
    filter: {
      frontmatter: {
        draft: { ne: true }
        category: { eq: $category }
      },
      fileAbsolutePath: { regex: "/blog/" }
    }
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
                responsiveResolution(width: 400, height: 400) {
                  src
                  srcSet
                }
              }
            }
           }
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  responsiveResolution(width: 35, height: 35) {
                    src
                    srcSet
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
`;
