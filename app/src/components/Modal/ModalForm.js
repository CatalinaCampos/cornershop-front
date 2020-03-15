import React, { Component } from "react";
import { connect } from "react-redux";
import { addCounter } from "../../actions/counter";
import "./Modal.css";

class ModalForm extends Component {
  constructor() {
    super();
    this.state = {
      title: false
    };
  }

  newCounter = title => {
    const { dispatch } = this.props;
    dispatch(addCounter(title));
  };

  render() {
    const { onHide, show } = this.props;
    const { title } = this.state;
    if (!show) {
      return null;
    }
    return (
      <div className="box-wrapper">
        <h3>Add counter</h3>
        <div className="box-body">
          <input
            placeholder="Name"
            className="box-input"
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>
        <div className="box-footer">
          <button className="btn-cancel" onClick={onHide}>
            Cancel
          </button>
          <button
            className="button button--create"
            onClick={() => this.newCounter(title)}
          >
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(ModalForm);
