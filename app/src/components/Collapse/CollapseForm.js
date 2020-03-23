import React from "react";
import "./CollapseForm.css";

const SortCollapse = ({ sort }) => {
  return (
    <div>
      <button onClick={sort.sortTitle} className="button-sort">
        By letter [{sort.sortByTitle}]
      </button>
      <button onClick={sort.sortAmount} className="button-sort">
        By number [{sort.sortByAmount}]
      </button>
    </div>
  );
};

const FilterCollapse = ({ filter }) => {
  return (
    <div>
      <input
        onChange={e => filter.filterNumber(e.target.value)}
        type="number"
        className="input-filter"
      />
      <button onClick={filter.toggleFilterNumber} className="button-symbol">
        {filter.filterNumberSymbol}
      </button>
    </div>
  );
};

export { SortCollapse, FilterCollapse };
