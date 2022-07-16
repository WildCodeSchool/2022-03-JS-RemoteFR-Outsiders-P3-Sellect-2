import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "../assets/common.css";
import "../assets/Login.css";
import loginImage from "../assets/img/loginImage.jpg";
import sellect2 from "../assets/img/sellect2.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    API.post(
      `/login/users`,
      {
        email,
        password,
      },
      { withCredentials: true }
    )
      .then((res) => {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("userId", res.data.id);
        if (res.data.role === "ADMIN") {
          localStorage.setItem("isAdmin", true);
          navigate("/mon-compte/admin-dashboard");
        } else {
          navigate("/mon-compte/calendrier");
        }
      })
      .catch((err) => {
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
        <p className="link-container">
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
