import { BookOpen, GraduationCap, Presentation, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Presentation size={30} />,
      title: "Formação de Educadores",
      text: "Capacitação prática para professores aplicarem inclusão no dia a dia escolar."
    },
    {
      icon: <BookOpen size={30} />,
      title: "Projetos Educacionais",
      text: "Desenvolvimento de estratégias personalizadas para escolas e redes de ensino."
    },
    {
      icon: <GraduationCap size={30} />,
      title: "Consultoria Pedagógica",
      text: "Apoio especializado para implementação de práticas inclusivas estruturadas."
    },
    {
      icon: <Users size={30} />,
      title: "Acompanhamento Institucional",
      text: "Suporte contínuo para garantir evolução e consistência dos resultados."
    }
  ];

  return (
    <section className="services">
      <div className="container">

        <span className="section-tag">O QUE FAZEMOS</span>

        <h2 className="title">
          Soluções completas para transformar instituições de ensino
        </h2>

        <p className="subtitle">
          Atuamos junto a escolas, secretarias e equipes pedagógicas
          na construção de ambientes educacionais mais inclusivos.
        </p>

        <div className="services-grid">

          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}