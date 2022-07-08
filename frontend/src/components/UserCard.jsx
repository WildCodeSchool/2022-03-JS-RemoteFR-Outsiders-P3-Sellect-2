import React, { useContext, useEffect, useState } from "react";
import API from "../services/api";
import { MainContext } from "../contexts/MainContext";
import "../assets/Usercard.css";
import FileCard from "./FileCard";
import AdminModalAudit from "./AdminModalAudit";

function UserCard({ users, setUsers, user }) {
  const { setDeleteModal } = useContext(MainContext);
  const [files, setFiles] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    API.get(`/files/users/${user.id}`)
      .then((res) => {
        setFiles(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

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
        {files &&
          files
            .filter((file) => file.userId === user.id)
            .reverse()
            .map((file) => {
              return (
                <li key={file.id}>
                  <FileCard file={file} />
                </li>
              );
            })}
      </details>
      <ul />
      {modal && <AdminModalAudit setModal={setModal} user={user} />}
    </div>
  );
}

export default UserCard;
