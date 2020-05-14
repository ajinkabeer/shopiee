import React from "react";
import { Image, Grid } from "semantic-ui-react";

const ProductDetailsCard = ({ photos }) => {
  return (
    <>
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src={photos[0]} alt="product-photo-1" />
          </Grid.Column>
          <Grid.Column>
            <Image src={photos[1]} alt="product-photo-2" />
          </Grid.Column>
          <Grid.Column>
            <Image src={photos[2]} alt="product-photo-3" />
          </Grid.Column>
          <Grid.Column>
            <Image src={photos[3]} alt="product-photo-4" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export { ProductDetailsCard };
