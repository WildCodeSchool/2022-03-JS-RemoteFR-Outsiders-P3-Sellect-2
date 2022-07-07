import Footer from "@components/Footer";
import Modal from "@components/Modal";
import ReferralCode from "@components/ReferralCode";
import UserNavbar from "@components/UserNavbar";
// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Calendly from "@components/Calendly";
// import { MainContext } from "../contexts/MainContext";

function UserHome() {
  /** 
  const navigate = useNavigate();
  const {
    isFirstConnection,
    setIsFirstConnection,
     userData,
    setUserData, 
  } = useContext(MainContext); 


  * const [modal, setModal] = useState(false);

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
  }, []); */

  return (
    <div>
      <ReferralCode />
      <UserNavbar />
      <Calendly />
      {/** 
       * <p>Bonjour</p>
      <NavLink style={{ color: "blue" }} to="/mon-compte/mettre-a-jour">
        {" "}
        Mettre à jour mon compte
      </NavLink>
      {modal && (
        <Modal
          toggleModal={toggleModal}
          modalMessage="Votre inscription a bien été prise en compte !"
        />
      )}
      <Footer />
      */}
    </div>
  );
}

export default UserHome;
