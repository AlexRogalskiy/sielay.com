/** @jsx jsx */
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { Provider } from 'react-redux';
import CookieConsent from 'react-cookie-consent';
import { store } from '../store';
import { SidebarMenu, HeaderMenu, Footer } from '../components';
import { jsx, css } from '@emotion/core';
import { ThemeProvider, withTheme } from 'emotion-theming';
import { menuItems } from './menu';
import { connect } from 'react-redux';
import { theme } from './colors';
import { Body } from './theme';

const mapStateToProps = state => {
  return {
    visible: state.isSidebarVisible
  };
};

const HeaderMenuInstance = withTheme(connect()(HeaderMenu));
const SidebarMenuInstance = connect(mapStateToProps)(SidebarMenu);

const Layout = ({ children, data, location }) => {
  const { pathname } = location;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Body />
        <div
          css={css(`
            margin: auto;
            max-width: 700px;
            width: 100%;
            min-height: 100%;
            & h1, & h2, & h3, & h4, & h5, & h6 {
              margin-top: 0px;
              margin: 0px;
            }
            & h2, & h3 {
              padding: 1rem 0;
            }
            & h2 {
              border-bottom: 1px solid ${theme.shade};
            }
      `)}
        >
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' }
            ]}
          />
          <SidebarMenuInstance
            Link={Link}
            pathname={pathname}
            items={menuItems}
            visible={true}
          />
          {/* Header */}
          <HeaderMenuInstance
            Link={Link}
            pathname={pathname}
            items={menuItems}
            dispath={(...args) => store.dispatch(...args)}
          />
          {/* Render children pages */}
          {children}
          {/* Footer */}
          <Footer />
          <CookieConsent
            buttonText="Sure man!!"
            style={{ background: '#2B373B', position: 'fixed', botton: '0px' }}
            buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
            expires={150}
          >
            This website uses cookies for Google Analytics, so I know if anyone
            reads it at all. No ads are served, yet.
          </CookieConsent>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
