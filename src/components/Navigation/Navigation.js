import React from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./Navigation.css";

const Navigation = () => {
  // const cartItems = useSelector((state) => state.products.cart);

  return (
    <header className="main-navigation">
      <div className="main-navigation-logo">
        <h3>SHOPIEE</h3>
      </div>
      <nav className="main-navigation-item">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cart"> Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navigation };
