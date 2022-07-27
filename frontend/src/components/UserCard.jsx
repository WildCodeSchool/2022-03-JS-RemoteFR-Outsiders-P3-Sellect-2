import React, { useContext, useState } from "react";
import API from "../services/api";
import { MainContext } from "../contexts/MainContext";
import "../assets/Usercard.css";
import AdminModalAudit from "./AdminModalAudit";
import SponsorName from "./SponsorName";
import UserFiles from "./UserFiles";
import TotalGainsPerUser from "./TotalGainsPerUser";

function UserCard({ user }) {
  const { setDeleteUserModal, setIsUserDeleted } = useContext(MainContext);
  const [modal, setModal] = useState(false);
  const [areFilesDeleted, setAreFilesDeleted] = useState(false);

  const handleDelete = (e) => {
    // eslint-disable-next-line no-alert
    return window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")
      ? API.delete(`/all-files/${user.id}`)
          .then(() => {
            setAreFilesDeleted(true);
          })
          .catch((err) => console.error(err))
      : e.preventDefault();
  };

  if (areFilesDeleted) {
    API.delete(`/users/${user.id}`)
      .then(() => {
        setIsUserDeleted(true);
        setAreFilesDeleted(false);
        setTimeout(() => {
          setDeleteUserModal(true);
        }, 500);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="user_card">
      <details className="usercard_details">
        <summary className="usercard_summary">
          {user.firstname} {user.lastname}
        </summary>
        <div className="usercard_div">
          <div className="details_div">
            <TotalGainsPerUser
              user={user.id}
              admin={sessionStorage.getItem("isAdmin")}
            />
            <p>
              <span>Adresse email:</span> {user.email}
            </p>
            <p>
              <span>Téléphone:</span> {user.phoneNumber}
            </p>
            <p>
              <span>Date d'inscription:</span> {user.signupDate}
            </p>
            <SponsorName
              user={user.id}
              admin={sessionStorage.getItem("isAdmin")}
            />
            <p>
              <span>Code de parrainage:</span> {user.referralCode}
            </p>
          </div>
          <div className="usercard_btn">
            <button
              type="button"
              onClick={() => setModal(true)}
              className="add_btn"
            >
              Envoyer document
            </button>
            <button type="button" onClick={handleDelete} className="delete_btn">
              Supprimer utilisateur
            </button>
          </div>
        </div>
        <UserFiles user={user.id} />
      </details>
      {modal && <AdminModalAudit setModal={setModal} user={user} />}
    </div>
  );
}

export default UserCard;
