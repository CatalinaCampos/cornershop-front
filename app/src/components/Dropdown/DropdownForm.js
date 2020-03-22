import React from "react";

const SortDropdown = ({ onHide }) => {
  return (
    <div>
      <button onClick={onHide}>x</button>sort
    </div>
  );
};

const FilterDropdown = ({ onHide }) => {
  return (
    <div>
      <button onClick={onHide}>x</button> filter
    </div>
  );
};

export { SortDropdown, FilterDropdown };
