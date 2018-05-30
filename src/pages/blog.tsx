import * as React from "react";
import Link from "gatsby-link";
import { Header, Grid, Card, List, Container, Feed, Segment, Comment, Feed } from "semantic-ui-react";
import { MarkdownRemarkConnection, ImageSharp, MarkdownRemarkEdge } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";
import TagsCard from "../components/TagsCard/TagsCard";
import CategoriesCard from "../components/CategoriesCard/CategoriesCard";
import BlogPagination from "../components/BlogPagination/BlogPagination";
import ga from "./ga";

interface BlogProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
    categories: MarkdownRemarkConnection;
  };
  pathContext: {
    category?: string;
    tag?: string; // only set into `templates/tags-pages.tsx`
  };
  location: {
    pathname: string;
  };
}

export const Post = ({ node }: MarkdownRemarkEdge) => {
  const { frontmatter, timeToRead, fields: { slug }, excerpt } = node;
  const avatar = frontmatter.author.avatar.children[0] as ImageSharp;
  const cover = frontmatter.image ? frontmatter.image.children[0] as ImageSharp : null;
  return (
    <Feed.Event key={slug}>
      <Feed.Label>
        <img
          src={avatar.responsiveResolution.src}
          srcSet={avatar.responsiveResolution.srcSet} />

      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>{frontmatter.author.id}</Feed.User>
          <Feed.Date>{frontmatter.updatedDate} - {timeToRead} min read</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          <Link to={slug}><strong>{frontmatter.title}</strong></Link><br />
          <small>{excerpt}</small>
          <br />
          <Link to={slug}>Read more…</Link>
        </Feed.Extra>        
        {
          frontmatter.image && <Feed.Extra images>
            <img
              src={(frontmatter.image.children[0] as ImageSharp).responsiveResolution.src}
              srcSet={(frontmatter.image.children[0] as ImageSharp).responsiveResolution.srcSet}
            />
          </Feed.Extra>
        }
      </Feed.Content>
    </Feed.Event>
  );
};

export default ga((props: BlogProps) => {

  if (!props.data) {
    return <Segment color="red">No data</Segment>;
  }
  console.log(props.data);
  const tags = props.data.tags.group;
  const categories = props.data.categories.group;
  const posts = props.data.posts.edges;
  const { pathname } = props.location;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);

  // TODO export posts in a proper component

  const Posts = (
    <Feed>
      {posts.map(Post)}
    </Feed>
  );

  return (
    <Container>
      {/* Title */}
      <BlogTitle subtitle={props.pathContext.category || props.pathContext.tag || null} />

      {/* Content */}
      <Segment vertical>
        <Grid padded style={{ justifyContent: "space-around" }}>
          <div style={{ maxWidth: 600 }}>
            {Posts}
            <Segment vertical textAlign="center">
              <BlogPagination Link={Link} pathname={pathname} pageCount={pageCount} />
            </Segment>
          </div>
          <div>
            <TagsCard Link={Link} tags={tags} tag={props.pathContext.tag} />
            <CategoriesCard Link={Link} categories={categories} category={props.pathContext.category} />
          </div>
        </Grid>
      </Segment>
    </Container>
  );
});

export const pageQuery = graphql`
query PageBlog {
  # Get tags
  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  categories: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___category) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___createdDate] },
    filter: {
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/blog/" }
    },
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
                responsiveResolution(width: 400, height: 400) {
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
