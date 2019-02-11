/** @jsx jsx */
import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { upperFirst, camelCase } from 'lodash';
import * as Fa from 'react-icons/fa';

export const FaIcon = icon => {
  const path = `Fa${upperFirst(camelCase(icon))}`;
  const Component = Fa[path]
  return Component ? <Component /> : null;
};

export const Body = () => (
  <Global
    styles={theme =>
      css(`
            html, body {
                background-color: ${theme.background};
                color: ${theme.dark};
                margin: 0px;
                padding: 0px;
                height: 100%;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: Montserrat, sans-serif;
                margin: 0px;
                margin-top: 0px;
                font-weight: 400;
            }

            main {
                padding: 2rem;
            }

            @media (min-width: 576px) {
                .mobile-only {
                display: none;
                }
            }
            @media (max-width: 576px) {
                .desktop-only {
                display: none;
                }
            }

            a, a:link {
                color: ${theme.link};
                text-decoration: none;
            }
            a:active, a:hover {
                color: ${theme.hover};
                text-decoration: none;
            }
        `)
    }
  />
);
