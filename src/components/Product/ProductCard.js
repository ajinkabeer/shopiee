import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/products";
import { toast } from "react-toastify";

const ProductCard = ({ id, photos, brand, category, price, quantity }) => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const addItemsToCart = () => {
    const product = {
      id,
      photos,
      brand,
      category,
      price,
      quantity,
    };
    dispatch(addToCart(product));
    toast(`Added ${brand} to cart`);
  };

  return (
    <Card raised onClick={() => setRedirect(true)}>
      {redirect && (
        <Redirect
          to={{
            pathname: `/details/${id}`,
            id,
          }}
        />
      )}
      <Image src={photos[0]} size="small" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{brand}</Card.Header>
        <Card.Meta>
          <span className="date">{category}</span>
        </Card.Meta>
        <Card.Description>Rs. {price.toLocaleString()}</Card.Description>
      </Card.Content>

      <Button onClick={() => addItemsToCart()}>Add</Button>
    </Card>
  );
};

export { ProductCard };
