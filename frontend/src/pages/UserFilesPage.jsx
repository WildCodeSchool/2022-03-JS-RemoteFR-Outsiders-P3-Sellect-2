import Footer from "@components/Footer";
import Modal from "@components/Modal";
import UserNavbar from "@components/UserNavbar";
import UserContractForm from "@components/UserContractForm";
import UserFiles from "@components/UserFiles";
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TotalGainsPerUser from "@components/TotalGainsPerUser";
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
    // eslint-disable-next-line no-alert
    window.location.reload();
  };

  return (
    <div>
      <UserNavbar />
      <TotalGainsPerUser user={userId} />
      <div className="user-files-page">
        <UserFiles user={userId} />
      </div>
      <UserContractForm />
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
