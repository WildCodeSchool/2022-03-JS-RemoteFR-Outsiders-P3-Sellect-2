import React from "react";
import "@assets/common.css";
import "@assets/Bloc1.css";
import bloc1 from "@assets/img/bloc1.jpg";

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
          <span>La seule dépense</span> qui fait baisser toutes les autres
        </p>
        <div className="btn">
          <button type="button">Je réserve mon audit</button>
          <button type="button">Je deviens apporteur d'affaires</button>
        </div>
      </div>
      <div className="bloc1_right">
        <img src={bloc1} alt="photo_contrat" />
      </div>
    </section>
  );
}
