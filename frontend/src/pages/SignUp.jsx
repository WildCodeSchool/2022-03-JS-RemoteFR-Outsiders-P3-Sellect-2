import React, { useState, useContext, useEffect } from "react";
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
  const [sponsorCodeError, setSponsorCodeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [sponsorCode, setSponsorCode] = useState("");
  const [sponsorName, setSponsorName] = useState("");
  const signupDate = Moment().format("DD-MM-YYYY");
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/users/sponsors/${sponsorCode}`)
      .then((res) => setSponsorName(res.data.firstname))
      .catch((err) => {
        console.error(err);
        setSponsorName("");
      });
  }, [sponsorCode]);

  const emailVerification = (emailAddress) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(emailAddress);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!emailVerification(email)) {
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }, 5000);
    } else if (password !== confirmPassword) {
      setPasswordError(true);
      setTimeout(() => {
        setPasswordError(false);
      }, 5000);
    } else if (sponsorCode !== "" && sponsorName === "") {
      setSponsorCodeError(true);
      setTimeout(() => {
        setSponsorCodeError(false);
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
          sessionStorage.setItem("userId", res.data.id);
          sessionStorage.setItem("loggedIn", true);
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
        <h2>Bienvenue dans l'équipe !</h2>
        <form className="signup-form-content" onSubmit={handleRegister}>
          <div className="signup-name-container">
            <input
              type="text"
              placeholder="Prénom"
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
            placeholder="Numéro de téléphone"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Code de parrainage"
            value={sponsorCode}
            onChange={(e) =>
              setSponsorCode(
                e.target.value
                  .split("")
                  .map((el) => (el === " " ? "" : el))
                  .join("")
              )
            }
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
            {emailError && (
              <span className="error">
                Cette adresse email n'est pas valide
              </span>
            )}
            {passwordError && (
              <span className="error">
                Les mots de passe ne correspondent pas
              </span>
            )}
            {sponsorCodeError && (
              <span className="error">
                Ce code de parrainage n'est pas valide
              </span>
            )}
          </div>
          <div className="signup-button-container">
            <button type="submit">S'INSCRIRE</button>
          </div>
        </form>
        <p className="link-container">
          Déja membre ?{" "}
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
            communauté
            <br />
            SELLECT
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
