import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, photos, brand, category, price }) => {
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
      <Card.Content>
        <div className="ui two buttons">
          <Link
            to={{
              pathname: `/details/${id}`,
              id,
            }}
          >
            <Button basic color="green">
              View details
            </Button>
          </Link>

          <Button basic color="red">
            Add to cart
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export { ProductCard };
