import React, { useEffect } from "react";
import { emptyCart } from "../redux/actions/products";
import { Header, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { Animation } from "../components/Completed/Animation";

const OrderCompleted = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emptyCart(""));
  });
  return (
    <>
      <Animation />
      <Header as="h2" textAlign="center">
        Thanks for shopping with us!
        <br />
        <Button onClick={() => props.history.push("/")}>All Products</Button>
      </Header>
    </>
  );
};

export { OrderCompleted };
