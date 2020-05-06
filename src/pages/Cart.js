import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.products);
  console.log("NEW", cart);
  return <pre>Hey</pre>;
};

export { Cart };
