import { CheckCircle2 } from "lucide-react";
import './Resultados.css';

export default function Resultados() {
  const items = [
    "Maior engajamento dos estudantes",
    "Redução de dificuldades de aprendizagem",
    "Apoio estruturado aos professores",
    "Integração entre família e escola",
    "Ambiente escolar mais inclusivo",
    "Melhoria no desenvolvimento cognitivo"
  ];

  return (
    <section className="resultados">
      <div className="container">

        <span className="section-tag">RESULTADOS</span>

        <h2 className="title">
          O impacto real da nossa metodologia
        </h2>

        <div className="resultados-grid">

          {items.map((item, i) => (
            <div className="resultados-item" key={i}>
              <CheckCircle2 />
              <span>{item}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}