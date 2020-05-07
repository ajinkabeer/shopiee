import React, { useState } from "react";
import { List, Button, Header, Divider } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addOrderQuantity } from "../../redux/actions/products";
import { toast } from "react-toastify";

const ProductDetail = ({ id, photos, brand, price, category }) => {
  let [quantity, setQuantity] = useState(1);
  const currentQuantity = useSelector((state) => state.products.quantity);
  const dispatch = useDispatch();

  const addItemsToCart = () => {
    const product = {
      id,
      photos,
      brand,
      category,
      price,
      quantity,
    };
    dispatch(addToCart(product));
    toast(`Added ${brand} to cart`);
  };

  const addOrderQuanty = () => {
    setQuantity(quantity + 1);
    const quantit = {
      id,
      quantity,
    };
    dispatch(addOrderQuantity(quantit));
  };

  console.log("Current", currentQuantity);

  return (
    <>
      <Header as="h2">{brand}</Header>
      <Header as="h4">{category}</Header>
      <Divider />
      <Header as="h2">Rs. {price}</Header>
      <Header as="h3">Quantity {quantity}</Header>
      <Button.Group>
        <Button onClick={() => addOrderQuanty()}>Add</Button>
        <Button.Or />
        <Button
          onClick={() => (quantity >= 2 ? setQuantity(quantity - 1) : null)}
        >
          Remove
        </Button>
      </Button.Group>
      <Header as="h4">Facts</Header>

      <p>100% Original Products</p>
      <p>Free Delivery on order above Rs. 1199</p>
      <p>
        Pay on delivery might be available Easy 30 days returns and exchanges
        Try & Buy might be available
      </p>
      <Button positive fluid onClick={() => addItemsToCart()}>
        Add
      </Button>
    </>
  );
};

export { ProductDetail };
