import { useEffect, useState } from "react";
import Button from "../components/Button";
import "../styles/navbar.css"; // Importação modular

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAgendarClick = () => {
    window.open("https://www.supersaas.com.br/schedule/Jefferson_Lopes/Triagem_-_Inclusivamente", "_blank");
  };

  return (
    // A classe 'active' já disparará o fundo branco no seu CSS
    <header className={`navbar ${scroll ? "active" : ""}`}>
      <div className="container nav-content">
        
        <a href="#hero" className="logo">
          {/* A logo troca dinamicamente com base no estado 'scroll' */}
          <img 
            src={scroll ? "/logo.png" : "/logoblack.png"} 
            alt="InclusivaMente" 
            style={{ height: '70px', width: 'auto', transition: '0.3s ease' }} 
          />
        </a>
        
  <a href="#metodologia">Metodologia</a>
  <a href="#servicos">Soluções</a>
  <a href="#resultados">Resultados</a>

        <Button onClick={handleAgendarClick}>
          Agendar apresentação
        </Button>
      </div>
    </header>
  );
}