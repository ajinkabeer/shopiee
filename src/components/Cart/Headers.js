import React from "react";
import { useSelector } from "react-redux";

const Headers = ({ cart }) => {
  const totalAmount = useSelector((state) => state.products.amount);
  return (
    <>
      <h1>Total ₹ {totalAmount.toLocaleString()}</h1>
      <h1>My shopping bag ({cart.length} Items)</h1>
    </>
  );
};

export { Headers };
