import React from "react";
import { SiTrustpilot } from "react-icons/si";
import "../assets/Trustpilot.css";
import "../assets/common.css";

export default function Trustpilot() {
  return (
    <div className="div-trustpilot">
      <p className="p-trustpilot">
        {" "}
        Laissez votre avis sur <SiTrustpilot size="25" color="#72b043" />
        <a
          href="https://fr.trustpilot.com/review/sellect.fr"
          target="blank"
          className="link-trustpilot"
        >
          Trustpilot
        </a>{" "}
      </p>
    </div>
  );
}
