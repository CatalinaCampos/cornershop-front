import React from "react";
import { SortCollapse, FilterCollapse } from "./CollapseForm.js";
import "../ActionBar/ActionBar.css";

function Collapse({ faq, index, toggle, sort, filter }) {
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
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggle(index)}
    >
      <div className="faq-question">{faq.type}</div>
      <div className="faq-answer">{renderForm(faq.type)}</div>
    </div>
  );
}

export default Collapse;
