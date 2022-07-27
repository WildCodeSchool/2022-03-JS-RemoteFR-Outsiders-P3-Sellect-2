import Footer from "@components/Footer";
import ReferralCode from "@components/ReferralCode";
import UserNavbar from "@components/UserNavbar";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SponsorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("loggedIn")) {
      navigate("/connexion");
    }
  }, []);

  return (
    <div className="sponsor-page">
      <UserNavbar />
      <ReferralCode />
      <Footer />
    </div>
  );
}

export default SponsorPage;
