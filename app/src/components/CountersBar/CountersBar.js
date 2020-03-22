import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCountersData,
  incCounter,
  decCounter,
  deleteCounter
} from "../../actions/counter";
import Counter from "../Counter/Counter";
import Modal from "../Modal/Modal";
import "./CountersBar.css";

class CountersBar extends Component {
  componentDidMount() {
    const { dispatch, search } = this.props;
    dispatch(getCountersData({ search }));
  }

  incrementCounter = id => {
    const { dispatch } = this.props;
    dispatch(incCounter(id));
  };

  decrementCounter = id => {
    const { dispatch } = this.props;
    dispatch(decCounter(id));
  };

  deleteCounter = id => {
    const { dispatch } = this.props;
    dispatch(deleteCounter(id));
  };

  render() {
    const { countersFiltered } = this.props;
    const mapCounter = countersFiltered.map((item, index) => {
      return (
        <Counter
          counter={item.count}
          key={item.id}
          id={item.id}
          name={item.title}
          position={index}
          inc={this.incrementCounter}
          dec={this.decrementCounter}
          deleteCounter={this.deleteCounter}
        />
      );
    });
    return (
      <div className="counters-box">
        <Modal classN="counter" />
        {mapCounter}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { countersFiltered, search } = state.counter;
  return { countersFiltered, search };
};

export default connect(mapStateToProps)(CountersBar);
