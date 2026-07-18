import { GraduationCap, Presentation, BookOpen } from "lucide-react";
import "./Methodology.css";

export default function Methodology() {
  const methods = [
    { icon: <GraduationCap size={34} />, title: "Formação e Capacitação", text: "Trilhas de formação com metodologias ativas, online e presenciais." },
    { icon: <Presentation size={34} />, title: "Consultoria Pedagógica", text: "Diagnóstico, adaptação curricular e plano de desenvolvimento inclusivo." },
    { icon: <BookOpen size={34} />, title: "Produtos Educacionais", text: "Materiais, apostilas e jogos desenvolvidos com base neurocientífica." }
  ];

  return (
    <section id="metodologia" className="methodology premium-dark">
      {/* Anéis Geométricos (Mesmo design dos Diferenciais) */}
      <div className="geo-ring ring-primary"></div>
      <div className="geo-ring ring-secondary"></div>

      <div className="container relative-z">
        <span className="section-tag dark-tag">METODOLOGIA</span>
        <h2 className="title text-white">Como transformamos inclusão em prática</h2>
      

        <div className="methodology-grid">
          {methods.map((item, index) => (
            <div className="methodology-card" key={index}>
              <div className="methodology-icon-glass">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}