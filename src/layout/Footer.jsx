import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-micro">
      <div className="container footer-micro-content">
        
        {/* Direitos Autorais (Esquerda) */}
        <div className="footer-copy">
          &copy; {currentYear} InclusivaMente.
        </div>
        
        {/* Redes Sociais (Centro) */}
        <div className="footer-social-micro">
          <a href="https://www.instagram.com/inclusivamente_mover?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
        <a href="mailto:faleconosco@inclusivamente.net" aria-label="E-mail">
  <FaEnvelope size={20} />
</a>
        </div>

        {/* Links Legais (Direita) */}
        <div className="footer-legal-micro">
          <Link to="/privacidade">Privacidade</Link>
          <Link to="/termos">Termos</Link>
        </div>

      </div>
    </footer>
  );
}