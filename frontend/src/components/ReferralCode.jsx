import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import API from "../services/api";
import "@assets/ReferralCode.css";
import SponsorName from "./SponsorName";

function ReferralCode() {
  const userId = parseInt(sessionStorage.getItem("userId"), 10);
  const [user, setUser] = useState(userId);
  const [qrcode, setQrcode] = useState(user.referralCode);
  const [url] = useState([]);

  const generateQR = () => {
    QRCode.toDataURL(
      url,
      {
        width: 200,
        margin: 3,
        color: {
          dark: "#335383ff",
        },
      },
      // eslint-disable-next-line no-shadow, consistent-return
      (err, url) => {
        if (err) return console.warn(err);
        setQrcode(url);
      }
    );
  };

  const getOneUser = () => {
    API.get(`/users/${user}`)
      .then((res) => {
        console.warn(res.data);
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneUser();
  }, []);

  return (
    <div>
      <div className="sponsor_instructions_container">
        <h2>Comment fonctionne le parrainage ?</h2>
        <div className="sponsor_instructions_content">
          <ol>
            <li>Vous avez un code unique !</li>
            <p>
              On l'a pensé pour vous ! Votre code se compose des 2 premières
              lettres de votre prénom, des 2 premières lettres de votre nom de
              famille, puis des 4 derniers chiffres de votre numéro de téléphone
              et enfin d'une série de 4 nombres générés aléatoirement.
            </p>
            <li>Partagez votre code parrain</li>
            <p>Via SMS, What's App, email, QR Code... avec tous vos proches.</p>
            <li>Votre filleul débute sa souscription</li>
            <p>
              En saissisant votre code parrainage dans le parcours de
              souscription depuis le site. Vous serez alors tous les deux soumis
              aux conditions de l'offre commercial en cours à ce moment-là.
            </p>
            <li>
              Vos récompenses sont automatiquement versées sur vos comptes
            </li>
            <p>
              Une fois que l'abonnement de votre filleul est validé par nos
              services (sous respect des conditions de l'offre). Vous recevrez
              alors un email de confirmation.
            </p>
            <li>Profitez !</li>
            <p>
              ...et continuez car plus vous parrainez, plus vous êtes
              récompensés.
            </p>
          </ol>
        </div>
      </div>
      <div className="container-referralcode">
        <div>
          <h1>
            Bonjour
            <span>
              {" "}
              {user.firstname} {user.lastname}
            </span>
            .
            <SponsorName user={userId} />
            Envie de parrainer quelqu'un ?{" "}
            <span>Voici votre code de parrainage:</span>
          </h1>
        </div>
        <div className="referral-flex">
          <div className="inputbutton-referralcode">
            <input
              type="text"
              placeholder="code parrainage"
              value={user.referralCode}
              className="input-referralcode"
            />

            <button
              type="button"
              className="btn-referralcode"
              onClick={generateQR}
            >
              QRCode
            </button>
          </div>

          <div>
            {qrcode && (
              <div className="qrcode">
                <img src={qrcode} alt="" />
                <a href={qrcode} download="qrcode.png">
                  Telecharger
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferralCode;
