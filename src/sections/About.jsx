import { Brain, Users, Activity, Target, Eye, Heart } from "lucide-react";
import "./About.css";

export default function About() {
  const pillars = [
    {
      icon: <Brain size={32} />,
      title: "Educação",
      text: "Consultoria e formação docente centrada em metodologias ativas e adaptação de materiais para ambientes escolares e corporativos."
    },
    {
      icon: <Users size={32} />,
      title: "Social",
      text: "Projetos de cidadania, oficinas socioemocionais e trilhas de convivência para promover o protagonismo e a inclusão real."
    },
    {
      icon: <Activity size={32} />,
      title: "Saúde & Bem-estar",
      text: "Programas de psicomotricidade focados no desenvolvimento de atos voluntários, como visuoconstrução e praxia, além de estratégias para a consolidação de habilidades na memória não declarativa."
    }
  ];

  

  return (
    <section className="about" id="quem-somos">
      <div className="container">

        {/* CABEÇALHO E PILARES - Layout Assimétrico */}
        <div className="about-top-grid">
          <div className="about-text-content">
            <span className="section-tag">QUEM SOMOS</span>
            <h2 className="title">
              A inclusão real acontece no acolhimento. <br />
              <span style={{ color: "var(--secondary)" }}>Nós a aplicamos na prática.</span>
            </h2>
            <p className="subtitle">
              A InclusivaMente integra educação, saúde e desenvolvimento humano para criar 
              soluções estruturadas que acolhem e fortalecem crianças, jovens e adultos, 
              transformando os ambientes ao seu redor.
            </p>
          </div>

          <div className="about-pillars">
            {pillars.map((card, index) => (
              <div className="pillar-card" key={index}>
                <div className="pillar-icon">{card.icon}</div>
                <div className="pillar-info">
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