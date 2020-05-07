import React from "react";
import { useSelector } from "react-redux";
import { CartItems } from "../components/Cart/CartItems";
import { Button, Grid } from "semantic-ui-react";
import { Headers } from "../components/Cart/Headers";
import Message from "../components/Message";
import { ProductDescription } from "../components/Cart/ProductDescription";

const Cart = (props) => {
  const cart = useSelector((state) => state.products.cart);

  let totalAmount =
    cart.length === 0
      ? null
      : cart
          .map((product) => product.price)
          .reduce((prev, next) => prev + next);

  const quantity = cart.map((product) => product.quantity);

  if (cart.length === 0) {
    return (
      <>
        <Message message={"There's nothing in your cart."} />
        <Button onClick={() => props.history.push("/")}>All products</Button>
      </>
    );
  }

  const onButtonClick = () => {
    props.history.push("/completed");
  };

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <Headers amount={totalAmount} quantity={quantity} cart={cart} />
          <br />
          <br />
          <CartItems cart={cart} />
        </Grid.Column>
        <Grid.Column>
          <Message message={"You are eligible for a discount"} />
          <ProductDescription
            totalAmount={totalAmount}
            onButtonClick={() => onButtonClick()}
            quantity={quantity}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export { Cart };
