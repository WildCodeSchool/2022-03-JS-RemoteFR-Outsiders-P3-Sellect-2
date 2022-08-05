import React, { useContext, useEffect, useState } from "react";
import download from "downloadjs";
import API from "../services/api";
import "../assets/common.css";
import "../assets/Filecard.css";
import { MainContext } from "../contexts/MainContext";
import AdminModalNewContract from "./AdminModalNewContract";

function FileCard({ file, files, setFiles, admin }) {
  const { setDeleteFileModal, setIsFileDeleted, isContractSent } =
    useContext(MainContext);
  const [contractModal, setContractModal] = useState(false);
  const [fileLink, setFileLink] = useState(false);

  const handleDownload = async () => {
    const extension = file.content.split(".")[1];
    const res = await API.get(`/download/file/${file.content}`, {
      responseType: "blob",
    });
    const data = await res.data;
    const blob = new Blob([data]);
    download(blob, `${file.name}.${extension}`, `image/${extension}`);
  };

  useEffect(() => {
    API.get(`/visualize/file/${file.content}`)
      .then((res) => setFileLink(res.data.path))
      .catch((err) => console.error(err));
  }, [isContractSent]);

  const handleDelete = (e) => {
    // eslint-disable-next-line no-alert
    return window.confirm("Voulez-vous vraiment supprimer ce document ?")
      ? API.delete(`/files/${file.id}`)
          .then(() => {
            setFiles(files.filter((el) => el !== file));
            setIsFileDeleted(true);
            setTimeout(() => {
              setDeleteFileModal(true);
            }, 500);
          })
          .catch((err) => console.error(err))
      : e.preventDefault();
  };

  return (
    <div className="filecard">
      <details className="filecard_details">
        <summary className="filecard_summary">{file.name}</summary>
        {file.category !== "Compte-rendu d'audit" && (
          <p>
            <span className="file-card-entitled">Catégorie:</span>{" "}
            <span className="file-card-category">{file.category}</span>
          </p>
        )}
        <p>
          <span className="file-card-entitled">
            {file.category === "Compte-rendu d'audit"
              ? "Date d'envoi du compte-rendu:"
              : "Date d'envoi du contrat initial:"}
          </span>{" "}
          <span
            className={
              file.category === "Compte-rendu d'audit"
                ? ""
                : "file-card-initial-cost"
            }
          >
            {file.sendDate}
          </span>
        </p>
        {file.newSendDate && (
          <p>
            <span className="file-card-entitled">
              Date d'envoi du nouveau contrat:
            </span>{" "}
            <span className="user-gains">{file.newSendDate}</span>
          </p>
        )}
        {file.initialCost && file.category !== "Compte-rendu d'audit" && (
          <p>
            <span className="file-card-entitled">
              Coût initial du contrat par mois:
            </span>{" "}
            <span className="file-card-initial-cost">
              {file.initialCost} euros
            </span>
          </p>
        )}
        {file.newCost && (
          <p>
            <span className="file-card-entitled">
              Nouveau coût du contrat par mois:
            </span>{" "}
            <span className="user-gains">{file.newCost} euros</span>
          </p>
        )}
        {file.gain && (
          <p>
            <span className="file-card-entitled">Economies réalisées:</span>{" "}
            <span className="user-gains">{file.gain} euros</span>
          </p>
        )}
        <div className="filecard_link">
          <a
            target="_blank"
            href={`${import.meta.env.VITE_BACKEND_URL}/uploads/${fileLink}`}
            rel="noreferrer"
          >
            Visualiser
          </a>
          <button type="button" onClick={() => handleDownload()}>
            Télécharger
          </button>
          {admin && file.category !== "Compte-rendu d'audit" && (
            <button
              id="modify-button"
              type="button"
              onClick={() => setContractModal(true)}
            >
              Modifier
            </button>
          )}
          {admin && (
            <button
              id="delete_btn"
              type="button"
              onClick={() => handleDelete()}
            >
              Supprimer
            </button>
          )}
        </div>
      </details>
      {contractModal && (
        <AdminModalNewContract
          file={file}
          setContractModal={setContractModal}
        />
      )}
    </div>
  );
}

export default FileCard;
