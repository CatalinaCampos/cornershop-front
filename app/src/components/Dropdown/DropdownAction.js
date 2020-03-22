import React from "react";
import { SortDropdown, FilterDropdown } from "./DropdownForm.js";

const DropdownAction = ({ show, type, onHide }) => {
  const renderForm = type => {
    switch (type) {
      case "sort":
        return <SortDropdown />;
      case "filter":
        return <FilterDropdown />;
      default:
        return "error";
    }
  };
  return (
    <div show={show} onHide={onHide}>
      {renderForm(type)}
    </div>
  );
};

export default DropdownAction;
