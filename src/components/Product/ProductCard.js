import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/products";
import "./css/card.css";

const ProductCard = ({ id, photos, brand, category, price, quantity }) => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const addItemsToCart = () => {
    const product = {
      id,
      photos,
      brand,
      category,
      price,
      quantity,
      size: "small",
    };
    dispatch(addToCart(product));
  };

  return (
    <div className="card">
      {redirect && (
        <Redirect
          to={{
            pathname: `/details/${id}`,
            id,
          }}
        />
      )}
      <img
        key={id}
        src={photos[0]}
        alt={brand}
        onClick={() => setRedirect(true)}
      />
      <div className="card-container">
        <h4>{brand}</h4>
        <p>{category}</p>
        <p>
          <strong>Rs. {price.toLocaleString()}</strong>
        </p>
      </div>
      <div className="button-container">
        <button className="add-to-cart" onClick={() => addItemsToCart()}>
          <strong>Add to cart</strong>
        </button>
        <p>Available in all sizes</p>
      </div>
    </div>
  );
};

export { ProductCard };
