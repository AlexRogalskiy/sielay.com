import * as React from "react";
import { Header, Container, Segment, Icon, List, Grid } from "semantic-ui-react";
import {
  ArticlesJsonConnection,
} from "../graphql-types";

interface ArticlesProps {
  data: {
    articles: ArticlesJsonConnection;
  };
}

export default (props: ArticlesProps) =>
  <Container>
    <Segment vertical>
      <Header as="h2">
        <Icon name="info circle" />
        <Header.Content>
          Publications
          </Header.Content>
      </Header>
    </Segment>
    <Grid stackable columns={2}>
      <Grid.Column>
        <Segment vertical>
          <Header as="h3">Articles</Header>
          <List divided relaxed>
            {
              props.data.articles.edges.map(({ node }, index) => <List.Item key={index}>
                <List.Icon name={node.where} size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a" href={node.link}>{node.title}</List.Header>
                  <List.Description as="a" href={node.link}>{node.date}</List.Description>
                </List.Content>
              </List.Item>,
              )
            }
          </List>
        </Segment>
      </Grid.Column>
    </Grid>
  </Container>;

export const pageQuery = graphql`
query Articles 
    {
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
`;
