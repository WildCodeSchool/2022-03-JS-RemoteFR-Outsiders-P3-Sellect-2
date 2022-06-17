import axios from "axios";
import React, { useState, useEffect } from "react";
import UserCard from "@components/UserCard";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

function AdminDashboard() {
  const [users, setUsers] = useState([]);

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
      <ul>
        {users &&
          users.map((user) => {
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
