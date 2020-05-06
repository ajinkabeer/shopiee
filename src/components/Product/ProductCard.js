import React from "react";
import { Card, Image } from "semantic-ui-react";

const ProductCard = ({ photos, brand, category, price }) => {
  return (
    <Card>
      <Image src={photos[0]} size="small" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{brand}</Card.Header>
        <Card.Meta>
          <span className="date">{category}</span>
        </Card.Meta>
        <Card.Description>Rs. {price}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export { ProductCard };
