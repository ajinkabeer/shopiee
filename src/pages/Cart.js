import React from "react";
import { useSelector } from "react-redux";
import { CartItems } from "../components/Cart/CartItems";
import { Headers } from "../components/Cart/Headers";
import { ProductDescription } from "../components/Cart/ProductDescription";
import { motion } from "framer-motion";
import { pageTransition } from "../assets/pageTransition";
import "./css/product-list.css";

const Cart = (props) => {
  const cart = useSelector((state) => state.products.cart);
  const quantity = cart.map((product) => product.quantity);

  if (cart.length === 0) {
    return (
      <>
        <p>There's nothing in your cart</p>
        <button onClick={() => props.history.push("/")}>All products</button>
      </>
    );
  }
  const onButtonClick = () => {
    props.history.push("/completed");
  };

  return (
    <motion.div initial="out" exit="out" animate="in" variants={pageTransition}>
      <div className="grid-container">
        <div>
          <Headers quantity={quantity} cart={cart} />
          <CartItems cart={cart} />
        </div>
        <div>
          <ProductDescription
            onButtonClick={() => onButtonClick()}
            quantity={quantity}
          />
        </div>
      </div>
    </motion.div>
  );
};

export { Cart };
