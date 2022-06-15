import "../assets/bloc2.css";
import dialogue from "@assets/img/dialogue.svg";
import proposition from "@assets/img/proposition.svg";
import suivi from "@assets/img/suivi.svg";

export default function Bloc2() {
  return (
    <section className="bloc2">
      <div className="auditcontainer">
        <div className="auditlogo">
          <img src={dialogue} alt="icone_audit" />
        </div>
        <h1>RÉSERVEZ VOTRE AUDIT</h1>
        <p>
          ►Nous collectons les informations sur les différents contrats que{" "}
          <span>vous souhaitez améliorer,</span>
        </p>
        <p>
          ►Nous établissions <span>ensemble</span> un cahier des charges dans
          lequel <span>vous définissez les limites</span> de chaque futur
          contrat,
        </p>
        <p>
          ►Prise de rendez-vous en <span>présentiel</span> ou à distance par{" "}
          <span>visioconférence</span>.
        </p>
      </div>
      <div className="plateformcontainer">
        <div className="auditlogo">
          <img src={suivi} alt="icone_plateform" />
        </div>
        <h1>PLATEFORME DE SUIVIS</h1>
        <p>
          ►Création d'un <span>compte utilisateur</span>,
        </p>
        <p>
          ►Lancement de l'analyse et <span>étude des résultats</span> obtenus,
        </p>
        <p>
          ►Création d'un <span>tableau de bord</span> de suivi via notre
          partenaire.
        </p>
      </div>
      <div className="proposalcontainer">
        <div className="auditlogo">
          <img src={proposition} alt="proposal" />
        </div>
        <h1>PROPOSITION CLIENT</h1>
        <p>►Transmission de l'étude</p>
        <p>
          ►Echange sur les <span>spécificitées</span> de l'étude
        </p>
        <p>
          <span>
            Il n'appartient qu'à vous de reprendre en main votre pouvoir d'achat
            !
          </span>
        </p>
      </div>
    </section>
  );
}
