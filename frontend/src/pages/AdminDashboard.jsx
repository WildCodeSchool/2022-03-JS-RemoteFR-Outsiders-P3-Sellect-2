import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "@components/UserCard";
import UserNavbar from "@components/UserNavbar";
import Footer from "@components/Footer";
import Modal from "@components/Modal";
import API from "../services/api";
import { MainContext } from "../contexts/MainContext";
import "@assets/Admindasboard.css";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const navigate = useNavigate();
  const {
    deleteUserModal,
    setDeleteUserModal,
    deleteFileModal,
    setDeleteFileModal,
    isUserDeleted,
    setIsUserDeleted,
  } = useContext(MainContext);

  const getUsers = () => {
    API.get(`/users`)
      .then((res) => {
        setUsers(res.data);
        setIsUserDeleted(false);
      })
      .catch((err) => console.error(err));
  };

  const toggleModal = () => {
    setDeleteUserModal(false);
    setDeleteFileModal(false);
  };

  useEffect(() => {
    if (localStorage.getItem("loggedIn") && !localStorage.getItem("isAdmin")) {
      navigate("/mon-compte");
    }
    if (!localStorage.getItem("loggedIn") && !localStorage.getItem("isAdmin")) {
      navigate("/");
    }
    getUsers();
  }, [isUserDeleted]);

  return (
    <div className="admindashboard-container">
      <UserNavbar />
      <h2>Liste Utilisateurs</h2>
      <div className="usersearch">
        <input
          type="text"
          placeholder="Rechercher un utilisateur"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
        />
      </div>
      <ul>
        {users &&
          users
            .filter(
              (user) =>
                user.firstname
                  .toLowerCase()
                  .includes(searchUser.toLowerCase()) ||
                user.lastname
                  .toLowerCase()
                  .includes(searchUser.toLowerCase()) ||
                user.email.toLowerCase().includes(searchUser.toLowerCase()) ||
                user.phoneNumber.includes(searchUser)
            )
            .map((user) => {
              return (
                <li key={user.id}>
                  <UserCard users={users} setUsers={setUsers} user={user} />
                </li>
              );
            })
            .reverse()}
      </ul>
      <ul />
      {deleteUserModal && (
        <Modal
          toggleModal={toggleModal}
          modalMessage="L'utilisateur a bien été supprimé."
        />
      )}
      {deleteFileModal && (
        <Modal
          toggleModal={toggleModal}
          modalMessage="Ce document a bien été supprimé."
        />
      )}
      <Footer />
    </div>
  );
}

export default AdminDashboard;
