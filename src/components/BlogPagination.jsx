/** @jsx jsx */
import * as React from 'react';
import { times } from 'lodash';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';

export const BlogPagination = withTheme(({ pageCount, pathname, theme }) => {
  if (pageCount === 1) {
    return null;
  }
  const activeItem = pathname.startsWith('/blog/page/')
    ? pathname.split('/')[3]
    : '1';

  return (
    <ul
      css={css(`
      list-style: none;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      & > li {
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
        margin-right: .5rem;
      }
      & > li > a, & > li.active > a, & > li[disabled] {
        padding: .25rem 1rem;
        display: inline-block;
        border-radius: .25rem;
      }
      & > li > a:hover {
        background: ${theme.hover};
        color: ${theme.background};
      }
      & > li.active > a {
        background: ${theme.link};
        color: ${theme.background};
      }
      & > li:hover > a {
        color: ${theme.background};
      }
    `)}
    >
      {times(pageCount, index => {
        const pageIndex = (index + 1).toString();
        const rangeStep = pageCount < 10 ? 5 : 3;
        const isInRange =
          +pageIndex - rangeStep < +activeItem &&
          +pageIndex + rangeStep > +activeItem;
        const isLastPage = +pageIndex === pageCount;
        const isFirstPage = +pageIndex === 1;
        if (isInRange || isFirstPage || isLastPage) {
          return (
            <li
              key={index}
              className={activeItem === pageIndex ? 'active' : ''}
            >
              <Link
                key={pageIndex}
                style={{ cursor: 'pointer' }}
                to={`/blog/page/${pageIndex}/`}
                name={pageIndex}
              >
                {pageIndex}
              </Link>
            </li>
          );
        }
        return +pageIndex === pageCount - 1 || +pageIndex === 2 ? (
          <li key={index} disabled>
            ...
          </li>
        ) : null;
      })}
    </ul>
  );
});
