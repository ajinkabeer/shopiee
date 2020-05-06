import React from "react";
import { Message } from "semantic-ui-react";

const message = ({ message }) => (
  <Message positive>
    <Message.Header>{message}</Message.Header>
  </Message>
);

export default message;
