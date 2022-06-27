import axios from "axios";
import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

function UserCard({ users, setUsers, user }) {
  const { setDeleteModal } = useContext(MainContext);

  const handleDelete = (e) => {
    return window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")
      ? axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/users/${user.id}`)
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
    <div>
      <p>
        Nom: {user.firstname} {user.lastname}
      </p>
      <p>Adresse email: {user.email}</p>
      <p>Téléphone: {user.phoneNumber}</p>
      <button type="button" onClick={handleDelete}>
        Supprimer utilisateur
      </button>
    </div>
  );
}

export default UserCard;
