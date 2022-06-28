import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateAccountModal from "@components/UpdateAccountModal";
import { useNavigate } from "react-router-dom";

function UpdateUserAccount() {
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/connexion");
    }
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${userId}`)
      .then((res) => {
        setFirstname(res.data.firstname);
        setLastname(res.data.lastname);
        setEmail(res.data.email);
        setPhoneNumber(res.data.phoneNumber);
      })
      .catch((err) => console.error(err));
  }, []);

  const toggleModal = () => {
    setModal(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError(true);
      setTimeout(() => {
        setPasswordError(false);
      }, 5000);
    } else {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/users/${userId}`, {
          email,
          phoneNumber,
          password,
        })
        .then(() => {
          setTimeout(() => {
            setModal(true);
          }, 500);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1>
          {firstname}&nbsp;{lastname}
        </h1>
      </div>
      <form onSubmit={handleUpdate}>
        <div>
          <h2>Mettre à jour mes coordonnées:</h2>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <h2>Changer mon mot de passe:</h2>
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmer nouveau mot de passe"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordError && (
            <span className="error">
              Les mots de passe ne correspondent pas
            </span>
          )}
        </div>
        <button type="submit">Enregistrer les modifications</button>
      </form>
      {modal && <UpdateAccountModal toggleModal={toggleModal} />}
      <Footer />
    </div>
  );
}

export default UpdateUserAccount;
