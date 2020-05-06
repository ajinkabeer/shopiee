import React from "react";
import { Card } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { ProductDetailsCard } from "../components/Product/ProductDetailsCard";

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

  return <Card.Group itemsPerRow={5}>{renderProductDetailsCard}</Card.Group>;
};

export { ProductDetails };
