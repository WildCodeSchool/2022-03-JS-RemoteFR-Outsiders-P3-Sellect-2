import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
// import sellect2 from "../assets/img/sellect2.svg";
import logosellect from "../assets/img/logosellect.svg";
import toggle from "../assets/img/toggle.svg";
import "../assets/Navbar.css";
import "../assets/common.css";
import { MainContext } from "../contexts/MainContext";
import Logout from "./Logout";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { isLoggedIn } = useContext(MainContext);

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

  /* function handleClick(e) {
    e.preventDefault();
    console.warn("Le lien a été cliqué.");
  } */

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
                <NavLink
                  to="/nos-engagements"
                  className={(items) =>
                    items.isActive ? "items-activated" : "items"
                  }
                >
                  Nos engagements
                </NavLink>
                <NavLink
                  to="/faq"
                  className={(items) =>
                    items.isActive ? "items-activated" : "items"
                  }
                >
                  FAQ
                </NavLink>
                <NavLink
                  to="/partenariat"
                  className={(items) =>
                    items.isActive ? "items-activated" : "items"
                  }
                >
                  Partenariat
                </NavLink>
              </nav>
            </div>

            {isLoggedIn ? (
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
          </>
        )}
      </div>
    </>
  );
}
