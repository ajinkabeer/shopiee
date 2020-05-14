import React, { useState } from "react";
import { Header, Input } from "semantic-ui-react";
import PinDetails from "./pinDetails";

const Delivery = () => {
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setDisabled(!disabled);
  };

  const onEnter = (event) => event.key === "Enter" && handleClick();

  return (
    <>
      <Header as="h4">Delivery Options</Header>
      <Input
        action={{ icon: "search", onClick: () => handleClick() }}
        disabled={disabled}
        focus
        placeholder="Enter your pincode"
        type="number"
        maxLength="6"
        value={input}
        onChange={(e) => inputHandler(e)}
        style={{ marginBottom: 10 }}
        onKeyPress={(e) => onEnter(e)}
      />
      {disabled && (
        <>
          <br />
          <PinDetails icon="truck" label={`Get it by Sat, August 10th`} />
          <br />
          <PinDetails
            icon="money bill alternate"
            label={`Pay on delivery available`}
          />
          <br />
          <PinDetails icon="undo" label={`Return available`} />{" "}
        </>
      )}
    </>
  );
};

export default Delivery;
