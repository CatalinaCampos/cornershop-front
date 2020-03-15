import React, { Component } from "react";
import Modal from "../Modal/Modal";
import "./ActionBar.css";

class ActionBar extends Component {
  render() {
    return (
      <div>
        <div className="bar--title">
          <p className="title">03.</p>
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

export default ActionBar;
