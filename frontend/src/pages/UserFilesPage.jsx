import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import UserContractForm from "@components/UserContractForm";
import UserFiles from "@components/UserFiles";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserFilesPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/connexion");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <UserContractForm />
      <UserFiles />
      <Footer />
    </div>
  );
}

export default UserFilesPage;
