import React from "react";
import "../assets/UpdateAccountModal.css";

function UserDeleteModal({ toggleModal }) {
  return (
    <div className="update-modal">
      <div
        aria-hidden="true"
        onClick={toggleModal}
        className="update-modal-overlay"
      />
      <div className="update-modal-content">
        <div className="update-modal-header">
          <button
            type="button"
            className="update-modal-close-button"
            onClick={toggleModal}
          >
            &times;
          </button>
        </div>
        <div className="update-modal-message">
          <h2>Vos modifications on été enregistrées.</h2>
        </div>
      </div>
    </div>
  );
}

export default UserDeleteModal;
