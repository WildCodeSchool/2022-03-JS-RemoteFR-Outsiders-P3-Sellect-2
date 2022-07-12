import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logosellect from "../assets/img/logosellect.svg";
import toggle from "../assets/img/toggle.svg";
import "../assets/Navbar.css";
import "../assets/common.css";
import Logout from "./Logout";

export default function UserNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <div className="div-nav">
        <div className="div-sellectlogo">
          <img
            src={logosellect}
            alt="sellectlogo"
            className="img-sellectlogo"
          />
        </div>
        <div className="div-button">
          <button type="button" onClick={toggleNav} className="btn-toggle">
            {" "}
            <img src={toggle} alt="menu hamburger" className="img-hamburger" />
          </button>
        </div>
      </div>

      <div className="div-ul">
        {(toggleMenu || screenWidth > 750) && (
          <>
            <div>
              <nav className="liste-nav">
                <NavLink
                  to="/"
                  className={(items) =>
                    items.isActive ? "items-activated" : "items"
                  }
                >
                  Accueil
                </NavLink>
                {localStorage.getItem("isAdmin") ? (
                  <NavLink
                    to="/mon-compte/admin-dashboard"
                    className={(items) =>
                      items.isActive ? "items-activated" : "items"
                    }
                  >
                    Tableau de bord
                  </NavLink>
                ) : (
                  <NavLink
                    to="/mon-compte/calendrier"
                    className={(items) =>
                      items.isActive ? "items-activated" : "items"
                    }
                  >
                    Audit
                  </NavLink>
                )}
                {!localStorage.getItem("isAdmin") && (
                  <NavLink
                    to="/mon-compte/fichiers"
                    className={(items) =>
                      items.isActive ? "items-activated" : "items"
                    }
                  >
                    Documents
                  </NavLink>
                )}
                <NavLink
                  to="/mon-compte/mettre-a-jour"
                  className={(items) =>
                    items.isActive ? "items-activated" : "items"
                  }
                >
                  Compte
                </NavLink>
                <NavLink
                  to="/mon-compte/parrainage"
                  className={(items) =>
                    items.isActive ? "items-activated" : "items"
                  }
                >
                  Parrainage
                </NavLink>
              </nav>
            </div>

            {localStorage.getItem("loggedIn") ? (
              <div className="btn-div">
                <Logout />
              </div>
            ) : (
              <div className="btn-div">
                <NavLink to="/inscription" className="items">
                  <button className="button-member" type="button">
                    Devenir membre
                  </button>
                </NavLink>
                <NavLink to="/connexion" className="items">
                  <button className="button-connect" type="button">
                    Se connecter
                  </button>
                </NavLink>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
