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
          <FaInstagram size="27" color="#fbad50" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaFacebook size="27" color="#3b5998" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaYoutube size="27" color="#B51942" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaLinkedin size="27" color="#0e76a8" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaTwitter size="27" color="#1DA1F2" />
        </a>
      </div>
      <p className="copyright-un">
        &copy;Copyright2022. Tous Droits Réservés.{" "}
        <NavLink to="/mentionslegales" className="link-other-pages">
          Mentions Légales
        </NavLink>
      </p>

      <p className="copyright-deux">
        Développé avec <FaHeart size="12" color="#B51942" /> par les{" "}
        <NavLink to="/wilders" className="link-other-pages">
          Wilders
        </NavLink>
      </p>
    </footer>
  );
}
