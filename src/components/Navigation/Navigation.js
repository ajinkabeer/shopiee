import React from "react";
import { NavLink } from "react-router-dom";
import { Label } from "semantic-ui-react";
import { useSelector } from "react-redux";
import "./Navigation.css";

const Navigation = () => {
  const cart = useSelector((state) => state.products.cart);

  return (
    <header className="main-navigation">
      <div className="main-navigation-logo">
        <h1>Shopiee</h1>
      </div>
      <nav className="main-navigation-item">
        <ul>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>

          <li>
            <NavLink to="/cart">Cart</NavLink>
            <Label color="grey" size="mini">
              {cart.length}
            </Label>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navigation };
