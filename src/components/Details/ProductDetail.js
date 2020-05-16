import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/products";
import { toast } from "react-toastify";
import Select from "./Sizes";
import Facts from "./Facts";

import "./css/main.css";

const ProductDetail = ({ id, photos, brand, price, category, size }) => {
  let [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const addItemsToCart = () => {
    if (!selected) {
      toast.warning("Please select a size");
    } else {
      const product = {
        id,
        photos,
        brand,
        category,
        price,
        quantity,
        size: selected,
      };
      dispatch(addToCart(product));
      toast(`Added ${brand} to cart`);
    }
  };

  return (
    <div>
      <h2>{brand}</h2>
      <p className="category-heading">{`Men Black Solid ${category}`} </p>
      <h2>Rs. {price} </h2>
      <pre>inclusive of all taxes</pre>
      <label>Select size</label>
      <Select selected={{ selected: [setSelected] }} />
      <label>Quantity {quantity}</label>

      <button
        className="quantity-counter-button"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
      <button
        className="quantity-counter-button"
        onClick={() => (quantity >= 2 ? setQuantity(quantity - 1) : null)}
      >
        -
      </button>
      <button className="add-to-cart-button" onClick={() => addItemsToCart()}>
        Add to cart
      </button>
      <Facts />
    </div>
  );
};

export { ProductDetail };
