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
  SemanticICONS,
  Feed,
} from "semantic-ui-react";
import {
  ReposJsonConnection, MarkdownRemarkConnection,
} from "../graphql-types";
import ga from "./ga";

interface IndexPageProps {
  data: {
    repos: ReposJsonConnection;
    posts: MarkdownRemarkConnection;
  };
  location: {
    pathname: string;
  };
}

declare var twttr;

export default ga(class IndexPage extends React.Component {

  public node;

  constructor(props: IndexPageProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    if (this.state["initialized"]) {
      return;
    }

    if (typeof twttr === "undefined") {
      const twittertimeline = this.node;
      const twitterscript = document.createElement("script");
      twitterscript.src = "//platform.twitter.com/widgets.js";
      twitterscript.async = true;
      twitterscript.id = "twitter-wjs";
      twittertimeline.parentNode.appendChild(twitterscript);
    } else {
      twttr.widgets.load();
    }

    this.setState({ initialized: true });
  }
  public render() {
    const props: IndexPageProps = this.props as IndexPageProps;
    return <div>
      {/* Master head */}
      <Container>
        {props.data &&
          <Segment vertical>
            <Grid stackable columns={2}>
              <Grid.Column>
                <Segment vertical>
                  <Header as="h2">Latest Posts</Header>
                  <Feed>
                    {
                      props.data.posts.edges.map(Post)
                    }
                    <Item>
                      <Link to="/blog/">More posts</Link>
                    </Item>
                  </Feed>
                  <Header as="h3">Worthwhile repos</Header>
                  <List divided relaxed>
                    {
                      props.data.repos.edges.map(({ node }, index) => <List.Item key={index}>
                        <List.Icon
                          name={node.where as SemanticICONS}
                          size="large"
                          verticalAlign="middle" />
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
                  <a
                    className="twitter-timeline"
                    data-tweet-limit="10"
                    href="https://twitter.com/sielay?ref_src=twsrc%5Etfw"
                    ref={(node) => this.node = node}
                  >Tweets by sielay</a>
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
        }
      </Container>
    </div>;
  }
});

export const pageQuery = graphql`
    query Index
    {
        repos: allReposJson(
        limit: 15
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
            frontmatter: {
              draft: {ne: true }
              category: {eq: "blog"} },
            fileAbsolutePath: {regex: "/blog/" }
    },
    limit: 15
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
