import { Brain, Users, Activity } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Brain size={36} />,
      title: "Base científica",
      text: "Aplicamos conhecimentos da neurociência e da educação para criar estratégias de inclusão que funcionam na prática."
    },
    {
      icon: <Activity size={36} />,
      title: "Aprendizagem pelo movimento",
      text: "Utilizamos o movimento como ferramenta para desenvolver habilidades cognitivas, emocionais e sociais."
    },
    {
      icon: <Users size={36} />,
      title: "Transformação institucional",
      text: "Capacitamos professores, gestores e equipes para construir ambientes escolares verdadeiramente inclusivos."
    }
  ];

  return (
    <section className="about">
      <div className="container">

        <span className="section-tag">
          NOSSA MISSÃO
        </span>

        <h2 className="title">
          Inclusão não acontece por acaso.
          <br />
          Ela é construída.
        </h2>

        <p className="subtitle">
          A InclusivaMente desenvolve metodologias que unem ciência,
          formação continuada e práticas corporais para transformar
          escolas em ambientes preparados para acolher, desenvolver e
          potencializar cada estudante.
        </p>

        <div className="about-grid">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}