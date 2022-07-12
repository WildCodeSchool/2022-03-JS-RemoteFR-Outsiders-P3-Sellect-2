import React from "react";
import download from "downloadjs";
import API from "../services/api";
import "../assets/common.css";
import "../assets/Filecard.css";

function FileCard({ file }) {
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

  return (
    <div className="filecard">
      <details className="filecard_details">
        <summary className="filecard_summary">
          <p>&nbsp;{file.name}</p>
        </summary>
        {file.category !== "Compte-rendu d'audit" && (
          <p>Catégorie:&nbsp;{file.category}</p>
        )}
        <p>Date d'envoi:&nbsp;{file.sendDate}</p>
        <div className="filecard_link">
          <button type="button" onClick={() => handleDownload()}>
            Télécharger
          </button>
        </div>
      </details>
    </div>
  );
}

export default FileCard;
