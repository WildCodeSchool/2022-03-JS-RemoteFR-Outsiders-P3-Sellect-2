import React, { useState, useEffect } from "react";
import ReferralCodeCard from "@components/ReferralCodeCard";
import API from "../services/api";

function ReferralCode() {
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const [users, setUsers] = useState(userId);

  const getOneUser = () => {
    API.get(`/users/${users}`)
      .then((res) => {
        console.warn(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneUser();
  }, []);

  return (
    <div>
      <h2>Code Parrainage</h2>

      <ReferralCodeCard user={users} />
    </div>
  );
}

export default ReferralCode;
