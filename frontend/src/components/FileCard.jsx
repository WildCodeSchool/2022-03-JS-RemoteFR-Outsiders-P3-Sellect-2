import React from "react";

function FileCard({ file }) {
  return (
    <div>
      <p>Nom:&nbsp;{file.name}</p>
      {file.category !== "Compte-rendu d'audit" && (
        <p>Catégorie:&nbsp;{file.category}</p>
      )}
      <p>Date d'envoi:&nbsp;{file.sendDate}</p>
      <a href={`../../../backend/uploads/${file.content}`} download={file.name}>
        Télécharger
      </a>
    </div>
  );
}

export default FileCard;
