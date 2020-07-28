import React from "react";
import "./SearchBox.css";

function SearchBox({ placeholder, handleChange, searchField }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      value={searchField}
      onChange={handleChange}
    />
  );
}

export default SearchBox;
