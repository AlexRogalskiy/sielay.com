import * as React from 'react'
import {
  Header,
  Divider,
  Card,
  Container,
  Segment,
  Icon,
  Label,
  Image,
  List,
  Grid,
  Tab,
} from 'semantic-ui-react'

const repos = props => (
  <List divided relaxed>
    {props.data.repos.edges.map(({ node }, index) => (
      <List.Item key={index}>
        <List.Icon name={node.where} size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a" href={node.link}>
            {node.title}
          </List.Header>
          <List.Description as="a" href={node.link}>
            {node.description}
          </List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
)

const contributions = props => (
  <List divided relaxed>
    {props.data.contributions.edges.map(({ node }, index) => (
      <List.Item key={index}>
        <List.Icon name={node.where} size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a" href={node.link}>
            {node.title}
          </List.Header>
          <List.Description as="a" href={node.link}>
            {node.description}
          </List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
)

const articles = props => (
  <List divided relaxed>
    {props.data.articles.edges.map(({ node }, index) => (
      <List.Item key={index}>
        <List.Icon name={node.where} size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a" href={node.link}>
            {node.title}
          </List.Header>
          <List.Description as="a" href={node.link}>
            {node.date}
          </List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
)

const projects = props => (
  <List divided relaxed>
    {props.data.projects.edges.map(({ node }, index) => (
      <List.Item key={index}>
        <List.Icon name={node.where} size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a" href={node.link}>
            {node.title}
          </List.Header>
          <List.Description as="a" href={node.link}>
            {node.description}
          </List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
)

const refrences = props => (
  <Grid stackable columns={1}>
    {props.data.references.edges.map(({ node }, index) => (
      <Grid.Column key={index}>
        <Card fluid>
          <Card.Content>
            <Card.Header>{node.name}</Card.Header>
            <Card.Meta>{node.title}</Card.Meta>
            <Card.Description>{node.content}</Card.Description>
          </Card.Content>
          <Card.Content extra>{node.when}</Card.Content>
        </Card>
      </Grid.Column>
    ))}
  </Grid>
)

const labelledList = (list, decorator) => (
  <Grid stackable columns={2}>
    {list.map(({ node }, index) => (
      <Grid.Column key={index}>
        <Label as="a" ribbon>
          {node.label || `${node.from} - ${node.to}`}
        </Label>
        {node.company ? (
          <Header as="h2">
            {node.logo ? <Image circular src={node.log} /> : null}{' '}
            {node.company}
          </Header>
        ) : null}
        <List divided relaxed>
          {decorator(node)}
        </List>
      </Grid.Column>
    ))}
  </Grid>
)

const skillNodes = node =>
  node.items.map((item, index2) => (
    <List.Item key={index2}>
      {item.icon && (
        <List.Icon name={item.icon} size="large" verticalAlign="middle" />
      )}
      <List.Content>
        <List.Header as="span">{item.label}</List.Header>
        {item.description &&
          item.description.length && (
            <List.Description as="span">{item.description}</List.Description>
          )}
      </List.Content>
    </List.Item>
  ))

const xpNodes = node =>
  node.items.map((item, index2) => (
    <List.Item key={index2}>
      <List.Content>
        {item.link
          ? [
              <List.Header key={0} as="a" href={item.link}>
                {item.label}
              </List.Header>,
              <List.Description key={1} as="a" href={item.link}>
                {item.description}
              </List.Description>,
            ]
          : [
              <List.Header as="span" key={0}>
                {item.label}
              </List.Header>,
              item.description &&
                item.description.length && (
                  <List.Description key={1} as="span">
                    {item.description}
                  </List.Description>
                ),
            ]}
        {item.tech && (
          <List horizontal key={2}>
            {' '}
            {item.tech.map((tag, index3) => (
              <List.Item key={index3}>
                <List.Content>
                  <Label as="span" image color={tag.color}>
                    <Icon name={tag.icon} />
                    {tag.label}
                  </Label>
                </List.Content>
              </List.Item>
            ))}{' '}
          </List>
        )}
      </List.Content>
    </List.Item>
  ))

export default props => (
  <Container>
    <Segment vertical size={'huge'}>
      <Segment piled >
        <p>
          My name is Łukasz (pronounced [ˈwukaʂ]). Originally from Szczecin,
          Poland. Now living in Wimbledon, London, United Kingdom. I’m a father, husband, software developer, team lead, aspiring
          enreprenour and amatour cyclist. I started with web early. I kept failing and reinventing myself. Now I
          start over, simpler, without too much stress.
        </p>
      </Segment>
      <Tab
        panes={[
          {
            menuItem: 'Experience',
            render: () => (
              <Tab.Pane>
                {labelledList(props.data.experience.edges, xpNodes)}
              </Tab.Pane>
            ),
          },
          {
            menuItem: 'References',
            render: () => <Tab.Pane>{refrences(props)}</Tab.Pane>,
          },
          {
            menuItem: 'Skills',
            render: () => (
              <Tab.Pane>
                {labelledList(props.data.skills.edges, skillNodes)}
              </Tab.Pane>
            ),
          }
        ]}
      />
      <br/>
      <Tab
        panes={[
          {
            menuItem: 'Projects',
            render: () => <Tab.Pane>{projects(props)}</Tab.Pane>,
          },
          {
            menuItem: 'Repositories',
            render: () => <Tab.Pane>{repos(props)}</Tab.Pane>,
          },
          {
            menuItem: 'Contributions',
            render: () => <Tab.Pane>{contributions(props)}</Tab.Pane>,
          },
          {
            menuItem: 'Articles',
            render: () => <Tab.Pane>{articles(props)}</Tab.Pane>,
          },
        ]}
      />
    </Segment>
  </Container>
)

export const pageQuery = graphql`
  query About {
    repos: allReposJson {
      edges {
        node {
          link
          title
          description
          where
        }
      }
    }
    contributions: allContributionsJson {
      edges {
        node {
          link
          description
          where
          title
        }
      }
    }
    projects: allProjectsJson {
      edges {
        node {
          link
          title
          description
          where
        }
      }
    }
    experience: allExperienceJson {
      edges {
        node {
          id
          company
          position
          from
          to
          items {
            label
            description
            link
            tech {
              label
              color
              icon
            }
          }
        }
      }
    }
    references: allReferencesJson {
      edges {
        node {
          thumb
          when
          title
          name
          content
        }
      }
    }
    skills: allSkillsJson {
      edges {
        node {
          label
          items {
            label
            icon
            description
          }
        }
      }
    }
    articles: allArticlesJson {
      edges {
        node {
          link
          where
          title
          date
        }
      }
    }
  }
`
