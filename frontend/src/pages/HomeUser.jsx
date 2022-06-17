import Footer from "@components/Footer";
import Logout from "@components/Logout";
import Navbar from "@components/Navbar";
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
      <Navbar />
      <p>Hello Dashboard</p>
      <Logout />
      <Footer />
    </div>
  );
}

export default HomeUser;
