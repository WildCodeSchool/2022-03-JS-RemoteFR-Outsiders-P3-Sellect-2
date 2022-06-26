import React from "react";
import "../assets/UserDeleteModal.css";

function UserDeleteModal({ toggleModal }) {
  return (
    <div className="delete-modal">
      <div
        aria-hidden="true"
        onClick={toggleModal}
        className="delete-modal-overlay"
      />
      <div className="delete-modal-content">
        <div className="delete-modal-header">
          <button
            type="button"
            className="delete-modal-close-button"
            onClick={toggleModal}
          >
            &times;
          </button>
        </div>
        <div className="delete-modal-message">
          <h2>L'utilisateur a bien été supprimé.</h2>
        </div>
      </div>
    </div>
  );
}

export default UserDeleteModal;
