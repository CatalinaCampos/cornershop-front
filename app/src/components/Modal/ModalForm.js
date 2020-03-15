import React, { Component } from "react";
import "./Modal.css";

class ModalForm extends Component {
  render() {
    const { onHide, show } = this.props;
    if (!show) {
      return null;
    }
    return (
      <div className="box-wrapper">
        <h3>Add counter</h3>
        <div className="box-body">
          <input placeholder="Name" className="box-input" />
        </div>
        <div className="box-footer">
          <button className="btn-cancel" onClick={onHide}>
            Cancel
          </button>
          <button className="button button--create">Create</button>
        </div>
      </div>
    );
  }
}

export default ModalForm;
