import React from "react";
import { List, Button } from "semantic-ui-react";
import { useSelector } from "react-redux";

const ProductDescription = ({ onButtonClick }) => {
  const totalAmount = useSelector((state) => state.products.amount);
  return (
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">Rs. {totalAmount}</List.Content>
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
