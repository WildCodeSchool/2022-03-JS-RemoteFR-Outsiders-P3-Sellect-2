import React from "react";
// import QRCode from "qrcode";

function ReferralCodeCard() {
  return <div> have to delete</div>;
  /** {
   
const userId = parseInt(localStorage.getItem("userId"), 10);
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

  return (
    <div>
      <div>
        <p>
          Bonjour {`${user.firstname} ${user.lastname}`} Voici votre code de
          parrainage:
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="code parrainage"
          value={user.referralCode}
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
  ); */
}

export default ReferralCodeCard;
