import React from "react";
import { useSelector } from "react-redux";
import { ProductDetailsCard } from "../components/Product/ProductDetailsCard";
import { ProductDetail } from "../components/Details/ProductDetail";
import { Card, Grid } from "semantic-ui-react";
import { motion } from "framer-motion";
import { pageTransition } from "../assets/pageTransition";

const ProductDetails = ({ match, ...props }) => {
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
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Card.Group itemsPerRow={5}>{renderProductDetailsCard}</Card.Group>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <ProductDetail
              key={product.id}
              photos={product.photos}
              id={product.id}
              brand={product.brand}
              price={product.price}
              category={product.category}
              size={product.size}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </motion.div>
  );
};

export { ProductDetails };
