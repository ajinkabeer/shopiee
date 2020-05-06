import React from "react";
import { ProductCard } from "../components/Product/ProductCard";
import { Card } from "semantic-ui-react";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);

  if (!products) {
    return "Loading..";
  }

  const renderProductCard = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        id={product.id}
        photos={product.photos}
        brand={product.brand}
        category={product.category}
        price={product.price}
      />
    );
  });

  return (
    <>
      <Card.Group itemsPerRow={window.innerWidth <= 780 ? 1 : 5}>
        {renderProductCard}
      </Card.Group>
    </>
  );
};

export { ProductList };
