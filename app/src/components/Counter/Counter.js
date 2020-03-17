import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    const { counter, position, inc, id } = this.props;
    // console.log(position);
    return (
      <div
        className={
          position % 2 === 0 ? "rhombus rhombus--odd" : "rhombus rhombus--even"
        }
      >
        <div className="rhombus-inside">
          <div className="counter">
            <button className="button-action button--decrement">-</button>
            <p className="number">{counter}</p>
            <button
              className="button-action button--increment"
              onClick={() => inc(id)}
            >
              +
            </button>
          </div>
        </div>
        {/* <div className="connect"></div> */}
      </div>
    );
  }
}

export default Counter;
