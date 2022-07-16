import React, { useState, useContext } from "react";
import Moment from "moment";
import API from "@services/api";
import { MainContext } from "../contexts/MainContext";
import "@assets/AuditModal.css";

function AdminModalAudit({ setModal, user }) {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [isFileSent, setIsFileSent] = useState(false);
  const sendDate = Moment().format("DD-MM-YYYY");
  const { setIsAuditReportSent } = useContext(MainContext);

  const closeModal = () => {
    setModal(false);
    setIsFileSent(false);
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
        setIsFileSent(true);
        setIsAuditReportSent(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="audit-modal">
      <div
        aria-hidden="true"
        onClick={closeModal}
        className="audit-modal-overlay"
      />
      <div className="audit-modal-content">
        <div className="audit-modal-header">
          <button
            type="button"
            className="audit-modal-close-button"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="audit-modal-message">
          {isFileSent ? (
            <h3>Votre compte-rendu d'audit a bien été envoyé.</h3>
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
              <div>
                {file && name && <button type="submit">Envoyer</button>}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminModalAudit;
