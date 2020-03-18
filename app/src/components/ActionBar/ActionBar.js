import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../Modal/Modal";
import { setSearchText, getCountersDataFiltered } from "../../actions/counter";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import "./ActionBar.css";

const Debounce = AwesomeDebouncePromise(value => value, 500);

class ActionBar extends Component {
  componentDidUpdate(prevProps) {
    const { dispatch, search } = this.props;
    console.log(search);
    if (search !== prevProps.search) {
      dispatch(getCountersDataFiltered({ search }));
    }
  }

  handleSearchRequest = async name => {
    const { dispatch } = this.props;
    const text = await Debounce(name);
    dispatch(setSearchText(text));
  };

  render() {
    const { counters } = this.props;
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
          <button>Sort</button>
          <button>Filter</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { counters, search } = state.counter;
  return { counters, search };
};

export default connect(mapStateToProps)(ActionBar);
