import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../Modal/Modal";
import {
  setSearchText,
  getCountersDataFiltered,
  toggleSortByTitle,
  toggleSortByAmount,
  toggleFilterNumberSymbol,
  filterNumber
} from "../../actions/counter";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import "./ActionBar.css";

const Debounce = AwesomeDebouncePromise(value => value, 500);

class ActionBar extends Component {
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
    // const num = await Debounce(number);
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
      <div>
        <div className="bar--title">
          <p className="title">{counters.length}.</p>
          <p className="title">wiiiii</p>
        </div>
        <div className="actions">
          <Modal />
          <input
            className="input-search"
            placeholder="Search"
            onChange={e => this.handleSearchRequest(e.target.value)}
          />
        </div>
        <div>
          sort
          {/* <button>Sort</button> */}
          <button onClick={() => this.toggleSortTitle()}>
            A-Z {sortByTitle}
          </button>
          <button onClick={() => this.toggleSortAmount()}>
            0-infinito {sortByAmount}
          </button>
          {/* <button>Filter</button> */}
          Filter
          <input
            placeholder="filter"
            type="number"
            onChange={e => this.handleFilterNumber(e.target.value)}
          />
          <button onClick={() => this.handleToggleFilterNumberSymbol()}>
            {filterNumberSymbol}
          </button>
        </div>
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
