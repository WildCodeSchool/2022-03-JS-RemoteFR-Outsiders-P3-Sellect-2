import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import SignupModal from "@components/SignupModal";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

function UserHome() {
  const navigate = useNavigate();
  const {
    isLoggedIn,
    isFirstConnection,
    setIsFirstConnection /* , userData, setUserData */,
  } = useContext(MainContext);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(false);
    setIsFirstConnection(false);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/connexion");
    }
    if (isFirstConnection) {
      setTimeout(() => {
        setModal(true);
      }, 1000);
    }
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/login/users`)
      // .then((res) => console.log(res.data) /* , setUserData(res.data) */)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />
      <p>Bonjour</p>
      {modal && <SignupModal toggleModal={toggleModal} />}
      <Footer />
    </div>
  );
}

export default UserHome;
