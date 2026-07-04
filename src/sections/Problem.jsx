import { AlertTriangle, BookOpen, Users } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <AlertTriangle size={40} />,
      title: "Inclusão ainda depende do esforço individual",
      text: "Muitos professores enfrentam o desafio da inclusão sem uma metodologia estruturada ou apoio contínuo."
    },
    {
      icon: <BookOpen size={40} />,
      title: "Capacitações pontuais geram pouco impacto",
      text: "Treinamentos isolados dificilmente mudam a rotina escolar quando não há acompanhamento."
    },
    {
      icon: <Users size={40} />,
      title: "Família, escola e profissionais atuam separados",
      text: "A falta de integração reduz o potencial de desenvolvimento dos estudantes."
    }
  ];

  return (
    <section className="problem">
      <div className="container">

        <span className="section-tag">
          O DESAFIO
        </span>

        <h2 className="problem-title">
          A inclusão não falha por falta de vontade.
          <br />
          Ela falha por falta de estrutura.
        </h2>

        <p className="problem-subtitle">
          Acreditamos que uma escola inclusiva nasce quando conhecimento,
          metodologia e acompanhamento caminham juntos.
        </p>

        <div className="problem-grid">

          {problems.map((item, index) => (
            <div className="problem-card" key={index}>

              <div className="problem-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}