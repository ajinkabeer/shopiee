import React from "react";
import { Select } from "semantic-ui-react";

const sizes = [
  { key: "s", value: "s", text: "Small" },
  { key: "m", value: "m", text: "Medium" },
  { key: "l", value: "l", text: "Large" },
  { key: "xl", value: "xl", text: "Extra Large" },
];

const Sizes = ({ ...props }) => {
  const {
    selected: [selected, setSelected],
  } = {
    ...props.selected,
  };

  return (
    <Select
      placeholder="Select your size"
      options={sizes}
      onClick={() => setSelected(true)}
    />
  );
};
export default Sizes;
