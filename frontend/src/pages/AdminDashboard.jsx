import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "@components/UserCard";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Modal from "@components/Modal";
import API from "../services/api";
import { MainContext } from "../contexts/MainContext";
import "@assets/Admindasboard.css";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const navigate = useNavigate();
  const { deleteModal, setDeleteModal } = useContext(MainContext);

  const getUsers = () => {
    API.get(`/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  const toggleModal = () => {
    setDeleteModal(false);
  };

  useEffect(() => {
    if (localStorage.getItem("loggedIn") && !localStorage.getItem("isAdmin")) {
      navigate("/mon-compte");
    }
    if (!localStorage.getItem("loggedIn") && !localStorage.getItem("isAdmin")) {
      navigate("/");
    }

    getUsers();
  }, []);

  return (
    <div>
      <Navbar />
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
            .reverse()
            // .sort((a, b) =>
            // a.lastname.toLowerCase() < b.lastname.toLowerCase() ? -1 : 1
            // newDate(a.signupDate) - newDate(b.signupDate)
            // a.signupDate < b.signupDate ? -1 : 1
            // )
            .filter(
              (user) =>
                user.firstname
                  .toLowerCase()
                  .includes(searchUser.toLowerCase()) ||
                user.lastname
                  .toLowerCase()
                  .includes(searchUser.toLowerCase()) ||
                user.email.toLowerCase().includes(searchUser.toLowerCase()) ||
                user.phoneNumber.includes(searchUser) ||
                user.referralCode.includes(searchUser)
            )
            .map((user) => {
              return (
                <li key={user.id}>
                  <UserCard users={users} setUsers={setUsers} user={user} />
                </li>
              );
            })}
      </ul>
      <ul />
      {deleteModal && (
        <Modal
          toggleModal={toggleModal}
          modalMessage="L'utilisateur a bien été supprimé."
        />
      )}
      <Footer />
    </div>
  );
}

export default AdminDashboard;
