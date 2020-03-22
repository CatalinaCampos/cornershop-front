import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    const { counter, position, inc, id, dec, deleteCounter, name } = this.props;
    return (
      <div className="counter">
        <div className="counter-header">
          <button
            className="button-action button--delete"
            onClick={() => deleteCounter(id)}
          >
            X
          </button>
          <p className="counter-title">{name}</p>
        </div>
        <div className="count">
          <button className="button-action action" onClick={() => dec(id)}>
            -
          </button>
          <p className="number-counter">{counter}</p>
          <button className="button-action action" onClick={() => inc(id)}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
