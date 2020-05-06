import React from "react";
import { Button, Image, List } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/products";

const CartItemList = ({ id, brand, photos, price }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button onClick={() => removeItem()}>Remove</Button>
        </List.Content>
        <Image src={photos[0]} size="tiny" />
        <List.Content>{brand}</List.Content>
      </List.Item>
    </List>
  );
};

export { CartItemList };
