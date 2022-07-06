import { NavLink } from "react-router-dom";
import "../assets/Footer.css";
import {
  FaHeart,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="reseauxsociaux">
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaInstagram size="27" color="white" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaFacebook size="27" color="white" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaYoutube size="27" color="white" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaLinkedin size="27" color="white" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaTwitter size="27" color="white" />
        </a>
      </div>
      <p className="copyright-un">
        &copy;Copyright 2022 - Tous Droits Réservés{" "}
        <NavLink to="/mentions-legales" className="colorfooter">
          <span>- Mentions Légales</span>
        </NavLink>
      </p>
      <p className="copyright-deux">
        Développé avec <FaHeart size="12" color="#B51942" /> par les{" "}
        <NavLink to="/wilders" className="colorfooter">
          Wilders
        </NavLink>
      </p>
    </footer>
  );
}
