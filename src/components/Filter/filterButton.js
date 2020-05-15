import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    key: "none",
    text: "None",
    value: "none",
  },
  {
    key: "price",
    text: "Price: Low to High",
    value: "price",
  },
];

const filterButton = ({ ...props }) => {
  const {
    filter: [setFilter],
  } = { ...props.filter };

  const handleChange = (e, { value }) => {
    setFilter(value);
  };

  return (
    <span>
      Filter by{" "}
      <Dropdown
        inline
        options={options}
        onChange={handleChange}
        defaultValue={options[0].value}
        style={{ marginBottom: 15 }}
      />
    </span>
  );
};

export default filterButton;
