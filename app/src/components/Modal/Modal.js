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
    return (
      <div>
        <div>
          <button
            className="button button--add"
            onClick={() => this.handleShow(true)}
          >
            ADD COUNTER
          </button>
        </div>
        <ModalForm show={modalShow} onHide={() => this.setModalShow(false)} />
      </div>
    );
  }
}

export default Modal;
