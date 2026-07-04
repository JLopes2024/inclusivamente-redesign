import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAgendarClick = () => {
    setIsOpen(false);
    window.open("https://www.supersaas.com.br/schedule/Jefferson_Lopes/Triagem_-_Inclusivamente", "_blank");
  };

  return (
    <header className={`navbar ${scroll ? "active" : ""}`}>
      <div className="container nav-content">
        <Link to="/" onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="logo">
          <img src="/logoblack.png" alt="InclusivaMente" />
        </Link>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>

     <nav className={`nav-links ${isOpen ? "open" : ""}`}>
  <button onClick={() => handleNavClick("metodologia")}><span>Metodologia</span></button>
  <button onClick={() => handleNavClick("servicos")}><span>Soluções</span></button>
  <button onClick={() => handleNavClick("resultados")}><span>Resultados</span></button>
  
 
  
  <button onClick={handleAgendarClick}>
    Agendar
  </button>
   <Link to="/login" onClick={() => setIsOpen(false)} >
    Login
  </Link>
</nav>
      </div>
    </header>
  );
}