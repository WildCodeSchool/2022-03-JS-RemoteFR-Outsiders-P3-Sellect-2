import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import API from "../services/api";
import "@assets/ReferralCode.css";

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
    <div>
      <div>
        <p>
          Bonjour {`${users.firstname} ${users.lastname}`} Voici votre code de
          parrainage:
        </p>
      </div>
      <div className="div-referralcode">
        <input
          type="text"
          placeholder="code parrainage"
          value={users.referralCode}
        />
        <div className="btn-referralcode">
          <button type="button" onClick={generateQR}>
            Generer QRCode
          </button>
          {qrcode && (
            <>
              <img src={qrcode} alt="" />
              <a href={qrcode} download="qrcode.png" style={{ color: "black" }}>
                Telecharger
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReferralCode;
