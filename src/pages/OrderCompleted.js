import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/actions/products";
import { motion } from "framer-motion";
import { pageTransition } from "../assets/pageTransition";
import checkLogo from "../assets/electronics.svg";

const OrderCompleted = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emptyCart(""));
  });
  return (
    <motion.div initial="out" exit="out" animate="in" variants={pageTransition}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={checkLogo} alt="success" style={{ width: "10%" }} />
        <h2>Thanks for shopping with us!</h2>
        <button onClick={() => props.history.push("/")}>All Products</button>
      </div>
    </motion.div>
  );
};

export { OrderCompleted };
