import API from "@services/api";
import React, { useContext, useState } from "react";
import Moment from "moment";
import { MainContext } from "../contexts/MainContext";
import "@assets/ContractModal.css";

function AdminModalNewContract({ file, setContractModal }) {
  const [contract, setContract] = useState("");
  const [name, setName] = useState("");
  const newSendDate = Moment().format("DD-MM-YYYY");
  const [newCost, setNewCost] = useState(0);
  const [isContractMessageReady, setIsContractMessageReady] = useState(false);
  const { setIsGainReady, setIsContractSent } = useContext(MainContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", file.userId);
    formData.append("name", name);
    formData.append("file", contract);
    formData.append("newSendDate", newSendDate);
    formData.append("newCost", newCost);
    formData.append("gain", file.initialCost - newCost);
    API.put(`/update/new-contracts/${file.id}`, formData)
      .then(() => {
        setIsContractSent(true);
        setIsGainReady(true);
        setIsContractMessageReady(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const closeModal = () => {
    setContractModal(false);
    setIsContractMessageReady(false);
  };

  return (
    <div className="contract-modal">
      <div
        aria-hidden="true"
        onClick={closeModal}
        className="contract-modal-overlay"
      />
      <div className="contract-modal-content">
        <div className="contract-modal-header">
          <button
            type="button"
            className="contract-modal-close-button"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="contract-modal-message">
          {isContractMessageReady ? (
            <h3>Ce contrat a bien été mis à jour.</h3>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="file"
                  required
                  onChange={(e) => setContract(e.target.files[0])}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Nom du fichier"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  required
                  placeholder="Montant du contrat par mois"
                  onChange={(e) => setNewCost(parseInt(e.target.value, 10))}
                />
              </div>
              <div>
                {contract &&
                  name &&
                  newCost !== 0 &&
                  !Number.isNaN(newCost) && (
                    <button type="submit">Envoyer</button>
                  )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminModalNewContract;
