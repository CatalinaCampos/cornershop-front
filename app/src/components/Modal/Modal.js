import React, { Component } from "react";
import ModalForm from "./ModalForm.js";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false
    };
  }

  toggleCollapse = state => {
    this.setState({
      modalShow: state
    });
  };

  render() {
    const { classN } = this.props;
    const { modalShow } = this.state;
    return (
      <div className={classN}>
        <div className="add-counter">
          <button
            className="open-modal"
            onClick={() => this.toggleCollapse(true)}
          >
            +
          </button>
        </div>
        <ModalForm toggle={this.toggleCollapse} modalShow={modalShow} />
      </div>
    );
  }
}

export default Modal;
