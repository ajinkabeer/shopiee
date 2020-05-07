import React from "react";
import { ProductCard } from "../components/Product/ProductCard";
import { Card, Grid } from "semantic-ui-react";
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
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={16}>
          <Card.Group mobile={16} tablet={8} computer={16} itemsPerRow={4}>
            {renderProductCard}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export { ProductList };
