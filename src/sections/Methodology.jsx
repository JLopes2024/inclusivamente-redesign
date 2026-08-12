import { Activity, Settings, HeartHandshake, BookOpen, Sprout } from "lucide-react";
import SwipeIndicator from "../components/SwipeIndicator";
import "./methodology.css";

export default function Methodology() {
  const moverMethod = [
    { 
      letter: "M", 
      title: "Movimento Intencional", 
      icon: <Activity size={24} />,
      text: "Movimento direcionado para construir a base do corpo e desenvolver habilidades psicomotoras que ativam as funções executivas do cérebro, destravando o corpo e a mente para a aprendizagem
" 
    },
    { 
      letter: "O", 
      title: "Organização Corporal", 
      icon: <Settings size={24} />,
      text: "Regulação e organização do Sistema Nervoso Central através do equilíbrio e da consciência corporal, deixando o aluno pronto e estruturado para aprender

" 
    },
    { 
      letter: "V", 
      title: "Vínculo Afetivo", 
      icon: <HeartHandshake size={24} />,
      text: "Relações seguras, conexões socioemocionais e manejo comportamental que geram acolhimento e segurança emocional, desarmando resistências para potencializar o aprendizado.

" 
    },
    { 
      letter: "E", 
      title: "Educação e Aprendizagem", 
      icon: <BookOpen size={24} />,
      text: "Uso do corpo e da psicomotricidade como ferramentas para a aquisição de novas habilidades intelectuais, sociais e acadêmicas, transformando o movimento em um veículo direto para a aprendizagem

" 
    },
    { 
      letter: "R", 
      title: "Respeito ao Tempo", 
      icon: <Sprout size={24} />,
      text: "Respeito absoluto ao ritmo neurológico e biológico individual, garantindo que o progresso ocorra de forma personalizada, sustentável e focada na autonomia real do aluno." 
    }
  ];

  return (
    <section id="metodologia" className="methodology premium-dark">
      <div className="geo-ring ring-primary"></div>
      <div className="geo-ring ring-secondary"></div>

      <div className="container relative-z">
        <div className="methodology-header">
          <span className="section-tag dark-tag">NOSSA METODOLOGIA</span>
          <h2 className="title text-white">O Método Exclusivo MOVer<sup>®</sup></h2>
          <p className="methodology-subtitle">
            Um método que integra saúde, educação e desenvolvimento humano.
          </p>
          
          {/* Nova Setinha Animada para Mobile componentizada */}
          <SwipeIndicator />
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
