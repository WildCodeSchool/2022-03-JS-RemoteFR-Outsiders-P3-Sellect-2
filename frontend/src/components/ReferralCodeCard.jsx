import React, { useState } from "react";
import QRCode from "qrcode";

function ReferralCodeCard({ user }) {
  const [qrcode, setQrcode] = useState("");
  const [url, setUrl] = useState("");

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
        console.warn(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div>
      <div>
        <p>
          Bonjour &nbsp;{user.firstname}&nbsp;{user.lastname} Voici votre code
          de parrainage:&nbsp;{user.referralCode}
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="code parrainage"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div>
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
  );
}

export default ReferralCodeCard;
