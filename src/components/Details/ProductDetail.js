import React, { useState } from "react";
import { Button, Header, Divider } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/products";
import { toast } from "react-toastify";
import Select from "./Sizes";
import Facts from "./Facts";

const ProductDetail = ({ id, photos, brand, price, category, size }) => {
  let [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const addItemsToCart = () => {
    if (!selected) {
      toast.warning("Please select a size");
    } else {
      const product = {
        id,
        photos,
        brand,
        category,
        price,
        quantity,
        size: selected,
      };
      dispatch(addToCart(product));
      toast(`Added ${brand} to cart`);
    }
  };

  return (
    <>
      <Header as="h2">{brand}</Header>
      <Header as="h4">{category}</Header>
      <Divider />
      <Header as="h2">Rs. {price}</Header>
      <Header as="h3">Quantity {quantity}</Header>
      <Button.Group>
        <Button fluid onClick={() => setQuantity(quantity + 1)}>
          Add
        </Button>
        <Button.Or />
        <Button
          fluid
          onClick={() => (quantity >= 2 ? setQuantity(quantity - 1) : null)}
        >
          Remove
        </Button>
      </Button.Group>
      <Header>
        <Select selected={{ selected: [selected, setSelected] }} />
      </Header>
      <Facts />
      <Button positive fluid onClick={() => addItemsToCart()}>
        Add
      </Button>
    </>
  );
};

export { ProductDetail };
