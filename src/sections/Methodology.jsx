import { Activity, Settings, HeartHandshake, BookOpen, Sprout } from "lucide-react";
import "./methodology.css";

export default function Methodology() {
  const moverMethod = [
    { 
      letter: "M", 
      title: "Movimento", 
      icon: <Activity size={24} />,
      text: "Desenvolvimento motor e psicomotricidade, focando em atos voluntários, visuoconstrução e praxia para destravar o corpo e a mente." 
    },
    { 
      letter: "O", 
      title: "Organização", 
      icon: <Settings size={24} />,
      text: "Estruturação cognitiva e ambiental, essencial para a regulação e para a consolidação de habilidades na memória não declarativa." 
    },
    { 
      letter: "V", 
      title: "Vínculo", 
      icon: <HeartHandshake size={24} />,
      text: "Construção de relações seguras e conexões socioemocionais que são a base de qualquer processo de aprendizagem." 
    },
    { 
      letter: "E", 
      title: "Educação", 
      icon: <BookOpen size={24} />,
      text: "Aplicação de metodologias ativas e adaptação curricular com base neurocientífica para uma inclusão real." 
    },
    { 
      letter: "R", 
      title: "Respeito", 
      icon: <Sprout size={24} />,
      text: "Acolhimento profundo da neurodiversidade, entendendo e validando a singularidade de cada indivíduo." 
    }
  ];

  return (
    <section id="metodologia" className="methodology premium-dark">
      <div className="geo-ring ring-primary"></div>
      <div className="geo-ring ring-secondary"></div>

      <div className="container relative-z">
        <div className="methodology-header">
          <span className="section-tag dark-tag">NOSSA METODOLOGIA</span>
          <h2 className="title text-white">O Método Exclusivo MOVer<span>®</span>®</h2> <h5>®</h5>
          <p className="methodology-subtitle">
            Um método que integra saúde, educação e desenvolvimento humano.
          </p>
        </div>
      
        <div className="mover-grid">
          {moverMethod.map((item, index) => (
            <div className="mover-card" key={index}>
              <div className="mover-letter-bg">{item.letter}</div>
              
              <div className="mover-content">
                <div className="mover-icon-glass">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
