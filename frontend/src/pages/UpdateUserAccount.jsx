import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import axios from "axios";
import React, { useEffect } from "react";
// import { MainContext } from '../contexts/MainContext';

function UpdateUserAccount() {
  const userId = parseInt(localStorage.getItem("userId"), 10);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/${userId}`);
    // .then((res) => console.log(res.data));
    // .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default UpdateUserAccount;
