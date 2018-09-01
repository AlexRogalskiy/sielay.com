import * as React from 'react'
import Link from 'gatsby-link'
import HeaderMenu from '../components/HeaderMenu'
import { menuItems } from '../layouts'
import Instafeed from 'react-instafeed'
import {
  Segment,
  Card,
  Comment,
  Button,
  Container,
  Grid,
  Header,
  Icon,
} from 'semantic-ui-react'
import { get } from 'lodash'
import Posts from '../components/Posts'

const TWTR = 'https://twitter.com/sielay?ref_src=twsrc%5Etfw'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialized: false,
    }
  }

  componentDidMount() {
    if (this.state.initialized) {
      return
    }

    /* tslint:disable:no-string-literal */
    const twttr = window['twttr'] || undefined
    /* tslint:enable:no-string-literal */

    if (typeof twttr === 'undefined') {
      const twittertimeline = this.node
      const twitterscript = document.createElement('script')
      twitterscript.src = '//platform.twitter.com/widgets.js'
      twitterscript.async = true
      twitterscript.id = 'twitter-wjs'
      twittertimeline.parentNode.appendChild(twitterscript)
    } else {
      twttr.widgets.load()
    }

    this.setState({ initialized: true })
  }

  shouldComponentUpdate() {
    return false
  }

  masterHead(props) {
    return (
      <Segment vertical inverted textAlign="center" className="masthead">
        <HeaderMenu
          Link={Link}
          pathname={props.location.pathname}
          items={menuItems}
          inverted
        />
      </Segment>
    )
  }

  twitter() {
    return [
      <Header className="mobile only" key="t-h" size="large" style={{marginTop: '1rem', textAlign: 'center'}}>Twitter</Header>,
      <a
        key="twitter"
        className="twitter-timeline"
        data-tweet-limit="10"
        href={TWTR}
        ref={node => (this.node = node)}
      >
        Tweets by @sielay
      </a>,
    ]
  }

  insta() {
    const instafeedTarget = 'instafeed'
    const TOKEN = '724495177.31d7865.c0a1efd39b6641aca0aa482982d93d04'
    return [
      <div id={instafeedTarget} key="insta">
        <Header className="mobile only" size="large" style={{marginTop: '1rem', textAlign: 'center'}}>Instagram</Header>
        <Instafeed
          limit="5"
          ref="instafeed"
          resolution="standard_resolution"
          sortBy="most-recent"
          target={instafeedTarget}
          template={`
<div class="ui card">
<div class="image">
    <img src="{{image}}"/>
</div>
<div class="content">
  <a class="header">{{location}}</a>
  <div class="description">
    {{model.short_caption}}
  </div>
</div>
<div class="extra">
  <a href="{{link}}" target="_blank">
    View on Instagram
  </a>
</a>
</div>
</div>
`}
          userId="724495177"
          clientId="31d786590ebd47f3a70f344d816f3d33"
          accessToken={TOKEN}
        />
      </div>,
    ]
  }

  render() {
    const props = this.props
    const posts =
      (props.data && props.data.posts && props.data.posts.edges) || []
    return (
      <Segment vertical  className="stripe alternate feature">
        <Grid
          stackable
          verticalAlign="top"
          className="container"
          key="extra"
        >
          <Grid.Row>
            <Grid.Column width="8" verticalAlign={'top'} stretched={true}>
              <Posts posts={posts.map(post => post.node)} />
              <Button as={Link} to="/blog">More blog posts</Button>
              {this.insta()}

            </Grid.Column>
            <Grid.Column
              width="8"
              verticalAlign={'top'}
              stretched={true}
              textAlign="center"
            >
                {this.twitter(props)}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export const pageQuery = graphql`
  query PageIndexBlog {
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
