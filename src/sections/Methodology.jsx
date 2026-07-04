import {
  Brain,
  Activity,
  School,
  Users,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

export default function Methodology() {
  const pillars = [
    {
      icon: <Brain size={28} />,
      title: "Ciência",
    },
    {
      icon: <Activity size={28} />,
      title: "Movimento",
    },
    {
      icon: <School size={28} />,
      title: "Escola",
    },
    {
      icon: <Users size={28} />,
      title: "Professores",
    },
    {
      icon: <HeartHandshake size={28} />,
      title: "Família",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Desenvolvimento",
    },
  ];

  return (
    <section className="methodology">

      <div className="container">

        <span className="section-tag">
          METODOLOGIA
        </span>

        <h2 className="title">
          Tudo conectado para gerar
          uma inclusão de verdade.
        </h2>

        <p className="subtitle">
          Nossa metodologia integra diferentes agentes do processo educacional,
          criando uma rede colaborativa para potencializar o desenvolvimento dos estudantes.
        </p>

        <div className="method-grid">

          {pillars.map((item, index) => (
            <div className="method-card" key={index}>

              <div className="method-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}