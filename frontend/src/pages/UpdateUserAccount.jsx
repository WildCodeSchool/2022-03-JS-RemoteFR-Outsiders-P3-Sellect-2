import Footer from "@components/Footer";
import UserNavbar from "@components/UserNavbar";
import React, { useEffect, useState } from "react";
import Modal from "@components/Modal";
import { useNavigate } from "react-router-dom";
import UpdateInfos from "@components/UpdateInfos";
import UpdatePassword from "@components/UpdatePassword";
import infos from "@assets/img/infos.jpg";
import "@assets/Updateuseraccount.css";
import "@assets/common.css";
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
      <UserNavbar />
      <div className="updateuseraccount">
        <div className="div-updateuseraccount">
          <h1 className="title-updateuseraccount">
            {firstname} {lastname}
          </h1>
          <div className="modalaccount">
            <UpdateInfos setModal={setModal} />
            <UpdatePassword setModal={setModal} />
            {modal && (
              <Modal
                toggleModal={toggleModal}
                modalMessage="Vos modifications ont bien été enregistrées."
              />
            )}
          </div>
        </div>
        <div className="updateimg">
          <img src={infos} alt="mise à jour coordonnées" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UpdateUserAccount;
