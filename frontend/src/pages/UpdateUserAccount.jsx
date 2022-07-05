import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import React, { useEffect, useState } from "react";
import Modal from "@components/Modal";
import { useNavigate } from "react-router-dom";
import UpdateInfos from "@components/UpdateInfos";
import UpdatePassword from "@components/UpdatePassword";
import API from "../services/api";

function UpdateUserAccount() {
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/connexion");
    }
    API.get(`/users/${userId}`)
      .then((res) => {
        setFirstname(res.data.firstname);
        setLastname(res.data.lastname);
      })
      .catch((err) => console.error(err));
  }, []);

  const toggleModal = () => {
    setModal(false);
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1>
          {firstname}&nbsp;{lastname}
        </h1>
      </div>
      <UpdateInfos setModal={setModal} />
      <UpdatePassword setModal={setModal} />
      {modal && (
        <Modal
          toggleModal={toggleModal}
          modalMessage="Vos modifications ont bien été enregistrées."
        />
      )}
      <Footer />
    </div>
  );
}

export default UpdateUserAccount;
