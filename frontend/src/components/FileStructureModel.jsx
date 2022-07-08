import React from "react";

function FileStructureModel({ file }) {
  return (
    <div>
      <p>Nom:&nbsp;{file.name}</p>
      <p>Catégorie:&nbsp;{file.category}</p>
      <p>Date d'envoi:&nbsp;{file.sendDate}</p>
      <a href={`../../../backend/uploads/${file.content}`} download={file.name}>
        Télécharger
      </a>
    </div>
  );
}

export default FileStructureModel;
