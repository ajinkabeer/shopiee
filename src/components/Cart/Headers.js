import React from "react";
import { useSelector } from "react-redux";

const Headers = ({ cart }) => {
  const totalAmount = useSelector((state) => state.products.amount);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3>My shopping bag ({cart.length} Items)</h3>
      <h3>Total ₹ {totalAmount.toLocaleString()}</h3>
    </div>
  );
};

export { Headers };
