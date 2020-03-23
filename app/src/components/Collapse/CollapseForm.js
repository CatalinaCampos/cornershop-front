import React from "react";
import "./CollapseForm.css";

const SortCollapse = ({ sort }) => {
  return (
    <div>
      <button onClick={sort.sortTitle}>SORT A-Z {sort.sortByTitle}</button>
      <button onClick={sort.sortAmount}>
        SORT 0-infinito {sort.sortByAmount}
      </button>
    </div>
  );
};

const FilterCollapse = ({ filter }) => {
  return (
    <div>
      <input onChange={e => filter.filterNumber(e.target.value)} />
      <button onClick={filter.toggleFilterNumber}>
        {filter.filterNumberSymbol}
      </button>
    </div>
  );
};

export { SortCollapse, FilterCollapse };
