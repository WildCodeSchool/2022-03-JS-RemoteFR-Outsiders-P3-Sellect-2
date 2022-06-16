import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

function Logout() {
  const { setIsLoggedIn } = useContext(MainContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/logout/users")
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          setIsLoggedIn(false);
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  // console.log(isLoggedIn);

  return (
    <div>
      <button type="submit" onClick={handleLogout}>
        Se déconnecter
      </button>
    </div>
  );
}

export default Logout;
