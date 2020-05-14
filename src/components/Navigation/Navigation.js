import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Label } from "semantic-ui-react";
import "./Navigation.css";

const Navigation = () => {
  const cartItems = useSelector((state) => state.products.cart);

  return (
    <header className="main-navigation">
      <div className="main-navigation-logo">
        <h3>SHOPIEE</h3>
      </div>
      <nav className="main-navigation-item">
        <ul>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>

          <li>
            <NavLink to="/cart">Cart</NavLink>
            <Label>{cartItems.length}</Label>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navigation };
