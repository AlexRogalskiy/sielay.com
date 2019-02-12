/** @jsx jsx */
import * as React from 'react';
import { Link } from 'gatsby';
import { get, kebabCase } from 'lodash';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

const Post = ({
  cover: { src, srcSet },
  post: {
    frontmatter: { title, updatedDate, tags },
    timeToRead,
    fields: { slug },
    excerpt
  }
}) => (
  <div key={slug}>
    <div>
      <h3>
        <Link to={slug}>{title}</Link>
      </h3>
      <div>
        {tags
          ? tags.map(tag => (
              <Link key={tag} to={'/blog/tags/' + kebabCase(tag)} size={'mini'}>
                {tag}
              </Link>
            ))
          : null}
        {timeToRead} min read - {updatedDate}
      </div>
      <p>
        {excerpt} <Link to={slug}>read more…</Link>
      </p>
      {src ? <img src={src} srcSet={srcSet} /> : null}
    </div>
  </div>
);
export const Posts = withTheme(({ posts, theme }) => (
  <div
    css={css(`
    * > div > p {
      padding: 1rem 0;
      border-bottom: 1px solid ${theme.shade};
    }
    * > div > div {
      color: ${theme.dark};
      opacity: .5;
      font-size: .8rem;
    }
  `)}
  >
    {posts.map((post, key) => {
      const cover = get(post.frontmatter, 'image.children.0.fixed', {});
      return <Post post={post} key={key} cover={cover} />;
    })}
  </div>
));

export const query = graphql`
  fragment blogFeedFragment on MarkdownRemarkConnection {
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
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
          author {
            id
            avatar {
              children {
                ... on ImageSharp {
                  fixed(width: 35, height: 35) {
                    ...GatsbyImageSharpFixed_withWebp
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
