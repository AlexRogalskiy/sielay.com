import * as React from 'react'
import Link from 'gatsby-link'
import {
  Grid,
  Container,
  Segment,
} from 'semantic-ui-react'
import TagsCard from '../components/TagsCard/TagsCard'
import BlogPagination from '../components/BlogPagination/BlogPagination'

import { Calendar } from '../components/Calendar'
import Posts from '../components/Posts';

export default props => {
  const tags = (props.data && props.data.tags && props.data.tags.group) || []
  const posts = (props.data && props.data.posts && props.data.posts.edges) || []
  const calendar =
    (props.data && props.data.calendar && props.data.calendar.group) || []
  const { pathname } = props.location
  const pageCount =
    (posts.length && Math.ceil(props.data.posts.totalCount / 10)) || 0

  return (
    <Container>
      <Segment vertical size={'huge'}>
        <Grid stackable padded style={{ justifyContent: 'space-around' }}>
          <Grid.Column width={10}>
            <Posts posts={posts.map(post => post.node)}/>
            <Segment vertical textAlign="center">
              <BlogPagination
                Link={Link}
                pathname={pathname}
                pageCount={pageCount}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <TagsCard Link={Link} tags={tags} tag={props.pathContext.tag} />
            <Calendar Link={Link} entries={calendar} />
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  )
}

export const pageQuery = graphql`
  query PageBlog {
    # Get tags
    tags: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    # Get calendar
    calendar: allMarkdownRemark {
      group(field: frontmatter___updatedDate) {
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
                  responsiveResolution(width: 700, height: 100) {
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
`
