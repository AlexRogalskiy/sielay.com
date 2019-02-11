/** @jsx jsx */
import * as React from 'react';
import { kebabCase } from 'lodash';
import { Link, graphql } from 'gatsby';
import { withTheme } from 'emotion-theming';
import { jsx, css } from '@emotion/core';

const sizes = {
  mini: 0.001,
  tiny: 0.002,
  small: 0.003,
  medium: 0.005,
  large: 0.01,
  big: 0.02,
  huge: 0.05,
  massive: 0.2
};

const tagToSize = (total, count) => {
  const weight = count / total;
  return (
    Object.keys(sizes)
      .filter(size => weight >= sizes[size])
      .pop() || 'mini'
  );
};

const Tag = ({ tag, total, current, theme }) => {
  const isActive = tag.fieldValue === current;
  const tagLink = isActive
    ? '/blog'
    : `/blog/tags/${kebabCase(tag.fieldValue)}/`;
  return (
    <Link
      to={tagLink}
      key={tag.fieldValue}
      className={[tagToSize(total, tag.totalCount), isActive ? 'active' : null]
        .filter(Boolean)
        .join(' ')}
    >
      {tag.fieldValue}
    </Link>
  );
};

export const Tags = withTheme(({ tags, tag, theme }) => {
  const total = tags.reduce((previous, next) => previous + next.totalCount, 0);
  const tagsList = [...tags.sort(() => Math.random() - 0.5)];
  return (
    <div>
      <h3>Tags</h3>
      <div
        css={css(`
          line-height: 2.5rem;
          & > a {
            display: inline-block;
            padding: .5rem 1rem;
            border-radius: .25rem;
            height: 3.5rem;
            vertical-align: middle;
          }
          & > a.active, & > a:hover {
            background: ${theme.link};
            color: ${theme.background};
          }
          & > a:hover {
            background: ${theme.hover};
          }
          & > .mini: {
            font-size: .5rem;
          }
          & > .tiny {
            font-size: .65rem;
          }
          & > .small {
            font-size: .9rem;
          }
          & > .medium {
            font-size: 1rem;
          }
          & > .large {
            font-size: 1.1rem;
          }
          & > .big {
            font-size: 1.25rem;
          }
          & > .huge {
            font-size: 1.5rem;
          }
          & > .massive {
            font-size: 2rem;
          }
        `)}
      >
        {tagsList.map((next, index) => (
          <Tag current={tag} tag={next} key={index} total={total} />
        ))}
      </div>
    </div>
  );
});

export const pageQuery = graphql`
  fragment tagsFragment on MarkdownRemarkConnection {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
`;
