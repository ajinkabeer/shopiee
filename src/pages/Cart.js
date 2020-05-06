import React from "react";
import { useSelector } from "react-redux";
import { CartItems } from "../components/Cart/CartItems";
import { Button } from "semantic-ui-react";
import { Headers } from "../components/Cart/Headers";
import Message from "../components/Message";

const Cart = (props) => {
  const cart = useSelector((state) => state.products.cart);

  const totalAmount =
    cart.length === 0
      ? null
      : cart
          .map((item) => item.price)
          .reduce((prev, next) => prev + next)
          .toLocaleString();

  if (cart.length === 0) {
    return (
      <>
        <Message message={"There's nothing in your cart."} />
        <Button onClick={() => props.history.push("/")}>All products</Button>
      </>
    );
  }

  return (
    <>
      <>
        <Message message={"You are eligible for a discount"} />
        <Headers amount={totalAmount} cart={cart} />
        <br />
        <br />
        <CartItems cart={cart} />
      </>
    </>
  );
};

export { Cart };
