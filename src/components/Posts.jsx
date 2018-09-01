import * as React from 'react'
import { Feed, Icon, Label, Image, Message } from 'semantic-ui-react'
import Link from 'gatsby-link'
import { get, kebabCase } from 'lodash'

export default props => (
  <Feed>
    {props.posts.map((node, index) => {
      try {
        const {
          frontmatter,
          timeToRead,
          fields: { slug },
          excerpt,
        } = node

        const cover = get(
          frontmatter,
          'image.children.0.responsiveResolution',
          {}
        )

        return (
          <Feed.Event key={slug}>
            <Feed.Label>
              {cover &&
                cover.src && <img src={cover.src} srcSet={cover.srcSet} />}
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Link to={slug}>{frontmatter.title}</Link>
                <Feed.Date>{frontmatter.updatedDate}</Feed.Date>
              </Feed.Summary>
              <Feed.Extra>
                {excerpt} <Link to={slug}>read more…</Link>
              </Feed.Extra>
              {cover && cover.src ? (
                <Feed.Extra images>
                  <Image
                    bordered
                    src={cover.src}
                    srcSet={cover.srcSet}
                    size={'medium'}
                  />
                </Feed.Extra>
              ) : null}
              <Feed.Meta>
                <Feed.Like as="span">
                  {frontmatter.tags
                    ? frontmatter.tags.map(tag => (
                        <Label
                          key={tag}
                          as={Link}
                          to={'/blog/tags/' + kebabCase(tag)}
                          size={'mini'}
                        >
                          {tag}
                        </Label>
                      ))
                    : null}
                  <Icon name="clock" />
                  {timeToRead} min read{' '}
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        )
      } catch (error) {
        console.log(error)
        return (
          <Message
            key={`post-${index}`}
            warning
            header="Problem"
            content="There was problem with one blog post"
          />
        )
      }
    })}
  </Feed>
)
