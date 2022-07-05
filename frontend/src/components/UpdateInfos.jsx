import React, { useState, useEffect } from "react";
import API from "@services/api";

function UpdateInfos({ setModal }) {
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    API.get(`/users/${userId}`)
      .then((res) => {
        setEmail(res.data.email);
        setPhoneNumber(res.data.phoneNumber);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleUpdateInfos = (e) => {
    e.preventDefault();
    API.put(`/infos/users/${userId}`, {
      email,
      phoneNumber,
    })
      .then(() => {
        setTimeout(() => {
          setModal(true);
        }, 500);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Mettre à jour mes coordonnées:</h2>
      <form onSubmit={handleUpdateInfos}>
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default UpdateInfos;
