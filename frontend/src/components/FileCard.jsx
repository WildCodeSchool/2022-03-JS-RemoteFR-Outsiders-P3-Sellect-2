import React from "react";
import "../assets/common.css";
import "../assets/Filecard.css";

function FileCard({ file }) {
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
          <a href={`../../../backend/uploads/${file.content}`} target="__blank">
            Visualiser
          </a>
          <a
            href={`../../../backend/uploads/${file.content}`}
            download={file.name}
          >
            Télécharger
          </a>
        </div>
      </details>
    </div>
  );
}

export default FileCard;
