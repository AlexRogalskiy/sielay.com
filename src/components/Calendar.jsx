/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const normalize = list => {
  const hash = list.reduce((prev, current) => {
    const parts = current.fieldValue.split('-');
    const year = (prev[parts[0]] = prev[parts[0]] || {});
    year[parts[1]] = (year[parts[1]] || 0) + current.totalCount;
    return prev;
  }, {});
  const output = Object.keys(hash)
    .sort()
    .reverse()
    .map(year => ({
      year,
      months: Object.keys(hash[year])
        .map(month => ({
          month,
          count: hash[year][month]
        }))
        .sort((a, b) => (a.month === b.month ? 0 : a.month > b.month ? -1 : 1))
    }));
  return output;
};

export const Calendar = withTheme(({ entries, theme }) => (
  <nav
    css={css(`
      clear: both;
      & > div {
        width: calc(33% - .5rem);
        float: left;
      }
      & > div > ul {
        background: ${theme.shade};
        border-radius: .25rem;
        padding: 1rem;
        margin: 0 .5rem 0 0;
        list-style: none;
        height: 26rem;
      }
      & > br {
        clear: both;
      }
    }
`)}
  >
    {normalize(entries).map(year => (
      <div key={year.year}>
        <h3>{year.year}</h3>

        <ul>
          {year.months.map(({ month, count }) => (
            <li key={month}>
              <Link to={`/blog/months/${year.year}-${month}/`}>
                {months[month - 1]} ({count})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
    <br/>
  </nav>
));

export const pageQuery = graphql`
  fragment calendarFragment on MarkdownRemarkConnection {
    group(field: frontmatter___updatedDate) {
      fieldValue
      totalCount
    }
  }
`;
