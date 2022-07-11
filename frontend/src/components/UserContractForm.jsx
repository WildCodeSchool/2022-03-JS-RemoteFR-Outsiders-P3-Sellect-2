import API from "@services/api";
import React, { useContext, useState } from "react";
import Moment from "moment";
import { MainContext } from "../contexts/MainContext";

function UserContractForm() {
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const [name, setName] = useState("");
  const sendDate = Moment().format("DD-MM-YYYY");
  const { setIsContractSent } = useContext(MainContext);
  const { setIsFileModal } = useContext(MainContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", userId);
      formData.append("name", name);
      formData.append("category", category);
      formData.append("sendDate", sendDate);
      API.post("/upload/contracts", formData)
        .then(() => {
          setIsContractSent(true);
          setIsFileModal(true);
          setFile("");
          setCategory("");
          setName("");
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // eslint-disable-next-line no-alert
      alert("Veuillez sélectionner un fichier.");
    }
  };

  return (
    <div>
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
        <select required onChange={(e) => setCategory(e.target.value)}>
          <option value="" required="">
            Catégorie
          </option>
          <option value="Assurance Habitation">Assurance Habitation</option>
          <option value="Assurance Prêt">Assurance Prêt</option>
          <option value="Assurance Véhicule">Assurance Véhicule</option>
          <option value="Energie">Energie</option>
          <option value="Mutuelle">Mutuelle</option>
          <option value="Services Multimédia">Services Multimédia</option>
          <option value="Téléphonie &amp; Internet">
            Téléphonie &amp; Internet
          </option>
          <option value="Autres">Autres</option>
        </select>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default UserContractForm;
