import React from "react";
import photoJoffrey from "../assets/img/photoJoffrey.png";
import "../assets/HomeBlock3.css";

function HomeGoals() {
  return (
    <div className="home-block3-container">
      <div className="home-block3-content">
        <div className="home-block3-content-header">
          <h1>NOS OBJECTIFS</h1>
          <p>
            <span>Sellect</span> souhaite devenir un acteur majeur pour le
            pouvoir d'achat !
          </p>
        </div>
        <div className="home-block3-content-body">
          <p>
            Aujourd’hui beaucoup de dépenses ne sont pas optimisées par manque
            de temps ou manque de connaissance.
          </p>
          <p>
            En effet de <span>nombreuses solutions</span> existent et les
            produits et services évoluent chaque jour.
          </p>
          <p>
            L’association souhaite faire maintenir à ses membres un pouvoir
            d’achat <span>le plus optimisé possible</span>, le tout en proposant
            une refonte globale des contrats.
          </p>
          <p>
            Je propose également des <span>outils et astuces</span> qui
            permettent de réduire ses dépenses au quotidien.
          </p>
          <p>Ci-dessous quelques liens.</p>
        </div>
      </div>
      <div className="home-block3-image-container">
        <img className="home-block3-image" src={photoJoffrey} alt="Joffrey" />
      </div>
    </div>
  );
}

export default HomeGoals;
