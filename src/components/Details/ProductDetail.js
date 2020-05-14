import React, { useState } from "react";
import { Button, Header, Divider, Segment, Statistic } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/products";
import { toast } from "react-toastify";
import Select from "./Sizes";
import Facts from "./Facts";
import Delivery from "./DeliveryOptions";

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
    <Segment>
      <Header as="h2">{brand}</Header>
      <Header as="h4">{category}</Header>
      <Divider />
      <Statistic
        label={"Price"}
        value={`₹ ${price}`}
        horizontal
        size="tiny"
        color="orange"
      />
      <Statistic
        label="Quantity"
        color="orange"
        horizontal
        size="tiny"
        value={quantity}
      />
      <br />
      <Button.Group>
        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
        <Button
          onClick={() => (quantity >= 2 ? setQuantity(quantity - 1) : null)}
        >
          -
        </Button>
      </Button.Group>
      <Select selected={{ selected: [setSelected] }} />
      <Button positive fluid onClick={() => addItemsToCart()}>
        Add
      </Button>
      <Delivery />

      <Facts />
    </Segment>
  );
};

export { ProductDetail };
