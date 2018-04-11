import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { GatsbyLinkProps } from "gatsby-link";
import { StoreState } from "../../store";
import { MenuProps, MenuItem } from "../Menu";
import { Menu, Icon, Sidebar, SemanticICONS } from "semantic-ui-react";

interface SidebarMenuProps extends MenuProps {
  visible?: boolean;
  dispatch?: Dispatch<any>;
  Link: React.ComponentClass<GatsbyLinkProps>;
}

export const SidebarMenu = ({ items, pathname, Link, visible }: SidebarMenuProps) => {
  const isActive = (item: MenuItem) => (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
  const activeItem = items.find((item: MenuItem) => isActive(item)) || {} as MenuItem;
  return (
    <Sidebar as={Menu} animation="slide along" width="thin"
      visible={visible} icon="labeled" vertical inverted={activeItem.inverted}>
      {items.map((item) => {
        const active = isActive(item);
        return (
          <Menu.Item as={Link} to={item.path} active={active} key={item.path}>
            <Icon name={item.icon as SemanticICONS} />
            {item.name}
          </Menu.Item>
        );
      })}
      <Menu.Item
        as={"a"}
        href={"https://calendly.com/lukaszsielski/f2f/04-18-2018"}
        target="_blank"
        className="mobile only"
        name={"F2F interview"}
        key={"f2f"}
        active={false}
      ><Icon name={"globe" as SemanticICONS} />
        {"F2F interview"}
      </Menu.Item>
    </Sidebar>
  );
};

const mapStateToProps = (state: StoreState) => ({
  visible: state.isSidebarVisible,
});

export default connect<any, void, SidebarMenuProps>(mapStateToProps)(SidebarMenu);
