import React from "react";
import { useSelector } from "react-redux";

const ProductDescription = ({ onButtonClick }) => {
  const totalAmount = useSelector((state) => state.products.amount);
  return (
    <div className="product-description-container">
      <h3>Price Details</h3>
      <div className="total-label-container">
        <label>Total Amount</label>
        <label>Rs. {totalAmount}</label>
      </div>

      <div className="total-label-container">
        <label>Eligible Discount</label>
        <label>Rs. {Math.floor(Math.random() * 100) + 1}</label>
      </div>
      <button onClick={onButtonClick}>Checkout</button>
    </div>
  );
};

export default React.memo(ProductDescription);
