import React from "react";
import { Button, Image, List } from "semantic-ui-react";

const CartItemList = ({ brand, photos, price }) => {
  return (
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button>Remove</Button>
        </List.Content>
        <Image src={photos[0]} size="tiny" />
        <List.Content>{brand}</List.Content>
      </List.Item>
    </List>
  );
};

export { CartItemList };
