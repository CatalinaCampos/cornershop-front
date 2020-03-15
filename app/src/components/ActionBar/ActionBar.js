import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../Modal/Modal";
import "./ActionBar.css";

class ActionBar extends Component {
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
          <input className="input-search" placeholder="Search" />
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
  const { counters } = state.counter;
  return { counters };
};

export default connect(mapStateToProps)(ActionBar);
