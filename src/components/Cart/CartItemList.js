import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  reduceOrderQuantity,
} from "../../redux/actions/products";

import "./css/main.css";

const CartItemList = ({ id, brand, photos, quantity, size, price }) => {
  const dispatch = useDispatch();

  const reduceQuantity = () => {
    const product = {
      id,
      quantity,
    };
    dispatch(reduceOrderQuantity(product));
  };

  const removeItem = () => {
    dispatch(removeFromCart({ id, price }));
  };

  return (
    <div className="product-container">
      <img src={photos[0]} size="tiny" alt={brand} />

      <div>
        <label>
          <strong>{brand}</strong>
        </label>
        <label>
          <strong>Quantity: </strong>
          {quantity} units
        </label>
        <label>
          <strong>Size: </strong>
          {size}
        </label>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => (quantity === 0 ? removeItem() : reduceQuantity())}
        >
          Reduce
        </button>
        <button onClick={() => removeItem()}>Remove</button>
      </div>
    </div>
  );
};

export default React.memo(CartItemList);
