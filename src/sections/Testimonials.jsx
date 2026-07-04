import { Quote } from "lucide-react";

export default function Testimonials() {

  const testimonials = [
    {
      name: "Coordenação Pedagógica",
      role: "Escola Municipal",
      text: "A metodologia trouxe mais estrutura para nosso trabalho com inclusão. Os professores passaram a ter mais segurança no dia a dia."
    },
    {
      name: "Professora Ana Paula",
      role: "Ensino Fundamental",
      text: "Antes eu me sentia perdida com alguns alunos. Hoje consigo aplicar estratégias que realmente funcionam."
    },
    {
      name: "Gestora Escolar",
      role: "Rede Privada",
      text: "Percebemos evolução não só nos alunos, mas também no engajamento dos professores."
    }
  ];

  return (
    <section className="testimonials">

      <div className="container">

        <span className="section-tag">DEPOIMENTOS</span>

        <h2 className="title">
          Quem aplica, vê a diferença na prática
        </h2>

        <p className="subtitle">
          Relatos de profissionais que vivenciam a metodologia no dia a dia escolar.
        </p>

        <div className="testimonials-grid">

          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>

              <Quote size={30} />

              <p className="testimonial-text">
                "{t.text}"
              </p>

              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}