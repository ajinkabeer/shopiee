import React from "react";
import { List, Button, Segment } from "semantic-ui-react";
import { useSelector } from "react-redux";

const ProductDescription = ({ onButtonClick }) => {
  const totalAmount = useSelector((state) => state.products.amount);
  return (
    <Segment>
      <List verticalAlign="middle">
        <List.Item style={{ marginTop: 10 }}>
          <List.Content floated="right">Rs. {totalAmount}</List.Content>
          <List.Content>Total Amount</List.Content>
        </List.Item>
        <List.Item style={{ marginTop: 10, marginBottom: 10 }}>
          <List.Content floated="right">
            Rs. {Math.floor(Math.random() * 100) + 1}
          </List.Content>
          <List.Content>Eligible Discount</List.Content>
        </List.Item>

        <Button
          positive
          fluid
          onClick={onButtonClick}
          disabled={totalAmount === 0 ? true : false}
        >
          Checkout
        </Button>
      </List>
    </Segment>
  );
};

export { ProductDescription };
