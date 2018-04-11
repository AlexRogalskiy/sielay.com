import Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar, Button, Message } from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import { Provider } from "react-redux";
import { store } from "../store";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "About", path: "/about/", exact: true, icon: "info circle" },
  { name: "CV", path: "/cv/", exact: true, icon: "info circle" },
  { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
  { name: "Publications", path: "/publications/", exact: false, icon: "newspaper" },
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

export default (props: DefaultLayoutProps) => {
  const { pathname } = props.location;
  const isHome = pathname === "/";

  return (
    <Provider store={store}>
      <Sidebar.Pushable as={Segment}>

        <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />

        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {/* Header */}
          <HeaderMenu
            Link={Link}
            pathname={pathname}
            items={menuItems}
          />

          {/* Render children pages */}
          <div style={{ paddingBottom: 60 }}>
            {props.children()}
            <Container>
              <Message color={pathname === "/" ? "black" : "yellow"} size="mini">This page uses cookies to track visits
            using Google Analytics with <code>anonymize</code> and <code>respect do not track</code> enabled. You
            can <a href="http://donottrack.us/" target="_blank">opt out</a> from being tracked.</Message>
            </Container>
          </div>

          {/* Footer */}
          <Segment inverted vertical style={{ position: "absolute", bottom: 0, width: "100%" }}>
            <Container textAlign="center">
              <p>
                Powered with <Icon name="heart" /> by <a href="gatsbyjs.org" target="_blank"
                  title="Gatsby 1.0 starter with typescript and many cools dev tools">Gatsby 1.0</a> &amp;
                TypeScript Starter by <a href="https://github.com/fabien0102/gatsby-starter"
                  target="_blank" title="Gatsby 1.0 starter with typescript and many cools dev tools">fabien0102</a>
              </p>
            </Container>

          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Provider>
  );
};
