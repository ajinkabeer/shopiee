import React, { useState, useEffect } from "react";
import { ProductCard } from "../components/Product/ProductCard";
import { Card } from "semantic-ui-react";

function ProductList() {
  return (
    <>
      <Card.Group itemsPerRow={5}>
        <ProductCard />
      </Card.Group>
    </>
  );
}

export { ProductList };
