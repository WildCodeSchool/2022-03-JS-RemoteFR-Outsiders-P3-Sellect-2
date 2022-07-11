import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Page404.css";

function Page404() {
  return (
    <div className="page-404">
      <div className="page-404-text">
        <h1>Erreur 404</h1>
        <h2>Page non trouvée</h2>
        <p>
          La page que vous tentez d'afficher n'existe pas ou une autre erreur
          s'est produite.
        </p>
        <NavLink id="page-404-link" to="/">
          <p>Retour à la page d'accueil</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Page404;
