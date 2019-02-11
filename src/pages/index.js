/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { graphql, Link } from 'gatsby';
import { Posts } from '../components';
import Layout from '../layouts';
import { theme } from '../layouts/colors';

const IndexPage = withTheme(props => (
  <main>
    <Posts posts={props.data.posts.edges.map(post => post.node)} />
    <Link
      as={`button`}
      css={css(`
          background-color: ${props.theme.shade};
          padding: 1rem;
          width: 100%;
          display: block;
          border: none;
          text-align: center;
          color: ${props.theme.dark};
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
  }
`;
