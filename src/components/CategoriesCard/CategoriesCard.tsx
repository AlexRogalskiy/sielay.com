import * as React from "react";
import { GatsbyLinkProps } from "gatsby-link";
import { Card, List } from "semantic-ui-react";
import { markdownRemarkGroupConnectionConnection } from "../../graphql-types";

interface CategoriesCardProps extends React.HTMLProps<HTMLDivElement> {
  categories: markdownRemarkGroupConnectionConnection[];
  Link: React.ComponentClass<GatsbyLinkProps>;
  category?: string;
}

export default (props: CategoriesCardProps) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          Categories
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <List>
          {props.categories.map((category) => {
            const isActive = category.fieldValue === props.category;
            const activeStyle = {
              fontWeight: "700",
            };
            const tagLink = isActive ? `/blog` : `/blog/category/${category.fieldValue}/`;
            return (
              <List.Item as="span" key={category.fieldValue}>
                <List.Icon name="tag" color={isActive ? "blue" : null} />
                <List.Content style={isActive ? activeStyle : null}>
                  <props.Link to={tagLink}>
                    {category.fieldValue} ({category.totalCount})
                  </props.Link>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </Card.Content>
    </Card>
  );
};
