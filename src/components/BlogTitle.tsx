import * as React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

export default (props?: { [key: string]: any }) => {
  console.log(props);
  return (
    <Segment vertical>
      <Header as="h2">
        <Icon name="newspaper" />
        <Header.Content>
          Blog
            {props.subtitle && <Header.Subheader>
            {props.subtitle}
          </Header.Subheader>
          }
        </Header.Content>
      </Header>
    </Segment>
  );
};
