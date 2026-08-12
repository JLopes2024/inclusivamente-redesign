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
      title: "Atividade Física e Adaptada",
      text: "Programas dedicados ao desenvolvimento de habilidades psicomotoras e praxias (coordenação, planejamento de movimentos e percepção espacial). Através de movimentos intencionais e direcionados, ativamos funções executivas (atenção, foco, concentração e memória de trabalho) para impulsionar aprendizagem e o desempenho acadêmico através da conexão entre corpo e mente, promovendo um desenvolvimento escolar integrativo"
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
              A InclusivaMente cria soluções estruturadas que acolhem e fortalecem crianças, jovens, adultos e idosos,
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