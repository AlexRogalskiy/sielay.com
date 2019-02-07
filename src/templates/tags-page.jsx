import * as React from 'react'
import { Link } from 'gatsby'
import { Grid, Container, Segment } from 'semantic-ui-react'
import TagsCard from '../components/TagsCard/TagsCard'
import { Calendar } from '../components/Calendar'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import Layout from '../layouts';

const TagsPage = props => {
  const tags = (props.data && props.data.tags && props.data.tags.group) || []
  const posts = (props.data && props.data.posts && props.data.posts.edges) || []
  const calendar =
    (props.data && props.data.calendar && props.data.calendar.group) || []

  return (
    <Container>
      <Segment vertical size={'huge'}>
        <Grid padded style={{ justifyContent: 'space-around' }}>
          <Grid.Column width={10}>
            <Posts posts={posts.map(post => post.node)} />
          </Grid.Column>
          <Grid.Column width={6}>
            <TagsCard Link={Link} tags={tags} tag={props.pageContext.tag} />
            <Calendar Link={Link} entries={calendar} />
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  )
}

export default props => <Layout {...props}><TagsPage {...props}/></Layout>

export const pageQuery = graphql`
  query TemplateTagPage($tag: String) {
    site: site {
      siteMetadata {
        disqus
      }
    }
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
        frontmatter: { draft: { ne: true }, tags: { in: [$tag] } }
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
            tags
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
