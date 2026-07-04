import { methodologyData } from "../data/methodologyData";
import { Brain, Lightbulb, Sprout, Users, Star } from "lucide-react";
import "./methodology.css";

// Mapeamento de nomes de ícones para componentes
const iconMap = {
  Brain: <Brain size={32} />,
  Lightbulb: <Lightbulb size={32} />,
  Sprout: <Sprout size={32} />,
  Users: <Users size={32} />,
  Star: <Star size={32} />
};

export default function Methodology() {
  return (
    <section id="metodologia" className="methodology">
      <div className="container">
        <h2 className="title">Metodologia</h2>
        <p className="subtitle">
          O movimento corporal é um poderoso instrumento pedagógico
        </p>
        <div className="method-grid">
          {methodologyData.map((item) => (
            <div className="method-card" key={item.id}>
              <div className="method-icon">{iconMap[item.iconName]}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}