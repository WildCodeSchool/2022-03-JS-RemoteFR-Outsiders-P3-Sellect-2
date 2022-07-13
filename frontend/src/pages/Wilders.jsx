import React from "react";
import { Link } from "react-router-dom";
import christophesellect from "../assets/img/christophesellect.jpg";
import audrensellect from "../assets/img/audrensellect.jpg";
import logosellect from "../assets/img/logosellect.svg";
import gloriasellect from "../assets/img/gloriasellect.jpg";
import sellect2 from "../assets/img/sellect2.svg";
import logowild from "../assets/img/logowild.png";
import "../assets/Footer.css";

export default function Wilders() {
  return (
    <div className="div-wilders">
      <div className="wilders">
        <Link to="/">
          <img src={sellect2} className="login-logo" alt="sellect-logo" />
        </Link>
        <h2>
          {" "}
          <span>
            {" "}
            <img src={logowild} alt="wild logo" className="img-dev" />{" "}
          </span>{" "}
          <br />
          Les développeurs de SELLECT{" "}
        </h2>
        <p> Nous avons voulu un site web utile et pratique pour Sellect.</p>
      </div>

      <div className="div-img-wilders">
        <img src={christophesellect} alt="developpeur" className="img-dev" />
        <img src={audrensellect} alt="developpeur" className="img-dev" />
        <img src={logosellect} alt="developpeur" className="img-dev" />
        <img src={gloriasellect} alt="developpeur" className="img-dev" />
      </div>
    </div>
  );
}
