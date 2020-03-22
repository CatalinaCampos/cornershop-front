import React, { Component } from "react";
import ModalForm from "./ModalForm.js";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false
    };
  }

  setModalShow = state => {
    this.setState({
      modalShow: state
    });
  };

  handleShow = () => {
    this.setState({
      modalShow: true
    });
  };

  render() {
    const { modalShow } = this.state;
    const { classN } = this.props;
    return (
      <div className={classN}>
        <div className="add-counter">
          <button
            className="button button--add"
            onClick={() => this.handleShow(true)}
          >
            +
          </button>
        </div>
        <ModalForm show={modalShow} onHide={() => this.setModalShow(false)} />
      </div>
    );
  }
}

export default Modal;
