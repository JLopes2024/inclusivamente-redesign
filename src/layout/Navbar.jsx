import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // Novo estado para controlar visibilidade
  const [isOpen, setIsOpen] = useState(false);
  
  const lastScrollY = useRef(0); // Guarda a última posição sem forçar re-render
  
  const navigate = useNavigate();
  const location = useLocation();

  // 1 & 4. Otimização de Performance no Scroll (requestAnimationFrame + passive)
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Lógica do Fundo (mantida do seu código original)
          setScroll(currentScrollY > 30);

          // Lógica de Esconder/Mostrar a Pílula
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            // Se rolou para baixo e já desceu mais de 100px, esconde
            setIsHidden(true);
          } else {
            // Se rolou para cima (ou está no topo), mostra
            setIsHidden(false);
          }

          // Atualiza a referência da última posição
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Trava de Scroll do Fundo (Menu Mobile)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Limpeza de segurança ao desmontar o componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Lógica para escutar a URL e rolar a página nativamente ao renderizar
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Pequeno atraso apenas para garantir que a DOM foi montada na troca de rota
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  // 1. Navegação Robusta baseada em Hash
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
    // Adicionamos a classe 'hidden' dinamicamente baseada na direção do scroll
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

        {/* 3. Acessibilidade Inclusiva (Botão semântico com tags ARIA) */}
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
          <button className="nav-link-item" onClick={() => handleNavClick("resultados")}><span>Resultados</span></button>
          
          <button className="nav-button" onClick={handleAgendarClick}>
            Agendar
          </button>
          
          <Link to="/login" className="nav-login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}