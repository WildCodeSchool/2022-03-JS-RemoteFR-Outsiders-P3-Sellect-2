import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import API from "../services/api";
import "@assets/ReferralCode.css";
import SponsorName from "./SponsorName";

function ReferralCode() {
  const userId = parseInt(localStorage.getItem("userId"), 10);
  const [users, setUsers] = useState(userId);
  const [qrcode, setQrcode] = useState(userId.ReferralCode);
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
    API.get(`/users/${users}`)
      .then((res) => {
        console.warn(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneUser();
  }, []);

  return (
    <div className="container-referralcode">
      <div>
        <h1>
          <span>Bonjour </span>
          {`${users.firstname} ${users.lastname}. `}
          <SponsorName user={userId} />
          <span>
            Envie de parrainer quelqu'un ? Voici votre code de parrainage:
          </span>
        </h1>
      </div>
      <div className="referral-flex">
        <div className="inputbutton-referralcode">
          <input
            type="text"
            placeholder="code parrainage"
            value={users.referralCode}
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
  );
}

export default ReferralCode;
