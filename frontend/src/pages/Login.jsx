import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/common.css";
import "../assets/Login.css";
import { MainContext } from "../contexts/MainContext";
import loginImage from "../assets/img/loginImage.jpg";
import sellect2 from "../assets/img/sellect2.svg";

function Login() {
  const { setIsLoggedIn } = useContext(MainContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login/users`, {
        email,
        password,
        withCredentials: true,
      })
      .then((res) => {
        // console.log({ res });
        if (res.status === 200) {
          setIsLoggedIn(true);
          navigate("/mon-compte");
        }
      })
      .catch((err) => {
        // console.error(err.message);
        if (err) {
          setLoginError(true);
          setTimeout(() => {
            setLoginError(false);
          }, 5000);
        }
      });
  };

  return (
    <div className="login-container">
      <Link to="/">
        <img src={sellect2} className="login-logo" alt="sellect-logo" />
      </Link>
      <div className="login-form-container">
        <h2>
          Bonjour ! <span>Envie d'une nouvelle astuce ?</span>
        </h2>
        <form onSubmit={handleLogin} className="login-content">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-container-error">
            {loginError && (
              <span className="error">
                L'email ou le mot de passe ne correspondent pas
              </span>
            )}
          </div>
          <div className="login-button-container">
            <button type="submit">SE CONNECTER</button>
          </div>
        </form>
        <p>
          Pas de compte ?{" "}
          <NavLink to="/inscription" className="link-other-pages">
            Inscrivez-vous !
          </NavLink>
        </p>
      </div>
      <div className="login-image-container">
        <img className="login-image" src={loginImage} alt="happyWoman" />
        <div className="login-image-text">
          <h1>
            Optimisez
            <br />
            votre
            <br />
            pouvoir
            <br />
            d'achat
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
