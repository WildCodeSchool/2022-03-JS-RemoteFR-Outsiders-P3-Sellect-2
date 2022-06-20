import React from "react";
import "../assets/SignupModal.css";

function SignupModal({ toggleModal }) {
  return (
    <div className="signup-modal">
      <div
        aria-hidden="true"
        onClick={toggleModal}
        className="signup-modal-overlay"
      />
      <div className="signup-modal-content">
        <div className="signup-modal-header">
          <button
            type="button"
            className="signup-modal-close-button"
            onClick={toggleModal}
          >
            &times;
          </button>
        </div>
        <div className="signup-modal-message">
          <h2>
            Votre inscription a bien été
            <br />
            prise en compte !
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
