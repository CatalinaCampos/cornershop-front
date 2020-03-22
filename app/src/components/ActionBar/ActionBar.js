import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setSearchText,
  getCountersDataFiltered,
  toggleSortByTitle,
  toggleSortByAmount,
  toggleFilterNumberSymbol,
  filterNumber
} from "../../actions/counter";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import DropdownAction from "../Dropdown/DropdownAction.js";
import "./ActionBar.css";

const Debounce = AwesomeDebouncePromise(value => value, 500);

class ActionBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    const { dispatch, search } = this.props;
    if (search !== prevProps.search) {
      dispatch(getCountersDataFiltered({ search }));
    }
  }

  handleSearchRequest = async name => {
    const { dispatch } = this.props;
    const text = await Debounce(name);
    dispatch(setSearchText(text));
  };

  toggleSortTitle = () => {
    const { dispatch } = this.props;
    dispatch(toggleSortByTitle());
  };

  toggleSortAmount = () => {
    const { dispatch } = this.props;
    dispatch(toggleSortByAmount());
  };

  handleFilterNumber = async number => {
    const { dispatch } = this.props;
    dispatch(filterNumber(number));
  };

  handleToggleFilterNumberSymbol = () => {
    const { dispatch } = this.props;
    dispatch(toggleFilterNumberSymbol());
  };

  render() {
    const {
      counters,
      sortByTitle,
      sortByAmount,
      filterNumberSymbol
    } = this.props;
    return (
      <div className="action-bar">
        <button className="button button--action">SORT</button>
        <button className="button button--action">FILTER</button>
        <input
          className="input-search"
          placeholder="Search"
          onChange={e => this.handleSearchRequest(e.target.value)}
        />
        {/* <button onClick={() => this.toggleSortTitle()}>
            A-Z {sortByTitle}
          </button> */}
        {/* <button onClick={() => this.toggleSortAmount()}>
            0-infinito {sortByAmount}
          </button> */}
        {/* <input
            placeholder="filter"
            type="number"
            onChange={e => this.handleFilterNumber(e.target.value)}
          /> */}
        {/* <button onClick={() => this.handleToggleFilterNumberSymbol()}>
            {filterNumberSymbol}
          </button> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    counters,
    search,
    sortByTitle,
    sortByAmount,
    filterNumber,
    filterNumberSymbol
  } = state.counter;
  return {
    counters,
    search,
    sortByTitle,
    sortByAmount,
    filterNumber,
    filterNumberSymbol
  };
};

export default connect(mapStateToProps)(ActionBar);
