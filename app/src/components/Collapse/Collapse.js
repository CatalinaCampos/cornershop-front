import React from "react";
import { SortCollapse, FilterCollapse } from "./CollapseForm.js";
import "../ActionBar/ActionBar.css";

function Collapse({ collapse, index, toggle, sort, filter }) {
  const renderForm = type => {
    switch (type) {
      case "sort":
        return <SortCollapse sort={sort} />;
      case "filter":
        return <FilterCollapse filter={filter} />;
      default:
        return "";
    }
  };
  return (
    <div
      className={"collapse " + (collapse.open ? "open" : "")}
      key={index}
      onClick={() => toggle(index)}
    >
      <div className="collapse-question">{collapse.type}</div>
      <div className="collapse-answer">{renderForm(collapse.type)}</div>
    </div>
  );
}

export default Collapse;
