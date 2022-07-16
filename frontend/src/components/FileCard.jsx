import React, { useContext, useState } from "react";
import download from "downloadjs";
import API from "../services/api";
import "../assets/common.css";
import "../assets/Filecard.css";
import { MainContext } from "../contexts/MainContext";
import AdminModalNewContract from "./AdminModalNewContract";

function FileCard({ file, files, setFiles, admin }) {
  const { setDeleteFileModal, setIsFileDeleted } = useContext(MainContext);
  const [contractModal, setContractModal] = useState(false);
  /**
   * Cette fonction permet de téléchager un document depuis le backend
   */
  const handleDownload = async () => {
    // Ici, je récupere l'extention de mon document
    const extension = file.content.split(".")[1];
    // Je fais appel à mon API pour demander le téléchargement d'un document précis
    const res = await API.get(`/download/file/${file.content}`, {
      // je lui indique que la réponse sera de type 'blob'
      responseType: "blob",
    });
    // je récupère le blob qui est dans res.data
    const data = await res.data;
    // puis j'instancie un Blob avec ma data
    const blob = new Blob([data]);
    // puis, grâce à un package NPM (downloadjs), je vais pouvoir télécharger mon image.
    download(blob, `${file.name}.${extension}`, `image/${extension}`);
  };

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
          <button type="button">Visualiser</button>
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
            <button type="button" onClick={() => handleDelete()}>
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
