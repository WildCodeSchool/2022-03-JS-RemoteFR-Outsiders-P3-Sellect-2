import React from "react";
import { Link } from "react-router-dom";
import Christophe from "../assets/img/Christophe.jpg";
import Audren from "../assets/img/Audren.jpg";
// import logosellect from "../assets/img/logosellect.svg";
import Gloria from "../assets/img/Gloria.jpg";
import sellect2 from "../assets/img/sellect2.svg";
import logowild from "../assets/img/logowild.png";
import "../assets/Wilders.css";

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
        <div className="wilder-un">
          <img src={Christophe} alt="Christophe" className="img-dev" />
          <p> Christophe Boinet</p>
        </div>
        <div className="wilder-deux">
          <img src={Audren} alt="Audren" className="img-dev" />
          <p> Audren Floch</p>
        </div>
        <div className="wilder-trois">
          <img src={Gloria} alt="Gloria" className="img-dev" />
          <p> Gloria Besamba</p>
        </div>
      </div>
    </div>
  );
}
