import React, { Component } from "react";
import { connect } from "react-redux";
import { getCountersData } from "../../actions/counter";
import "./CountersBar.css";

class CountersBar extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCountersData());
  }
  render() {
    const { counters } = this.props;
    console.log(counters);
    return <div>we</div>;
  }
}

const mapStateToProps = state => {
  const { counters } = state.counter;
  return { counters };
};

export default connect(mapStateToProps)(CountersBar);
