import { NavLink } from "react-router-dom";
import "../assets/Footer.css";
import {
  FaHeart,
  /* FaYoutube,
  FaInstagram, */
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="reseauxsociaux">
        {/* <a target="_blank" href="https://www.wildcodeschool.com/fr-FR">
          <FaInstagram size="27" color="white" />
  </a> */}
        <a
          target="_blank"
          href="https://www.facebook.com/people/Sellect-Sellect/100082178312479/"
          rel="noreferrer"
        >
          <FaFacebook size="27" color="white" />
        </a>
        {/* <a target="_blank" href="https://www.wildcodeschool.com/fr-FR">
          <FaYoutube size="27" color="white" />
</a> */}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sellect-undefined-122184241/"
          rel="noreferrer"
        >
          <FaLinkedin size="27" color="white" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/JoffreyMarchal"
          rel="noreferrer"
        >
          <FaTwitter size="27" color="white" />
        </a>
      </div>
      <div className="copyright-un">
        <p>&copy;Copyright 2022 - Tous Droits Réservés </p>
        <p>
          <NavLink to="/mentions-legales" className="colorfooter">
            - Mentions Légales
          </NavLink>
        </p>
      </div>

      <div className="copyright-deux">
        <p>
          {" "}
          Développé avec <FaHeart size="14" color="#B51942" /> par les{" "}
        </p>
        <NavLink to="/wilders" className="colorfooter">
          Wilders
        </NavLink>
      </div>
    </footer>
  );
}
