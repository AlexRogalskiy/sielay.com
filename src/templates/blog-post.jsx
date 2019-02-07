import * as React from 'react'
import { Link } from 'gatsby'
import { get } from 'lodash'
import {
  Header,
  Container,
  Segment,
  Button,
  Label,
  Image,
  Icon,
  Message,
} from 'semantic-ui-react'
import { DiscussionEmbed } from 'disqus-react'
import rehypeReact from 'rehype-react'
import InstagramEmbed from 'react-instagram-embed'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import Layout from '../layouts';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'instagram-embed': InstagramEmbed,
  },
}).Compiler

const BlogPost = props => {
  const { frontmatter, htmlAst, timeToRead } = props.data.post

  const tags = props.data.post.frontmatter.tags.map(tag => (
    <Label key={tag}>
      <Link to={`/blog/tags/${tag}/`}>{tag}</Link>
    </Label>
  ))

  const recents = (props.data.recents ? props.data.recents.edges : []).map(
    ({ node }) => node
  )

  const myIndex = (props.data.posts ? props.data.posts.edges : []).findIndex(
    ({
      node: {
        fields: { slug },
      },
    }) => slug === props.data.post.fields.slug
  )

  const previousAndNext =
    myIndex !== -1
      ? [
          props.data.posts.edges[myIndex - 1],
          props.data.posts.edges[myIndex + 1],
        ]
          .filter(Boolean)
          .map(({ node }) => node)
      : []

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
        {props.data.post.frontmatter.source && (
          <Message size={'mini'} info>
            <Icon name={props.data.post.frontmatter.sourceType} />
            This article war originally posted on{' '}
            {props.data.post.frontmatter.sourceType}
            <Button
              as="a"
              size="mini"
              href={props.data.post.frontmatter.source}
              target="_blank"
              style={{
                float: 'right',
                marginTop: '-4px',
              }}
            >
              View Original
            </Button>
          </Message>
        )}
        {renderAst(htmlAst)}
      </Segment>
      <Segment vertical>{tags}</Segment>
      <Segment vertical>
        <Header size={'small'}>Previous &amp; Next</Header>
        <Posts posts={previousAndNext} />
      </Segment>

      {props.data.site &&
        props.data.site.siteMetadata &&
        props.data.site.siteMetadata.disqus && (
          <Segment vertical>
            <DiscussionEmbed
              shortname={props.data.site.siteMetadata.disqus}
              config={{
                url: `https://sielay.com${props.data.post.fields.slug}`,
                identifier: props.data.post.fields.slug,
                title: props.data.post.frontmatter.title,
              }}
            />
          </Segment>
        )}
      <Segment vertical>
        <Header size={'small'}>Recent</Header>
        <Posts posts={recents} />
      </Segment>
    </Container>
  )
}

export default props => <Layout {...props}><BlogPost {...props}/></Layout>

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    site: site {
      siteMetadata {
        disqus
      }
    }

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
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
          }
        }
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
                fixed(width: 80, height: 80, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        title
        source
        sourceType
        updatedDate(formatString: "MMM D, YYYY")
        image {
          children {
            ... on ImageSharp {
              fixed(width: 900, height: 300, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp
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
                    fixed(width: 36, height: 36) {
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
