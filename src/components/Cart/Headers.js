import React from "react";
import { Header } from "semantic-ui-react";
import { useSelector } from "react-redux";

const Headers = ({ cart }) => {
  const totalAmount = useSelector((state) => state.products.amount);
  return (
    <>
      {" "}
      <Header as="h2" floated="right">
        Total ₹ {totalAmount.toLocaleString()}
      </Header>
      <Header as="h2" floated="left">
        My shopping bag ({cart.length} Items)
      </Header>
    </>
  );
};

export { Headers };
