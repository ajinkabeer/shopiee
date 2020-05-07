import React from "react";
import { Header } from "semantic-ui-react";

const Headers = ({ amount, cart, quantity }) => {
  const totalQuantity = quantity.reduce((a, b) => a + b, 0);

  return (
    <>
      {" "}
      <Header as="h2" floated="right">
        Total ₹ {(amount * totalQuantity).toLocaleString()}
      </Header>
      <Header as="h2" floated="left">
        My shopping bag ({cart.length} Items)
      </Header>
    </>
  );
};

export { Headers };
