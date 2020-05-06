import React from "react";
import { Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ProductDetailsCard = ({ photos }) => {
  return (
    <>
      <Grid divided="vertically">
        <Grid.Row columns={3}>
          <Grid.Column>
            <Image src={photos[0]} />
          </Grid.Column>
          <Grid.Column>
            <Image src={photos[1]} />
          </Grid.Column>
          <Grid.Column>
            <Image src={photos[2]} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export { ProductDetailsCard };
