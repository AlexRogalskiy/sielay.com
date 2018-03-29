import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { Container, Label, Menu, Icon, Message } from "semantic-ui-react";
import { MenuProps } from "../Menu";

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({ items, pathname, Link, inverted, dispatch }: HeaderMenuProps) =>
  <Container>
    <Menu size="large" pointing secondary inverted={inverted}>
      <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => dispatch && dispatch(toggleSidebar())} />
      <Menu.Item className="mobile hidden"><Icon name="spy" size="big" /></Menu.Item>
      {items.map((item) => {
        const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
        return <Menu.Item
          as={Link}
          className="mobile hidden"
          name={item.name}
          to={item.path}
          key={item.path}
          active={active}
        />;
      })}
    </Menu>
    <Message color={pathname === "/" ? "black" : "yellow"} size="mini">This page uses cookies to track visits using 
    Google Analytics with 
    <code>anonymize</code> and <code>respect do not track</code> enabled. You 
    can <a href="http://donottrack.us/" target="_blank">opt out</a> from being tracked.</Message>
  </Container>;

export default connect()(HeaderMenu);
