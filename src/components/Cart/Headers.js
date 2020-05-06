import React from "react";
import { Header } from "semantic-ui-react";

const Headers = ({ amount, cart }) => (
  <>
    {" "}
    <Header as="h2" floated="right">
      Total ₹ {amount}
    </Header>
    <Header as="h2" floated="left">
      My shopping bag ({cart.length} Items)
    </Header>
  </>
);

export { Headers };
