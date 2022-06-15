import React from "react";
import "@assets/common.css";
import "@assets/Calendar.css";
import audit from "@assets/img/audit.svg";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Calendar() {
  return (
    <div>
      <Navbar />
      <section className="calendar_container">
        <div className="title">
          <h1>PRENEZ RENDEZ-VOUS POUR VOTRE AUDIT !</h1>
        </div>
        <div className="instructions_container">
          <div className="instruction1">
            <h1>1 - Contenu de l'audit</h1>
            <p>
              ► Réalisez votre <span>audit personnalisé,</span>
            </p>
            <p>
              ► Etablissement{" "}
              <span>
                d'un cahier des charges précis sur vos attentes et besoins
              </span>{" "}
              sur tous types de contrats,
            </p>
            <p>
              ► Création d'un <span>tableau de bord numérique</span>{" "}
              d'optimisation et de suivi des dépenses,
            </p>
            <p>
              ► Présentation des <span>contrats proposés</span>,
            </p>
            <p>
              ► Mise en avant des gains potentiels par le remplacement des
              contrats.
            </p>
          </div>

          <div className="instruction2">
            <h1>2 - Délais</h1>
            <p>
              ► Le délai de réalisation de l'Audit{" "}
              <span>dépend de la complexité et la situation</span> de chacun.
            </p>
          </div>

          <div className="instruction3">
            <h1>3 - Aller plus loin</h1>
            <p>► Vous restez maître de la proposition qui vous est faite</p>
            <p>
              ► Si vous souhaitez donner suite en partie ou en totalité,
              l'association propose{" "}
              <span>
                via son partenaire la prise en charge des démarches
                administratives
              </span>{" "}
              pour que vous retrouviez votre réel pouvoir d'achat.
            </p>
          </div>

          <div className="illustration">
            <img src={audit} alt="photo_audit" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
