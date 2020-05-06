import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => (
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
        </li>
      </ul>
    </nav>
  </header>
);

export { Navigation };
