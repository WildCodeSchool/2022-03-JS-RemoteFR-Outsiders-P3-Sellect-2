import React, { useState, useEffect } from "react";
import API from "@services/api";
import "@assets/Updateinfos.css";
import "@assets/common.css";

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
    <div className="updateinfos">
      <h2 className="updatedetails">Mettre à jour mes coordonnées:</h2>
      <form className="form-updateinfos" onSubmit={handleUpdateInfos}>
        <div className="div-updateinfos">
          <label htmlFor="email">
            {" "}
            Email :
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email"
            />
          </label>
          <label htmlFor="phone">
            {" "}
            Téléphone :
            <input
              type="text"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default UpdateInfos;
