import React from "react";
import { useSelector } from "react-redux";
import ProductDetailsCard from "../components/Product/ProductDetailsCard";
import ProductDetail from "../components/Details/ProductDetail";
import { motion } from "framer-motion";
import { pageTransition } from "../assets/pageTransition";

import "./css/product-list.css";

const ProductDetails = ({ match }) => {
  const slug = Number(match.params.slug);

  const products = useSelector((state) =>
    state.products.products.filter((product) => product.id === slug)
  );

  if (!products) {
    return "Loading..";
  }

  const renderProductDetailsCard = products.map((product) => {
    return (
      <ProductDetailsCard
        key={product.id}
        id={product.id}
        photos={product.photos}
      />
    );
  });

  const product = products[0];

  return (
    <motion.div initial="out" exit="out" animate="in" variants={pageTransition}>
      <div className="grid-container">
        {renderProductDetailsCard}
        <ProductDetail
          key={product.id}
          photos={product.photos}
          id={product.id}
          brand={product.brand}
          price={product.price}
          category={product.category}
          size={product.size}
        />
      </div>
    </motion.div>
  );
};

export default ProductDetails;
