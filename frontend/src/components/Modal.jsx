import React from "react";
import "../assets/Modal.css";

function Modal({ toggleModal, modalMessage }) {
  return (
    <div className="modal">
      <div aria-hidden="true" onClick={toggleModal} className="modal-overlay" />
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="modal-close-button"
            onClick={toggleModal}
          >
            &times;
          </button>
        </div>
        <div className="modal-message">
          <h3>{modalMessage}</h3>
        </div>
      </div>
    </div>
  );
}

export default Modal;
