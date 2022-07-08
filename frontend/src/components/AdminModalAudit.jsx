import React, { useState } from "react";
import Moment from "moment";
import API from "@services/api";

function AdminModalAudit({ setModal, user }) {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [fileSent, setFileSent] = useState(false);
  const sendDate = Moment().format("DD-MM-YYYY");

  const closeModal = () => {
    setModal(false);
    setFileSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", user.id);
    formData.append("name", name);
    formData.append("sendDate", sendDate);
    API.post(`/upload/audit-reports`, formData)
      .then(() => {
        setFile("");
        setName("");
        setFileSent(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="modal">
      <div aria-hidden="true" onClick={closeModal} className="modal-overlay" />
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="modal-close-button"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="modal-message">
          {fileSent ? (
            <p>Votre compte-rendu d'audit a bien été envoyé.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                required
                onChange={(e) => setFile(e.target.files[0])}
              />
              <input
                type="text"
                placeholder="Nom du fichier"
                required
                onChange={(e) => setName(e.target.value)}
              />
              {file !== "" && <button type="submit">Envoyer</button>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminModalAudit;
