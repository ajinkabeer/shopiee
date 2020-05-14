import React from "react";
import { Select } from "semantic-ui-react";

const sizes = [
  { key: "s", value: "Small", text: "Small" },
  { key: "m", value: "Medium", text: "Medium" },
  { key: "l", value: "Large", text: "Large" },
  { key: "xl", value: "Extra Large", text: "Extra Large" },
];

const Sizes = ({ ...props }) => {
  const {
    selected: [setSelected],
  } = {
    ...props.selected,
  };

  const handleChange = (e, { value }) => {
    setSelected(value);
  };

  return (
    <Select
      placeholder="Select your size"
      options={sizes}
      onChange={handleChange}
    />
  );
};
export default Sizes;
