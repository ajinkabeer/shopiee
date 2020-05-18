import React from "react";
import "./css/main.css";

const Sizes = ({ ...props }) => {
  const {
    selected: [setSelected],
  } = {
    ...props.selected,
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <select className="select-size" onChange={handleChange}>
      <option value="select">Select your size</option>
      <option value="s">Small</option>
      <option value="m">Medium</option>
      <option value="l">Large</option>
      <option value="xl">Extra Large</option>
    </select>
  );
};
export default React.memo(Sizes);
