import { Card, Segment, List } from 'semantic-ui-react'
import React from 'react'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const normalize = list => {
  const hash = list.reduce((prev, current) => {
    const parts = current.fieldValue.split('-')
    const year = (prev[parts[0]] = prev[parts[0]] || {})
    const month = (year[parts[1]] = year[parts[1]] || {})
    month[parts[2]] = current.totalCount
    return prev
  }, {})
  const output = Object.keys(hash)
    .sort()
    .reverse()
    .map(year => ({
      year,
      months: Object.keys(hash[year]).sort(),
    }))
  return output
}

export const Calendar = props => (
  <Segment vertical>
    {normalize(props.entries).map(year => (
      <Card key={year.year}>
        <Card.Content>
          <Card.Header>{year.year}</Card.Header>
        </Card.Content>
        <Card.Content>
          <List>
            {year.months.map(month => (
              <List.Item as="span" key={month}>
                <List.Icon name="clock" />
                <List.Content>
                  <props.Link to={`/blog/months/${year.year}-${month}/`}>
                    {months[month - 1]}
                  </props.Link>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Card.Content>
      </Card>
    ))}
  </Segment>
)
