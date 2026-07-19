import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Usando o react-icons que já está no projeto!
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        
        {/* Coluna 1: Marca e Sobre */}
        <div className="footer-brand">
          <img src="/logo.png" alt="InclusivaMente" className="footer-logo" />
          <p>
            Desenvolvendo potencial através do movimento. Educação, ciência e inclusão caminhando juntas para transformar o ambiente escolar.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/inclusivamente_mover?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram da Inclusiva Mente">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="LinkedIn da Inclusiva Mente">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <nav>
            <a href="#metodologia">Nossa Metodologia</a>
            <a href="#servicos">Soluções Educacionais</a>
            <Link to="/login">Área do Profissional</Link>
          </nav>
        </div>

        {/* Coluna 3: Contatos */}
        <div className="footer-contact">
          <h3>Fale Conosco</h3>
          <div className="contact-item">
            <Mail size={20} />
            <span>contato@inclusivamente.com.br</span>
          </div>
          <div className="contact-item">
            <MapPin size={20} />
            <span>Atendimento</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Inclusiva Mente. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}