import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../components/Product/ProductCard";
import { motion } from "framer-motion";
import { pageTransition } from "../assets/pageTransition";
import { filterProducts } from "../redux/actions/products";

import "./css/product-list.css";

import Filter from "../components/Filter";

const ProductList = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  useEffect(() => {
    dispatch(filterProducts(filter));
  }, [filter, dispatch]);

  if (!filteredProducts) {
    return "Loading..";
  }

  const renderProductCard = filteredProducts.map((product) => {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        photos={product.photos}
        brand={product.brand}
        category={product.category}
        price={product.price}
        quantity={product.quantity}
      />
    );
  });

  return (
    <motion.div initial="out" exit="out" animate="in" variants={pageTransition}>
      <Filter filter={{ filter: [setFilter] }} />
      <br />
      <div className="grid-container">{renderProductCard}</div>
    </motion.div>
  );
};

export default ProductList;
