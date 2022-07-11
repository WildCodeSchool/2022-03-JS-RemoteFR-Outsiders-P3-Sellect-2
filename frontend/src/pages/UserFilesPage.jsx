import Footer from "@components/Footer";
import Modal from "@components/Modal";
import Navbar from "@components/Navbar";
import UserContractForm from "@components/UserContractForm";
import UserFiles from "@components/UserFiles";
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

function UserFilesPage() {
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const navigate = useNavigate();
  const { isFileModal, setIsFileModal } = useContext(MainContext);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/connexion");
    }
  }, []);

  const toggleModal = () => {
    setIsFileModal(false);
  };

  return (
    <div>
      <Navbar />
      <UserContractForm />
      <UserFiles user={userId} />
      <Footer />
      {isFileModal && (
        <Modal
          toggleModal={toggleModal}
          modalMessage="Votre document a bien été envoyé."
        />
      )}
    </div>
  );
}

export default UserFilesPage;
