import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import data from "../../data/products.json";

const ProductCard = () => {
  return data.map((product) => (
    <Card
      raised
      href={() => {
        "";
      }}
    >
      <Image src={product.photos[0]} size="small" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{product.brand}</Card.Header>
        <Card.Meta>
          <span className="date">{product.category}</span>
        </Card.Meta>
        <Card.Description>Rs. {product.price}</Card.Description>
      </Card.Content>
    </Card>
  ));
};

export { ProductCard };
