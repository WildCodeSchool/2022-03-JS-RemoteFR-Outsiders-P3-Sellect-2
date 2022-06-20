import Footer from "@components/Footer";
import Logout from "@components/Logout";
import Navbar from "@components/Navbar";
import SignupModal from "@components/SignupModal";
import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

function HomeUser() {
  // const navigate = useNavigate();
  const { /* isLoggedIn , */ isFirstConnection, setIsFirstConnection } =
    useContext(MainContext);
  const [modal, setModal] = useState(false);

  // console.log(isFirstConnection);

  const toggleModal = () => {
    setModal(!modal);
    setIsFirstConnection(!isFirstConnection);
  };

  useEffect(() => {
    /* if (!isLoggedIn) {
      navigate("/connexion");
    } */
    if (isFirstConnection) {
      setTimeout(() => {
        setModal(!modal);
      }, 1000);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <p>Hello Dashboard</p>
      {modal && <SignupModal toggleModal={toggleModal} />}
      <Logout />
      <Footer />
    </div>
  );
}

export default HomeUser;
