import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import { Post } from "./blog";
// import { PhysicsMousePick } from "../components/3d/index";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Item,
} from "semantic-ui-react";
import {
  ReposJsonConnection, MarkdownRemarkConnection,
} from "../graphql-types";

interface IndexPageProps {
  data: {
    repos: ReposJsonConnection;
    posts: MarkdownRemarkConnection;
  };
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
      <Container text>
        <Header inverted as="h1">SIELAY</Header>
        <Header inverted as="h2">Swiss Army Knife Developer</Header>
        <Button primary size="huge" href="/cv">Hire me</Button>
      </Container>
    </Segment>
    <Container>
      {props.data &&
        <Segment vertical>
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment vertical>
                <Header as="h3">Worthwhile repos</Header>
                <List divided relaxed>
                  {
                    props.data.repos.edges.map(({ node }, index) => <List.Item key={index}>
                      <List.Icon name={node.where} size="large" verticalAlign="middle" />
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
                <Header as="h3">Posts</Header>
                <List divided relaxed>
                  {
                    props.data.posts.edges.map(Post)
                  }
                  <Item>
                    <Link to="/blog/">More posts</Link>
                  </Item>
                </List>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      }
    </Container>
  </div>;

export const pageQuery = graphql`
    query Index
    {
        repos: allReposJson(
        limit: 5
        ) {
        edges {
      node {
        link
              title
      description
      where
    }
  }
}

# Get posts
posts: allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___createdDate] },
          filter: {
        frontmatter: {draft: {ne: true } },
            fileAbsolutePath: {regex: "/blog/" }
    },
    limit: 3
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
`;
