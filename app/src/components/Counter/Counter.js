import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    const { counter, inc, id, dec, deleteCounter, name } = this.props;
    return (
      <div className="container">
        <div className="card">
          <button className="button-delete" onClick={() => deleteCounter(id)}>
            x
          </button>
          <div className="imgBx">
            <button className="button-less" onClick={() => dec(id)}>
              -
            </button>
            <h1>{counter}</h1>
            <button className="button-plus" onClick={() => inc(id)}>
              +
            </button>
          </div>
          <div className="contentBx">
            <h2>{name}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
