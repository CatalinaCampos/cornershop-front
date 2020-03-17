import React, { Component } from "react";
import { connect } from "react-redux";
import { getCountersData, incCounter } from "../../actions/counter";
import Counter from "../Counter/Counter";
import "./CountersBar.css";

class CountersBar extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCountersData());
  }

  incrementCounter = id => {
    const { dispatch } = this.props;
    dispatch(incCounter(id));
    console.log(id);
  };

  render() {
    const { counters } = this.props;
    const mapCounter = counters.map((item, index) => {
      return (
        <Counter
          counter={item.count}
          key={item.id}
          id={item.id}
          position={index}
          inc={this.incrementCounter}
        />
      );
    });
    return <div className="counters-box">{mapCounter}</div>;
  }
}

const mapStateToProps = state => {
  const { counters } = state.counter;
  return { counters };
};

export default connect(mapStateToProps)(CountersBar);
