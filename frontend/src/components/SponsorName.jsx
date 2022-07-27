import API from "@services/api";
import React, { useState, useEffect } from "react";

function SponsorName({ user, admin }) {
  const [sponsorCode, setSponsorCode] = useState("");
  const [sponsor, setSponsor] = useState("");
  const [sponsorCodeReady, setSponsorCodeReady] = useState(false);

  useEffect(() => {
    API.get(`/users/${user}`)
      .then((res) => {
        setSponsorCode(res.data.sponsorCode);
        setSponsorCodeReady(true);
      })
      .catch((err) => console.error(err));
  }, []);

  const getSponsorFromSponsorCode = () => {
    API.get(`/users/sponsors/${sponsorCode}`)
      .then((res) => {
        setSponsor(`${res.data.firstname} ${res.data.lastname}`);
      })
      .catch((err) => console.error(err));
  };

  if (sponsorCodeReady) {
    getSponsorFromSponsorCode();
  }

  return (
    <div>
      {sponsor && admin && (
        <p>
          <span>Parrain:</span> <span className="user-sponsor">{sponsor}</span>
        </p>
      )}
      {sponsor && !admin && (
        <p>
          Vous êtes parrainé(e) par{" "}
          <span className="user-sponsor">{sponsor}</span>.
        </p>
      )}
    </div>
  );
}

export default SponsorName;
