import React from "react";
import "@assets/common.css";
import "@assets/Sponsorship.css";
import parrainage from "@assets/img/parrainage.svg";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Sponsorship() {
  return (
    <div>
      <Navbar />
      <section className="sponsor_container">
        <div className="title">
          <h1>DEVENEZ PARRAIN SELLECT !</h1>
        </div>
        <div className="instructions_container">
          <div className="instruction1">
            <h1>1 - Obtenez votre code</h1>
            <p>
              Réalisez votre <span>audit personnalisé</span>
            </p>
            <p>
              Si vous souhaitez{" "}
              <span> partager la philosophie de l’association</span> et
              améliorer le pouvoir d’achat d'autrui
            </p>
            <p>
              <span>Un code</span> vous sera remis à la remise de votre Audit.
            </p>
          </div>

          <div className="instruction2">
            <h1>2 - Transmettez votre code</h1>
            <p>
              Nous offrons <span>10 euros</span> par filleul
            </p>
          </div>

          <div className="instruction3">
            <h1>3 - Versement</h1>
            <p>
              Ce montant sera <span>directement versé sur votre compte</span>{" "}
              dès la fin de réalisation de l'audit de votre filleul.
            </p>
          </div>

          <div className="illustration">
            <img src={parrainage} alt="photo_parrainage" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
