import React from "react";
import "./css/card.css";

const ProductDetailsCard = ({ photos }) => {
  return (
    <div className="image-container">
      <img src={photos[0]} alt="product-1" />
      <img src={photos[1]} alt="product-2" />
      <img src={photos[2]} alt="product-3" />
      <img src={photos[3]} alt="product-4" />
    </div>
  );
};

export default React.memo(ProductDetailsCard);
