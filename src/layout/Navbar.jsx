import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const lastScrollY = useRef(0);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setScroll(currentScrollY > 30);

          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsHidden(true);
          } else {
            setIsHidden(false);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${id}`);
      }
    }
  };

  const handleAgendarClick = () => {
    setIsOpen(false);
    window.open("https://www.supersaas.com.br/schedule/Jefferson_Lopes/Triagem_-_Inclusivamente", "_blank");
  };

  return (
    <header className={`navbar ${scroll ? "active" : ""} ${isHidden ? "hidden" : ""}`}>
      <div className="container nav-content">
        <Link 
          to="/" 
          onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="logo"
          aria-label="Ir para a página inicial"
        >
          <img src="/logo.png" alt="InclusivaMente" />
        </Link>

        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          style={{ background: 'none', border: 'none' }} 
        >
          {isOpen ? <AiOutlineClose size={28} /> : <GiHamburgerMenu size={28} />}
        </button>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <button className="nav-link-item" onClick={() => handleNavClick("metodologia")}><span>Metodologia</span></button>
          <button className="nav-link-item" onClick={() => handleNavClick("servicos")}><span>Soluções</span></button>
          <button className="nav-link-item" onClick={() => handleNavClick("diferentiators")}><span>Diferenciais</span></button>
          
          {/* Agendar agora usa a classe padrão de link para se manter uniforme */}
          <button className="nav-link-item" onClick={handleAgendarClick}>
            <span>Agendar</span>
          </button>
          
          <Link to="/login" className="nav-login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}