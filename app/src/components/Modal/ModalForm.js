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
    const { modalShow, toggle } = this.props;
    const { title } = this.state;
    return (
      <div
        className={modalShow ? "modal-container is-active" : "modal-container"}
      >
        <div className="modal-content">
          <button className="close-button" onClick={() => toggle(false)}>
            x
          </button>
          <h3>Add counter</h3>
          <div className="box-body">
            <input
              placeholder="Name"
              className="box-input"
              onChange={e => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="box-footer">
            <button
              className="button button--create"
              onClick={() => this.newCounter(title)}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ModalForm);
