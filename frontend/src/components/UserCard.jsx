import React, { useContext, useState } from "react";
import API from "../services/api";
import { MainContext } from "../contexts/MainContext";
import "../assets/Usercard.css";
import AdminModalAudit from "./AdminModalAudit";
import SponsorName from "./SponsorName";
import UserFiles from "./UserFiles";

function UserCard({ users, setUsers, user }) {
  const { setDeleteModal, sponsor } = useContext(MainContext);
  const [modal, setModal] = useState(false);

  const handleDelete = (e) => {
    // eslint-disable-next-line no-alert
    return window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")
      ? API.delete(`/users/${user.id}`)
          .then(() => {
            setUsers(users.filter((u) => u !== user));
            setTimeout(() => {
              setDeleteModal(true);
            }, 1000);
          })
          .catch((err) => console.error(err))
      : e.preventDefault();
  };
  // console.log(sponsor)
  return (
    <div className="user_card">
      <details className="usercard_details">
        <summary className="usercard_summary">
          Nom:&nbsp;{user.firstname}&nbsp;{user.lastname}
        </summary>
        <div className="usercard_div">
          <div className="details_div">
            <p>
              <span>Adresse email:</span>&nbsp;{user.email}
            </p>
            <p>
              <span>Téléphone:</span>&nbsp;{user.phoneNumber}
            </p>
            <p>
              <span>Date d'inscription:</span>&nbsp;{user.signupDate}
            </p>
            <SponsorName
              user={user.id}
              sponsorMessage={
                <p>
                  <span>Parrain:</span>&nbsp;{sponsor}
                </p>
              }
            />
            <p>
              <span>Code de parrainage:</span>&nbsp;{user.referralCode}
            </p>
          </div>
          <div className="usercard_btn">
            <button type="button" onClick={handleDelete} className="delete_btn">
              Supprimer utilisateur
            </button>
            <button
              type="button"
              onClick={() => setModal(true)}
              className="add_btn"
            >
              Envoyer document
            </button>
          </div>
        </div>
        <UserFiles user={user.id} />
      </details>
      <ul />
      {modal && <AdminModalAudit setModal={setModal} user={user} />}
    </div>
  );
}

export default UserCard;
