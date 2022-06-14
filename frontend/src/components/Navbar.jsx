import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import sellect2 from "../assets/img/sellect2.svg";
import toggle from "../assets/img/toggle.svg";
import "../assets/Navbar.css";
import "../assets/common.css";

export default function Navbar() {
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

  /* function handleClick(e) {
    e.preventDefault();
    console.warn("Le lien a été cliqué.");
  } */

  return (
    <>
      <div className="div-nav">
        <div className="div-sellectlogo">
          <img src={sellect2} alt="sellectlogo" className="img-sellectlogo" />
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
                <Link to="/" className="items">
                  Accueil
                </Link>
                <Link to="/nosengagements" className="items">
                  Nos engagements
                </Link>
                <Link to="/faq" className="items">
                  FAQ
                </Link>
                <Link to="/partenariat" className="items">
                  Partenariat
                </Link>
              </nav>
            </div>
            <div className="btn-div">
              <Link to="/inscription" className="items">
                <button
                  className="button-member"
                  type="button"
                  /* onClick={handleClick} */
                >
                  Devenir membre
                </button>
              </Link>
              <Link to="/connexion" className="items">
                <button
                  className="button-connect"
                  type="button"
                  /* onClick={handleClick} */
                >
                  Se connecter
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
