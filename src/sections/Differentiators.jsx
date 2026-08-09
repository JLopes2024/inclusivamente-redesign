import { Zap, Target, Users, BookOpenCheck } from "lucide-react";
import SwipeIndicator from "../components/SwipeIndicator";
import "./Differentiators.css";

export default function Differentiators() {
  const diffs = [
    {
      icon: <Target size={34} />,
      title: "Expertise Técnica",
      text: "Foco profundo em PCDs e neurodivergência com base científica sólida."
    },
    {
      icon: <Zap size={34} />,
      title: "Metodologia Híbrida",
      text: "Unimos metodologias ativas, gamificação e neuroaprendizagem em um só lugar."
    },
    {
      icon: <BookOpenCheck size={34} />,
      title: "Impacto Replicável",
      text: "Programas estruturados com formação de multiplicadores para resultados reais."
    },
    {
      icon: <Users size={34} />,
      title: "Equipe Multidisciplinar",
      text: "Visão integrada conectando educação, saúde e desenvolvimento humano."
    }
  ];

  return (
    <section className="differentiators premium-dark">
      {/* Anéis Geométricos Vazados */}
      <div className="geo-ring ring-primary"></div>
      <div className="geo-ring ring-secondary"></div>

      <div className="container relative-z">
        <div className="diff-header">
          <span className="section-tag dark-tag">DIFERENCIAIS</span>
          <h2 className="title text-white">Por que escolher a InclusivaMente?</h2>
          
          {/* Nova Setinha Animada para Mobile componentizada */}
          <SwipeIndicator />
        </div>
        
        <div className="diff-grid">
          {diffs.map((item, index) => (
            <div className="diff-glass-card" key={index}>
              <div className="diff-icon-glass">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}