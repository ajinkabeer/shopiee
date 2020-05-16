import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/actions/products";
import { Animation } from "../components/Completed/Animation";
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
      <h2 style={{ textAlign: "center" }}>
        Thanks for shopping with us!
        <br />
        <button onClick={() => props.history.push("/")}>All Products</button>
      </h2>
    </motion.div>
  );
};

export { OrderCompleted };
