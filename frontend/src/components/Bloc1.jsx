import React from "react";
import "@assets/common.css";
import "@assets/Bloc1.css";
import bloc1 from "@assets/img/bloc1.jpg";
import { Link } from "react-router-dom";

export default function Bloc1() {
  return (
    <section className="bloc1_container">
      <div className="bloc1_left">
        <h1>GAGNEZ EN POUVOIR D’ACHAT !</h1>
        <h2>
          Identifiez et revalorisez vos dépenses à travers un Audit et un
          accompagnement humain.
        </h2>
        <p>
          <span>La seule dépense</span> qui fait baisser toutes les autres.
        </p>
        <div className="btn">
          {localStorage.getItem("loggedIn") ? (
            <Link to="/calendrier">
              <button
                type="button"
                className="audit"
                /* onClick={handleClick} */
              >
                Je réserve mon audit
              </button>
            </Link>
          ) : (
            <Link to="/connexion">
              <button
                type="button"
                className="audit"
                /* onClick={handleClick} */
              >
                Je réserve mon audit
              </button>
            </Link>
          )}
          <a href="#parrainage">
            <button
              type="button"
              className="parrainage"
              /* onClick={handleClick} */
            >
              Je deviens apporteur d'affaires
            </button>
          </a>
        </div>
      </div>
      <div className="bloc1_right">
        <img src={bloc1} alt="photo_contrat" />
      </div>
    </section>
  );
}
