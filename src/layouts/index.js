import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import '../css/styles.css'
import '../css/responsive.css'
import '../css/semantic.min.css'
require('prismjs/themes/prism-twilight.css')
import { Provider } from 'react-redux'
import { store } from '../store'
import { Sidebar, Segment, Container, Icon } from 'semantic-ui-react'
import SidebarMenu from '../components/SidebarMenu'
import HeaderMenu from '../components/HeaderMenu'
import CookieConsent from 'react-cookie-consent'

export const menuItems = [
  { name: 'Home', path: '/', exact: true, icon: 'home', inverted: true },
  { name: 'About', path: '/about/', exact: true, icon: 'info', inverted: true },
  { name: 'Blog', path: '/blog/', exact: false, icon: 'newspaper' },
  {
    name: 'Instagram',
    path: 'https://instagram.com/sielay',
    iconOnly: true,
    icon: 'instagram',
  },
  {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/in/sielay/',
    iconOnly: true,
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    path: 'https://twitter.com/sielay',
    iconOnly: true,
    icon: 'twitter',
  },
]

const Layout = ({ children, data, location }) => {
  const { pathname } = location
  const isHome = pathname === '/'
  return (
    <div>
      <Provider store={store}>
        <Sidebar.Pushable as={Segment}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <SidebarMenu
            Link={Link}
            pathname={pathname}
            items={menuItems}
            visible={false}
          />
          <Sidebar.Pusher style={{ minHeight: '100vh' }}>
            {/* Header */}
            <HeaderMenu
              Link={Link}
              pathname={pathname}
              items={menuItems}
              dispath={store.dispatch.bind(store)}
            />
            {/* Render children pages */}
            <div style={{ paddingBottom: 60 }}>{children()}</div>

            {/* Footer */}
            <Segment
              inverted
              vertical
              style={{ position: 'absolute', bottom: 0, width: '100%' }}
            >
              <Container textAlign="center">
                <p>
                  Powered with <Icon name="heart" /> by Gatsby 1.0
                </p>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Provider>
      <CookieConsent
        buttonText="Sure man!!"
        style={{ background: '#2B373B', position: 'fixed', botton: '0px' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        This website uses cookies for Google Analytics, so I know if anyone reads it at all. No ads are served, yet.
      </CookieConsent>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
