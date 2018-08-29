import * as React from 'react'
import Link from 'gatsby-link'
import { get } from 'lodash'
import {
  Header,
  Container,
  Segment,
  Label,
  Image,
  Icon,
  Message,
} from 'semantic-ui-react'
import { DiscussionEmbed } from 'disqus-react'
import rehypeReact from 'rehype-react'
import InstagramEmbed from 'react-instagram-embed'
import Posts from '../components/Posts'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'instagram-embed': InstagramEmbed },
}).Compiler

export default props => {
  const { frontmatter, htmlAst, timeToRead } = props.data.post

  const tags = props.data.post.frontmatter.tags.map(tag => (
    <Label key={tag}>
      <Link to={`/blog/tags/${tag}/`}>{tag}</Link>
    </Label>
  ))

  const recents = (props.data.recents ? props.data.recents.edges : []).map(
    ({ node }) => node
  )

  const cover = get(frontmatter, 'image.children.0.responsiveResolution', {})

  const updated = Date.parse(props.data.post.frontmatter.updatedDate)
  const born = Date.parse('1984-04-10')
  const age = Math.floor((updated - born) / 1000 / 60 / 60 / 24 / 365.25)

  return (
    <Container>
      <Segment vertical size={'huge'} style={{ border: 'none' }}>
        <Header as="h1">
          <Icon name="chat" />
          <Header.Content>
            {frontmatter.title}
            <Header.Subheader>
              {frontmatter.updatedDate} - {timeToRead} min read
            </Header.Subheader>
          </Header.Content>
        </Header>
      </Segment>
      <Image {...cover} fluid />
      <Segment vertical size={'huge'} style={{ border: 'none' }}>
        {props.data.post.frontmatter.tags.indexOf('recovered') !== -1 ? (
          <Message size={'mini'} warning>
            <Message.Header>DISCLAIMER</Message.Header>
            This article has been recovered using archive.org as my plan to find
            back how I evolved over the years. My opinons might have changed
            since. I was {age} years old when I wrote it.
          </Message>
        ) : null}
        {renderAst(htmlAst)}
      </Segment>
      <Segment vertical>{tags}</Segment>
      {props.data.site &&
        props.data.site.siteMetadata &&
        props.data.site.siteMetadata.disqus && (
          <Segment vertical>
            <DiscussionEmbed shortname={props.data.site.siteMetadata.disqus} />
          </Segment>
        )}
      <Segment vertical>
        <Posts posts={recents} />
      </Segment>
    </Container>
  )
}

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    site: site {
      siteMetadata {
        disqus
      }
    }

    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        tags
        author {
          id
          bio
          twitter
          avatar {
            children {
              ... on ImageSharp {
                responsiveResolution(width: 80, height: 80, quality: 100) {
                  src
                  srcSet
                }
              }
            }
          }
        }
        title
        updatedDate(formatString: "MMM D, YYYY")
        image {
          children {
            ... on ImageSharp {
              responsiveResolution(width: 900, height: 300, quality: 100) {
                src
                srcSet
              }
            }
          }
        }
      }
    }
    recents: allMarkdownRemark(
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            updatedDate(formatString: "MMM D, YYYY")
            tags
            image {
              children {
                ... on ImageSharp {
                  responsiveResolution(width: 300, height: 100) {
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
                    responsiveResolution(width: 36, height: 36) {
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
