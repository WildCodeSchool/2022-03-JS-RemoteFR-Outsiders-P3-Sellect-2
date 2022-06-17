import React from "react";
import logosellect from "../assets/img/logosellect.svg";
import "../assets/Footer.css";

export default function Wilders() {
  return (
    <div className="mentionslegales-div">
      <div className="div-img">
        <img src={logosellect} alt="developpeur" className="img-dev" />
        <img src={logosellect} alt="developpeur" className="img-dev" />
        <img src={logosellect} alt="developpeur" className="img-dev" />
        <img src={logosellect} alt="developpeur" className="img-dev" />
      </div>
    </div>
  );
}
