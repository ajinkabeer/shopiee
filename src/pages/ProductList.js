import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../components/Product/ProductCard";
import { Card, Grid } from "semantic-ui-react";
import { motion } from "framer-motion";
import { pageTransition } from "../assets/pageTransition";
import { filterProducts } from "../redux/actions/products";

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
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={16}>
            <Filter filter={{ filter: [setFilter] }} />
            <Card.Group
              mobile={16}
              tablet={8}
              computer={16}
              itemsPerRow={window.innerWidth <= 780 ? 1 : 5}
            >
              {renderProductCard}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </motion.div>
  );
};

export { ProductList };
