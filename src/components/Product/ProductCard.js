import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/products";
import { toast } from "react-toastify";

const ProductCard = ({ id, photos, brand, category, price }) => {
  const dispatch = useDispatch();

  const addItemsToCart = () => {
    const product = {
      id,
      photos,
      brand,
      category,
      price,
      quantity: 1,
    };
    dispatch(addToCart(product));
    toast(`Added ${brand} to cart`);
  };

  return (
    <Card raised>
      <Image src={photos[0]} size="small" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{brand}</Card.Header>
        <Card.Meta>
          <span className="date">{category}</span>
        </Card.Meta>
        <Card.Description>Rs. {price.toLocaleString()}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Button.Group widths="2">
          <Button>
            <Link
              to={{
                pathname: `/details/${id}`,
                id,
              }}
            >
              View
            </Link>
          </Button>

          <Button.Or />
          <Button onClick={() => addItemsToCart()}>Add</Button>
        </Button.Group>{" "}
      </Card.Content>
    </Card>
  );
};

export { ProductCard };
