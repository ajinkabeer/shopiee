import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
    };
    dispatch(addToCart(product));
    toast(`Added ${brand} to cart`);
  };

  return (
    <Card>
      <Image src={photos[0]} size="small" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{brand}</Card.Header>
        <Card.Meta>
          <span className="date">{category}</span>
        </Card.Meta>
        <Card.Description>Rs. {price.toLocaleString()}</Card.Description>
      </Card.Content>
      <Card.Content>
        <div className="ui two buttons">
          <Link
            to={{
              pathname: `/details/${id}`,
              id,
            }}
          >
            <Button basic>View</Button>
          </Link>

          <Button basic onClick={() => addItemsToCart()}>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export { ProductCard };
