import * as React from 'react'
import { Card, Label, Segment } from 'semantic-ui-react'
import { kebabCase } from 'lodash'
import Link from 'gatsby-link'

const sizes = {
  mini: .001,
  tiny: .002,
  small: .003,
  medium: .005,
  large: .01,
  big: .02,
  huge: .05,
  massive: .2
}

const tagToSize = (total, count) => {
  const weight = count / total;
  return Object.keys(sizes).filter(size => weight >= sizes[size]).pop() || 'mini';
}

export default props => {
  const total = props.tags.reduce(
    (previous, tag) => previous + tag.totalCount,
    0
  )
  const tags = [...props.tags.sort(() => Math.random() - 0.5)]

  return (
    <Segment vertical>
      <Card fluid>
        <Card.Content>
          <Card.Header>Tags</Card.Header>
        </Card.Content>
        <Card.Content style={{textAlign:'center'}}>
          {tags.map(tag => {
            const isActive = tag.fieldValue === props.tag
            const tagLink = isActive
              ? `/blog`
              : `/blog/tags/${kebabCase(tag.fieldValue)}/`
            return (
              <Label
                as={Link}
                to={tagLink}
                key={tag.fieldValue}
                size={tagToSize(total, tag.totalCount)}
                color={isActive ? 'green' : 'grey'}
                style={{marginBottom: '2px'}}
              >
                {tag.fieldValue}
              </Label>
            )
          })}
        </Card.Content>
      </Card>
    </Segment>
  )
}
