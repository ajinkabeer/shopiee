import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/actions/products";
import { Animation } from "../components/Completed/Animation";
import { Header, Button } from "semantic-ui-react";
import { motion } from "framer-motion";

const OrderCompleted = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emptyCart(""));
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Animation />
      <Header as="h2" textAlign="center">
        Thanks for shopping with us!
        <br />
        <Button onClick={() => props.history.push("/")}>All Products</Button>
      </Header>
    </motion.div>
  );
};

export { OrderCompleted };
