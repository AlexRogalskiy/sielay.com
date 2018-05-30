import * as React from "react";
import { Header, Container, Segment, Icon, List, Grid, SemanticICONS } from "semantic-ui-react";
import {
  ProjectsJsonConnection,
  ContributionsJsonConnection,
  ReposJsonConnection,
} from "../graphql-types";
import ga from "./ga";

interface AboutProps {
  data: {
    projects: ProjectsJsonConnection;
    repos: ReposJsonConnection;
    contributions: ContributionsJsonConnection;
  };
}

export default ga((props: AboutProps) =>
  <Container>
    <Segment vertical>
      <Header as="h2">
        <Icon name="info circle" />
        <Header.Content>
          About me
          </Header.Content>
      </Header>
    </Segment>
    <Segment vertical piled size="massive">
      <p>
        My name is Łukasz (pronounced [ˈwukaʂ]). Originally from Szczecin, Poland. Now living
        in Wimbledon, London, United Kingdom.
        </p>
      <p>
        I’m a father, husband, software developer, team lead, aspiring entrepreneur and amatour
        cyclist.
        </p>
      <p>
        I started with web early. I kept failing and reinventing myself. Now I start over, simpler,
        without too much stress.
        </p>
        <p>
          See <a href="/cv/">CV</a> for more details or <a href="/blog/category/projects">projects</a> for specific
          experience cases.
          </p>
    </Segment>
    <Grid stackable columns={2}>

      <Grid.Column>
        <Segment vertical>

          <Header as="h3">Worthwhile repos</Header>
          <List divided relaxed>
            {
              props.data.repos.edges.map(({ node }, index) => <List.Item key={index}>
                <List.Icon name={node.where as SemanticICONS} size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a" href={node.link}>{node.title}</List.Header>
                  <List.Description as="a" href={node.link}>{node.description}</List.Description>
                </List.Content>
              </List.Item>,
              )
            }
          </List>
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment vertical>
          <Header as="h3">Other contributions (incl. rejected but worth keeping)</Header>
          <List divided relaxed>
            {
              props.data.contributions.edges.map(({ node }, index) => <List.Item key={index}>
                <List.Icon name={node.where as SemanticICONS} size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a" href={node.link}>{node.title}</List.Header>
                  <List.Description as="a" href={node.link}>{node.description}</List.Description>
                </List.Content>
              </List.Item>,
              )
            }
          </List>

        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment vertical>
          <Header as="h3">Projects</Header>
          <List divided relaxed>
            {
              props.data.projects.edges.map(({ node }, index) => <List.Item key={index}>
                <List.Icon name={node.where as SemanticICONS} size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a" href={node.link}>{node.title}</List.Header>
                  <List.Description as="a" href={node.link}>{node.description}</List.Description>
                </List.Content>
              </List.Item>,
              )
            }
          </List>
        </Segment>
      </Grid.Column>
    </Grid>
  </Container>);

export const pageQuery = graphql`
query About 
    {
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
      }    
`;
