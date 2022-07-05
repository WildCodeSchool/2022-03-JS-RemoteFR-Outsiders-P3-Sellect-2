import React, { useContext } from "react";
import API from "../services/api";
import { MainContext } from "../contexts/MainContext";
import "@assets/Useraccount.css";
import "@assets/common.css";

function Logout() {
  const { setUserData } = useContext(MainContext);

  const handleLogout = (e) => {
    e.preventDefault();
    API.get(`/logout/users`, {
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          localStorage.clear();
          setUserData(null);
          window.location = "/";
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button
        type="button"
        className="button-deconnectmember"
        onClick={handleLogout}
      >
        Se déconnecter
      </button>
    </div>
  );
}

export default Logout;
