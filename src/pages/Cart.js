import React from "react";
import { useSelector } from "react-redux";
import { CartItems } from "../components/Cart/CartItems";
import { Segment } from "semantic-ui-react";
import { Headers } from "../components/Cart/Headers";
import Message from "../components/Message";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);

  const totalAmount =
    cart.length === 0
      ? null
      : cart
          .map((item) => item.price)
          .reduce((prev, next) => prev + next)
          .toLocaleString();

  return (
    <>
      <Segment padded="very">
        <Message message={"You are eligible for a discount"} />
        <Headers amount={totalAmount} cart={cart} />
        <br />
        <br />
        <CartItems cart={cart} />
      </Segment>
    </>
  );
};

export { Cart };
