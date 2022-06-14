import React /* useContext, useEffect, useState */ from "react";
/* import { useNavigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext"; */

function HomeUser() {
  /* const { isLoggedIn } = useContext(MainContext);
  const navigate = useNavigate(); */

  /* useEffect(() => {
    if (!isLoggedIn) {
      navigate("/connexion");
      /* console.log(isLoggedIn);
    }
  }, []); */

  return (
    <div>
      <p>Hello Dashboard</p>
    </div>
  );
}

export default HomeUser;
