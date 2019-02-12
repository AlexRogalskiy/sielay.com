/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

export const Footer = withTheme(({ theme }) => (
  <footer
    css={css(`
      background: ${theme.dark};
      color: ${theme.background};
      padding: 1rem;
      text-align: center;
  `)}
  >
    Powered by Gatsby 2.0
  </footer>
));
