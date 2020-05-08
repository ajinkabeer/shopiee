import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/Product/ProductCard";
import { Card, Grid } from "semantic-ui-react";

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
        quantity={product.quantity}
      />
    );
  });

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={16}>
          <Card.Group
            mobile={16}
            tablet={8}
            computer={16}
            itemsPerRow={window.innerWidth <= 780 ? 1 : 4}
          >
            {renderProductCard}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export { ProductList };
