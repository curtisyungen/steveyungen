import React, { Component } from "react";
import Modal from "react-responsive-modal";

class ModalType extends Component {
  render() {
    const { openModal, closeModal } = this.props;
    return (
      <Modal open={openModal} onClose={closeModal}>
        <h1>Modal</h1>
      </Modal>
    );
  }
}

export default ModalType;
