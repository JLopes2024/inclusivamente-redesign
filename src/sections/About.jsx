import { Brain, Users, Activity } from "lucide-react";
import "./About.css";

export default function About() {
  const pillars = [
    {
      icon: <Brain size={28} strokeWidth={1.5} />,
      title: "Educação",
      text: "Consultoria e formação docente centrada em metodologias ativas e adaptação de materiais para ambientes escolares e corporativos."
    },
    {
      icon: <Users size={28} strokeWidth={1.5} />,
      title: "Social",
      text: "Projetos de cidadania, oficinas socioemocionais e trilhas de convivência para promover o protagonismo e a inclusão real."
    },
    {
      icon: <Activity size={28} strokeWidth={1.5} />,
      title: "Saúde & Bem-estar",
      text: "Programas de psicomotricidade focados no desenvolvimento de atos voluntários, como visuoconstrução e praxia, além de estratégias para a consolidação de habilidades na memória não declarativa."
    }
  ];

  return (
    <section className="about-premium" id="quem-somos">
      <div className="container">
        <div className="about-grid-premium">
          
          {/* LADO ESQUERDO: Título Fixo (Sticky) */}
          <div className="about-text-sticky">
            <span className="section-tag">QUEM SOMOS</span>
            <h2 className="title">A integração entre neurociência, educação e desenvolvimento humano.</h2>
            <p className="subtitle">
              A InclusivaMente cria soluções estruturadas que acolhem e fortalecem crianças, jovens e adultos, 
              transformando os ambientes ao seu redor com embasamento técnico rigoroso.
            </p>
          </div>

          {/* LADO DIREITO: Pilares */}
          <div className="about-pillars-list">
            {pillars.map((card, index) => (
              <div className="pillar-item-clean" key={index}>
                <div className="pillar-icon-clean">{card.icon}</div>
                <div className="pillar-info-clean">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}