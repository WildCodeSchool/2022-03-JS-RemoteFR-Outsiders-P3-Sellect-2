import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

function Logout() {
  const { setIsLoggedIn, setUserData } = useContext(MainContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/logout/users", { withCredentials: true })
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          setIsLoggedIn(false);
          setUserData(null);
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button type="button" className="button-member" onClick={handleLogout}>
        Se déconnecter
      </button>
    </div>
  );
}

export default Logout;
