import React, { useState, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Moment from "moment";
import API from "../services/api";
import "../assets/common.css";
import "../assets/Signup.css";
import { MainContext } from "../contexts/MainContext";
import signupImage from "../assets/img/signupImage.jpg";
import sellect2 from "../assets/img/sellect2.svg";

function SignUp() {
  const { setIsFirstConnection } = useContext(MainContext);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [sponsorCode, setSponsorCode] = useState("");
  const signupDate = Moment().format("DD-MM-YYYY");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError(true);
      setTimeout(() => {
        setPasswordError(false);
      }, 5000);
    } else {
      API.post(`/auth/users`, {
        firstname,
        lastname,
        email,
        phoneNumber,
        password,
        signupDate,
        sponsorCode,
      })
        .then((res) => {
          setIsFirstConnection(true);
          localStorage.setItem("userId", res.data.id);
          localStorage.setItem("loggedIn", true);
          navigate("/mon-compte/calendrier");
        })
        .catch((err) => {
          if (err) {
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 5000);
          }
        });
    }
  };

  return (
    <div className="signup-container">
      <Link to="/">
        <img src={sellect2} className="login-logo" alt="sellect-logo" />
      </Link>
      <div className="signup-form-container">
        <h2>Bienvenue dans l'??quipe !</h2>
        <form className="signup-form-content" onSubmit={handleRegister}>
          <div className="signup-name-container">
            <input
              type="text"
              placeholder="Pr??nom"
              value={firstname}
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nom"
              value={lastname}
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Num??ro de t??l??phone"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Code de parrainage"
            value={sponsorCode}
            onChange={(e) => setSponsorCode(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmer mot de passe"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="error-container">
            {error && <span className="error">Une erreur est survenue</span>}
            {passwordError && (
              <span className="error">
                Les mots de passe ne correspondent pas
              </span>
            )}
          </div>
          <div className="signup-button-container">
            <button type="submit">S'INSCRIRE</button>
          </div>
        </form>
        <p className="link-container">
          D??ja membre ?{" "}
          <NavLink to="/connexion" className="link-other-pages">
            Connectez-vous !
          </NavLink>
        </p>
      </div>
      <div className="signup-image-container">
        <img className="signup-image" src={signupImage} alt="groupOfPeople" />
        <div className="signup-image-text">
          <h1>
            Rejoignez la
            <br />
            communaut??
            <br />
            SELLECT
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
