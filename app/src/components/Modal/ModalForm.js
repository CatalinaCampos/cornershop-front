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
          <div className="header">
            <h3>ADD COUNTER</h3>
          </div>
          <div className="box-body">
            <input
              placeholder="Name"
              className="box-input"
              onChange={e => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="modal-footer">
            <button className="close-button" onClick={() => toggle(false)}>
              Cancel
            </button>
            <button
              className="create-button"
              onClick={() => {
                this.newCounter(title);
                toggle(false);
              }}
              disabled={!title}
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
