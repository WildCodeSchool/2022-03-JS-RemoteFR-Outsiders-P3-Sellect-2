import React from "react";
import API from "../services/api";
import "@assets/Logout.css";
import "@assets/common.css";

function Logout() {
  const handleLogout = (e) => {
    e.preventDefault();
    API.get(`/logout/users`)
      .then((res) => {
        if (res.status === 200) {
          localStorage.clear();
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
