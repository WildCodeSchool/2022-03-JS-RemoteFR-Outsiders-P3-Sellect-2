import Footer from "@components/Footer";
// import Modal from "@components/Modal";
import ReferralCode from "@components/ReferralCode";
import UserNavbar from "@components/UserNavbar";
// import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { MainContext } from "../contexts/MainContext";

function SponsorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/connexion");
    }
  }, []);

  return (
    <div>
      <UserNavbar />
      <ReferralCode />
      <Footer />
    </div>
  );
}

export default SponsorPage;
