import React, { useState, useEffect } from "react";
import ReferralCodeCard from "@components/ReferralCodeCard";
import API from "../services/api";

function ReferralCode() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    API.get(`/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Code Parrainage</h2>

      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <ReferralCodeCard user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReferralCode;
