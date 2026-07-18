import { TrendingUp, ShieldCheck, Lightbulb } from "lucide-react";
import "./Testimonials.css";

export default function Testimonials() {
  const impacts = [
    {
      icon: <TrendingUp size={32} />,
      title: "Desenvolvimento Integral",
      text: "Fortalecimento das habilidades motoras, cognitivas e socioemocionais, focando na aprendizagem significativa e no protagonismo."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Acessibilidade Estruturada",
      text: "Implementação de protocolos de inclusão, adaptação curricular e planos de desenvolvimento para garantir que ninguém fique para trás."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Ambientes Transformados",
      text: "Escolas e empresas capacitadas para acolher a neurodivergência e as deficiências com segurança, equidade e inovação."
    }
  ];

  return (
    <section id="resultados" className="testimonials">
      <div className="container">
        <span className="section-tag">O NOSSO IMPACTO</span>
        <h2 className="title">Resultados que transformam a realidade escolar e corporativa</h2>
        
        <div className="impact-grid">
          {impacts.map((item, index) => (
            <div className="impact-card" key={index}>
              <div className="impact-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}