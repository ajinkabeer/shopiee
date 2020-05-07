import React from "react";
import { List, Button } from "semantic-ui-react";

const ProductDescription = ({ totalAmount, onButtonClick, quantity }) => {
  const totalQuantity = quantity.reduce((a, b) => a + b, 0);

  return (
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          Rs. {totalAmount * totalQuantity}
        </List.Content>
        <List.Content>Total Amount</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated="right">
          Rs. {Math.floor(Math.random() * 100) + 1}
        </List.Content>
        <List.Content>Eligible Discount</List.Content>
      </List.Item>

      <Button positive fluid onClick={onButtonClick}>
        Checkout
      </Button>
    </List>
  );
};

export { ProductDescription };
