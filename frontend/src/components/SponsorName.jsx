import API from "@services/api";
import React, { useState, useEffect /* , useContext */ } from "react";
// import { MainContext } from "../contexts/MainContext";

function SponsorName({ user, sponsorMessage }) {
  const [sponsorCode, setSponsorCode] = useState("");
  const [sponsor, setSponsor] = useState("");
  // const {sponsor, setSponsor} = useContext(MainContext);
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
    <span>
      {sponsor && sponsorMessage}
      {/* sponsor && localStorage.getItem("isAdmin") && <p><span>Parrain:</span>&nbsp;{sponsor}</p> */}
      {/* sponsor && !localStorage.getItem("isAdmin") && <p>Vous êtes parrainé par {sponsor}.</p> */}
    </span>
  );
}

export default SponsorName;
