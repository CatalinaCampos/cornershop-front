import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    return (
      <div className="rhombus">
        <div className="rhombus-inside">
          <div className="counter">
            <button className="button button--decrement">-</button>
            <p className="number">5</p>
            <button className="button button--increment">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
