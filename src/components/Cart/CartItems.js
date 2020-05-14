import React from "react";
import { CartItemList } from "./CartItemList";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cart = useSelector((state) => state.products.cart);

  if (!cart) {
    return "Loading..";
  }

  const renderCartItems = cart.map((product) => {
    return (
      <CartItemList
        key={product.id}
        id={product.id}
        photos={product.photos}
        brand={product.brand}
        category={product.category}
        price={product.price}
        quantity={product.quantity}
        size={product.size}
      />
    );
  });

  return <> {renderCartItems} </>;
};

export { CartItems };
