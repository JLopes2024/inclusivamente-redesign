import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Hero() {
  const handleAgendarClick = () => {
    window.open("https://www.supersaas.com.br/schedule/Jefferson_Lopes/Triagem_-_Inclusivamente", "_blank");
  };

  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="tag">Transformando a educação brasileira</span>
          <h1>
            Escolas onde a <br />
            inclusão acontece <br />
            <span style={{ color: 'var(--secondary)' }}>de verdade.</span>
          </h1>
          <p>
            Unimos ciência, movimento e formação continuada para criar ambientes escolares 
            preparados para desenvolver e potencializar cada estudante.
          </p>
          <div className="hero-buttons">
            <Button onClick={handleAgendarClick}>Agendar Inicial</Button>
            <Button variant="secondary" id="#methodology">
              Conhecer metodologia
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Dashboard visual mantido para autoridade */}
          <div className="dashboard">
            <div className="dash-card big">
              <h3>Progresso institucional</h3>
              <div className="bar" />
            </div>
            <div className="dash-grid">
              <div className="dash-card"><h4>Alunos</h4><span>+5.000</span></div>
              <div className="dash-card"><h4>Professores</h4><span>+800</span></div>
              <div className="dash-card"><h4>Escolas</h4><span>35</span></div>
              <div className="dash-card highlight"><h4>Satisfação</h4><span>98%</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}