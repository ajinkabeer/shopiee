import React, { useEffect } from "react";
import { ProductCard } from "../components/Product/ProductCard";
import { Card } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../redux/actions/products";
import { data } from "../data/products";

function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addData(data));
  }, []);

  if (!products) {
    return "Loading..";
  }

  const renderProductCard = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        photos={product.photos}
        brand={product.brand}
        category={product.category}
        price={product.price}
      />
    );
  });

  return (
    <>
      <Card.Group itemsPerRow={5}>{renderProductCard}</Card.Group>
    </>
  );
}

export { ProductList };
