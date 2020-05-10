import React from "react";
import { useSelector } from "react-redux";
import { CartItems } from "../components/Cart/CartItems";
import { Headers } from "../components/Cart/Headers";
import { ProductDescription } from "../components/Cart/ProductDescription";
import Message from "../components/Message";
import { Button, Grid } from "semantic-ui-react";
import { motion } from "framer-motion";

const Cart = (props) => {
  const cart = useSelector((state) => state.products.cart);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Headers quantity={quantity} cart={cart} />
            <br />
            <br />
            <CartItems cart={cart} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Message message={"You are eligible for a discount"} />
            <ProductDescription
              onButtonClick={() => onButtonClick()}
              quantity={quantity}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </motion.div>
  );
};

export { Cart };
