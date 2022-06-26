import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import SignupModal from "@components/SignupModal";
// import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

function UserHome() {
  const navigate = useNavigate();
  const {
    isFirstConnection,
    setIsFirstConnection,
    /* userData,
    setUserData, */
  } = useContext(MainContext);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(false);
    setIsFirstConnection(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/connexion");
    }
    if (isFirstConnection) {
      setTimeout(() => {
        setModal(true);
      }, 1000);
    }
    /* axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/data/users`)
      .then((res) => console.log(res), setUserData(res.data))
      .catch((err) => console.error(err)); */
  }, []);

  return (
    <div>
      <Navbar />
      <p>Bonjour</p>
      <Link to="/mon-compte/mettre-a-jour"> Mettre à jour mon compte</Link>
      {modal && <SignupModal toggleModal={toggleModal} />}
      <Footer />
    </div>
  );
}

export default UserHome;
