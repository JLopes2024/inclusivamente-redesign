import { motion } from "framer-motion";
import { Play } from "lucide-react";
import logoInclusiva from "../assets/logo-inclusivamente.png";
import "./Hero.css";

export default function Hero() {
  const handleAgendarClick = () => {
    window.open("https://www.supersaas.com.br/schedule/Jefferson_Lopes/Triagem_-_Inclusivamente", "_blank");
  };

  return (
    <section className="hero-dark">
      <div className="container hero-dark-content">
        
        {/* LADO ESQUERDO: Textos e CTA */}
        <motion.div
          className="hero-dark-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-dark-tag">Inclusiva<b>Mente</b></span>
          <h1>
            Assessoria e Consultoria<br/>
            <span>Pedagógica</span>
          </h1>

          <p>
            A InclusivaMente é uma assessoria e consultoria especializada em soluções
            pedagógicas inclusivas, sociais e de bem-estar, conectado à educação, saúde e
            desenvolvimento humano de forma integrada.
          </p>
          <button className="btn-hero-action" onClick={handleAgendarClick}>
            Peça uma apresentação
          </button>
        </motion.div>

        {/* LADO DIREITO: Mídia (Vídeo/Imagem) */}
        <motion.div
          className="hero-dark-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="video-wrapper">
            <img 
              src={logoInclusiva} 
              alt="Inclusiva Mente Apresentação" 
              className="video-cover" 
            />
            <button className="play-btn" aria-label="Assistir vídeo">
              <Play size={32} fill="currentColor" />
            </button>
          </div>
        </motion.div>

      </div>

      {/* OS DESENHOS DO FUNDO */}
      <div className="bg-shape shape-top"></div>
      <div className="bg-shape shape-bottom"></div>
    </section>
  );
}