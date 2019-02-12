/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { graphql, Link } from 'gatsby';
import { Posts } from '../components';
import Layout from '../layouts';
import { get } from 'lodash';

const Tiles = withTheme(({ posts, theme }) => (
  <ul
    css={css(`
    list-style: none;
    margin: 0px;
    padding: 0px 1.5rem 1rem;
    border-bottom: 1px solid ${theme.shade};
    margin-auto;
    display: block;
    & > li {
      margin: 0px;
      padding: 0px;
      float: left;
    }
    &:after {
      content: ' ';
      display: block;
      clear: both;
    }
    & > li > a {
      opacity: .5;
      padding: 0 .25rem 0 .25rem;
    }
    & > li > a:hover {
      opacity: 1
    }
  `)}
  >
    {posts.map(
      ({ frontmatter, fields: { slug }, frontmatter: { title } }, key) => {
        const { src, srcSet } = get(frontmatter, 'image.children.0.fixed', {});
        return (
          <li key={key}>
            <Link to={slug} title={title}>
              <img src={src} srcSet={srcSet} />
            </Link>
          </li>
        );
      }
    )}
  </ul>
));

const IndexPage = withTheme(({ data: { pictures, posts }, theme }) => (
  <main
    css={css(`
  & h2 {
    margin-bottom: 1rem;
  }
    `)}
  >
    <h2>Welcome</h2>
    <p
      css={css(`
      padding: 1rem 0 0;
    line-height: 2rem;
    font-family: 'Merriweather', serif;
    font-size: 1.25rem;
    `)}
    >
      SIELAYs' blog about <Link to="/blog/tags/javascript/">#javascript</Link>,{' '}
      <Link to="/blog/tags/mental-health/">#mental-health</Link>,
      <Link to="/blog/tags/family/">#family</Link>,{' '}
      <Link to="/blog/tags/cycling/">#cycling</Link> and{' '}
      <Link to="/blog/tags/self-development/">#self-development</Link>
    </p>
    <h2>Posts Pictures</h2>
    <Tiles
      posts={pictures.edges
        .map(post => post.node)
        .filter(node => !!node.frontmatter.image)}
    />
    <h2>Recent Posts</h2>
    <Posts posts={posts.edges.map(post => post.node)} />
    <Link
      as={`button`}
      css={css(`
          background-color: ${theme.shade};
          padding: 1rem;
          width: 100%;
          display: block;
          border: none;
          text-align: center;
          color: ${theme.dark};
          font-family: Montserrat, sans-serif;
          margin-top: 1rem;
          &:hover {

          }
      `)}
      to={'/blog'}
    >
      Read more
    </Link>
  </main>
));

export default props => (
  <Layout {...props}>
    <IndexPage {...props} />
  </Layout>
);

export const pageQuery = graphql`
  query PageIndexBlog {
    site: site {
      siteMetadata {
        title
      }
    }

    # Get tags
    tags: allMarkdownRemark {
      ...tagsFragment
    }

    # Get calendar
    calendar: allMarkdownRemark {
      ...calendarFragment
    }

    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      limit: 5
    ) {
      ...blogFeedFragment
    }

    pictures: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            updatedDate(formatString: "DD MMMM, YYYY")
            image {
              children {
                ... on ImageSharp {
                  fixed(width: 50, height: 50) {
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
