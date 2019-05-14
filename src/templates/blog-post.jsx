/** @jsx jsx */
import * as React from 'react';
import { Link } from 'gatsby';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { get } from 'lodash';
import { DiscussionEmbed } from 'disqus-react';
import rehypeReact from 'rehype-react';
import InstagramEmbed from 'react-instagram-embed';
import YouTube from 'react-youtube-embed'
import { Posts } from '../components';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import { Sidebar } from '../components/Sidebar';

class Iframe extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <iframe src={this.props.src || this.props.url} css={css(`
      border: none;
      width: 100%;
      min-height: 100px;
    `)}/>
  }
}

const components =  {
  'iframe': Iframe,
  'instagram-embed': InstagramEmbed,
  'youtube-embed': YouTube
};

const componentNames = Object.keys(components);

const renderAstFunction = new rehypeReact({
  createElement: React.createElement,
  components
}).Compiler;

const renderAst = (node ) => {
  node.children = node.children
  .map(n => {
    if (n.tagName === 'p' && n.children.map(m => m.tagName).filter(m => componentNames.indexOf(m) !== -1).length > 0) {
      return n.children[0];
    } else {
      return n;
    }
  });
  console.log(node)
  return renderAstFunction(node)
}

const Tags = withTheme(({ tags, theme }) =>
  tags.map(tag => (
    <Link
      to={`/blog/tags/${tag}/`}
      title={tag}
      key={tag}
      css={css(`
      &:after {
        content: '|';
        padding: 0 .25rem;
        color: ${theme.dark};
      }
      &:last-child:after {
        display: none;
      }
    `)}
    >
      {tag}
    </Link>
  ))
);

const Recovered = withTheme(({ age, theme }) => (
  <div
    css={css(`
    background: ${theme.shade};
    padding: 1rem;
    border-radius: .5rem;
    margin: 1rem 0;
  `)}
  >
    <h3>DISCLAIMER</h3>
    This article has been recovered using archive.org as my plan to find back
    how I evolved over the years. My opinons might have changed since. I was{' '}
    {age} years old when I wrote it.
  </div>
));

const Source = withTheme(
  ({ source, sourceType, theme }) =>
    source && (
      <p
        className="small"
        css={css(`
  background: ${theme.shade};
  padding: 1rem;
  border-radius: .5rem;
  margin: 1rem 0;
`)}
      >
        This article war originally posted on {sourceType}
        <a
          href={source}
          target="_blank"
          style={{
            float: 'right'
          }}
        >
          View Original
        </a>
      </p>
    )
);

const BlogPost = ({
  data: {
    site,
    recents,
    posts,
    tags,
    calendar,
    post: { frontmatter, htmlAst, timeToRead, fields }
  },
  pageContext
}) => {
  const myIndex = (posts ? posts.edges : []).findIndex(
    ({
      node: {
        fields: { slug }
      }
    }) => slug === fields.slug
  );

  const previousAndNext =
    myIndex !== -1
      ? [posts.edges[myIndex - 1], posts.edges[myIndex + 1]]
          .filter(Boolean)
          .map(({ node }) => node)
      : [];

  const { src, srcSet } = get(frontmatter, 'image.children.0.fixed', {});

  const updated = Date.parse(frontmatter.updatedDate);
  const born = Date.parse('1984-04-10');
  const age = Math.floor((updated - born) / 1000 / 60 / 60 / 24 / 365.25);

  const { title, source, sourceType, updatedDate} = frontmatter;

  return (
    <React.Fragment>
      <main>
        <article
          css={css(`
          & > div > p,
          & > div > ol,
          & > div > ul {
            line-height: 2.5rem;
            font-family: 'Merriweather', serif;
            font-size: 1.5rem;
          }
          & > div > ol,
          & > div > ul {
            font-size: 1.25rem;
          }
        `)}
        >
          <h1>{title}</h1>
          <p className="small">
            {updatedDate} - {timeToRead} min read
          </p>

          {src && <img src={src} srcSet={srcSet} title={title} css={css(`
            display: block;
            width: 100%;
          `)} />}

          {frontmatter.tags.indexOf('recovered') !== -1 && (
            <Recovered age={age} />
          )}

          <Source
            source={source}
            sourceType={sourceType}
          />

          {renderAst(htmlAst)}

          <div>
            <Tags tags={frontmatter.tags} />
          </div>
        </article>
      </main>
      <aside css={css(`
        padding: 1rem 2rem;
      `)}>
        <div>
          <h3>Previous &amp; Next</h3>
          <Posts posts={previousAndNext} />
        </div>
        {site && site.siteMetadata && site.siteMetadata.disqus && (
          <div>
            <DiscussionEmbed
              shortname={site.siteMetadata.disqus}
              config={{
                url: `https://sielay.com${fields.slug}`,
                identifier: fields.slug,
                title: title
              }}
            />
          </div>
        )}

        <h3>Recent</h3>
        <Posts posts={(recents ? recents.edges : []).map(({ node }) => node)} />

        <Sidebar data={{ tags, calendar }} pageContext={pageContext} />
      </aside>
    </React.Fragment>
  );
};

export default props => (
  <Layout {...props}>
    <BlogPost {...props} />
  </Layout>
);

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    # Get tags
    tags: allMarkdownRemark {
      ...tagsFragment
    }

    # Get calendar
    calendar: allMarkdownRemark {
      ...calendarFragment
    }

    site: site {
      siteMetadata {
        disqus
      }
    }

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      ...blogFeedFragment
    }

    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        tags
        author {
          id
          bio
          twitter
          avatar {
            children {
              ... on ImageSharp {
                fixed(width: 80, height: 80, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
        title
        source
        sourceType
        updatedDate(formatString: "MMM D, YYYY")
        image {
          children {
            ... on ImageSharp {
              fixed(width: 900, height: 300, quality: 100, cropFocus: CENTER) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
    recents: allMarkdownRemark(
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      limit: 4
    ) {
      ...blogFeedFragment
    }
  }
`;
