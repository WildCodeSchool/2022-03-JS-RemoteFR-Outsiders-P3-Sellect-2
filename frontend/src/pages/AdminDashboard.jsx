import axios from "axios";
import React, { useState, useEffect } from "react";
import UserCard from "@components/UserCard";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  const getUsers = () => {
    axios
      .get("http://localhost:5000/auth/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Liste Utilisateurs</h2>
      <input
        type="text"
        placeholder="Rechercher un utilisateur"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      />
      <ul>
        {users &&
          users
            .filter(
              (user) =>
                user.firstname.includes(searchUser) ||
                user.lastname.includes(searchUser) ||
                user.email.includes(searchUser) ||
                user.phoneNumber.includes(searchUser)
            )
            .map((user) => {
              return (
                <li key={user.id}>
                  <UserCard user={user} />
                </li>
              );
            })}
      </ul>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
