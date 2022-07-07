import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import logosellect from "../assets/img/logosellect.svg";
import "../assets/UserNavbar.css";

export default function UserNavbar() {
  return (
    <div className="container-usernavbar">
      <div className="div-sellectlogo">
        <img src={logosellect} alt="sellectlogo" className="img-sellectlogo" />
      </div>
      {localStorage.getItem("loggedIn") ? (
        <div className="btn-div">
          <Logout />
        </div>
      ) : (
        <div className="btn-div">
          <NavLink to="/inscription" className="items">
            <button
              className="button-member"
              type="button"
              /* onClick={handleClick} */
            >
              Devenir membre
            </button>
          </NavLink>
          <NavLink to="/connexion" className="items">
            <button
              className="button-connect"
              type="button"
              /* onClick={handleClick} */
            >
              Se connecter
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
