import React from "react";
import { Button, Image, List, Label } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  reduceOrderQuantity,
} from "../../redux/actions/products";

const CartItemList = ({ id, brand, photos, quantity, size }) => {
  const dispatch = useDispatch();

  const reduceQuantity = () => {
    const product = {
      id,
      quantity,
    };
    dispatch(reduceOrderQuantity(product));
  };

  const removeItem = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button
            onClick={() => (quantity === 0 ? removeItem() : reduceQuantity())}
          >
            -
          </Button>
          <Button onClick={() => removeItem()}>Remove</Button>
        </List.Content>
        <Image src={photos[0]} size="tiny" alt={brand} />
        <List.Content>
          <Label>{brand} </Label> <Label>{quantity} units</Label>{" "}
          <Label>{size}</Label>
        </List.Content>
      </List.Item>
    </List>
  );
};

export { CartItemList };
