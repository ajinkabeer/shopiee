import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/actions/products";
import { Animation } from "../components/Completed/Animation";
import { Header, Button } from "semantic-ui-react";
import { motion } from "framer-motion";
import { pageTransition } from "../assets/pageTransition";

const OrderCompleted = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emptyCart(""));
  });
  return (
    <motion.div initial="out" exit="out" animate="in" variants={pageTransition}>
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
