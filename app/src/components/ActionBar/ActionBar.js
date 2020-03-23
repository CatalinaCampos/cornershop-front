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
import Collapse from "../Collapse/Collapse.js";
import "./ActionBar.css";

const Debounce = AwesomeDebouncePromise(value => value, 500);

class ActionBar extends Component {
  constructor() {
    super();
    this.state = {
      collapseData: [
        {
          type: "sort",
          open: false
        },
        { type: "filter", open: false }
      ]
    };
  }

  toggleCollapse = index => {
    const { collapseData } = this.state;
    collapseData.map((collapse, i) => {
      if (i === index) {
        collapse.open = !collapse.open;
      } else {
        collapse.open = false;
      }
      return collapse;
    });
    console.log("force");
    this.forceUpdate();
  };

  // componentDidUpdate(prevProps) {
  //   const { dispatch, search } = this.props;
  //   if (search !== prevProps.search) {
  //     dispatch(getCountersDataFiltered({ search }));
  //   }
  // }

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
    const { sortByTitle, sortByAmount, filterNumberSymbol } = this.props;
    const { collapseData } = this.state;
    console.log("render actionbar");
    return (
      <div className="action-bar">
        <div className="collapse-box">
          {collapseData.map((collapse, i) => {
            return (
              <Collapse
                key={i}
                collapse={collapse}
                index={i}
                toggle={this.toggleCollapse}
                sort={{
                  sortTitle: this.toggleSortTitle,
                  sortByTitle: sortByTitle,
                  sortAmount: this.toggleSortAmount,
                  sortByAmount: sortByAmount
                }}
                filter={{
                  filterNumber: this.handleFilterNumber,
                  toggleFilterNumber: this.handleToggleFilterNumberSymbol,
                  filterNumberSymbol: filterNumberSymbol
                }}
              />
            );
          })}
        </div>
        <input
          className="input-search"
          placeholder="Search"
          onChange={e => this.handleSearchRequest(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    sortByTitle,
    sortByAmount,
    filterNumber,
    filterNumberSymbol
  } = state.counter;
  return {
    sortByTitle,
    sortByAmount,
    filterNumber,
    filterNumberSymbol
  };
};

export default connect(mapStateToProps)(ActionBar);
