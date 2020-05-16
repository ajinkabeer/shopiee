import React from "react";
import { useSelector } from "react-redux";

const ProductDescription = ({ onButtonClick }) => {
  const totalAmount = useSelector((state) => state.products.amount);
  return (
    <>
      <label>Rs. {totalAmount}</label>
      <label>Total Amount</label>

      <label>Rs. {Math.floor(Math.random() * 100) + 1}</label>
      <label>Eligible Discount</label>

      <button onClick={onButtonClick}>Checkout</button>
    </>
  );
};

export { ProductDescription };
