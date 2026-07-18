import { CheckCircle2 } from "lucide-react";
import './Benefits.css';

export default function Benefits() {
  const items = [
    "Maior engajamento dos estudantes",
    "Redução de dificuldades de aprendizagem",
    "Apoio estruturado aos professores",
    "Integração entre família e escola",
    "Ambiente escolar mais inclusivo",
    "Melhoria no desenvolvimento cognitivo"
  ];

  return (
    <section className="benefits">
      <div className="container">

        <span className="section-tag">RESULTADOS</span>

        <h2 className="title">
          O impacto real da nossa metodologia
        </h2>

        <p className="subtitle">
          Mais do que soluções, entregamos mudanças perceptíveis no ambiente escolar.
        </p>

        <div className="benefits-grid">

          {items.map((item, i) => (
            <div className="benefit-item" key={i}>
              <CheckCircle2 />
              <span>{item}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}