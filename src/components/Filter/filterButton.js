import React from "react";
import "./css/main.css";

const filterButton = ({ ...props }) => {
  const {
    filter: [setFilter],
  } = { ...props.filter };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <label for="filter-select">Filter by</label>
      <select
        id="filter-select"
        className="filter"
        onChange={handleChange}
        style={{ marginBottom: 15 }}
      >
        <option value="none">None</option>
        <option value="price-lh">Price: Low to High</option>
        <option value="price-hl">Price: High to Low</option>
      </select>
    </>
  );
};

export default filterButton;
