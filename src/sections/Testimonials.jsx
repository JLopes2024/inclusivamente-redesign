import "./Testimonials.css";
import { ArrowRight } from "lucide-react";

export default function Testimonials() {
  const depoimentos = [
    {
      id: 1,
      texto: "Havia uma grande dificuldade de comunicação da equipe, organização de rotina, e planejamento assertivo. Após a Inclusivamente tudo mudou. Somos extremamente gratos.",
      nome: "Vanessa Martins",
      cargo: "Gestora Semeare | Psicopedagoga"
    },
    {
      id: 2,
      texto: "Havia uma grande dificuldade em organização de espaço e de equipe, após a Inclusivamente tudo mudou. Somos extremamente gratos. ",
      nome: "Gestora Semeare",
      cargo: ""
    },
    {
      id: 3,
      texto: "O que eu esperava era que a minha filha deixasse ao menos eu tocar no cabelo dela, apenas isso, mas tudo foi muito além. A InclusivaMente trouxe movimento e trouxe foco e presença. O movimento consciente trouxe ordem e independência. Trouxeram vida.",
      nome: "Família Participante",
      cargo: ""
    },
    {
      id: 4,
      texto: "Eu sou uma pessoa muito intensa em tudo o que faço, todas as responsabilidades faziam com que eu não percebia o quanto eu não precisava ser tão rígida. Aprendi que tudo pode ser mais maleável, me sinto mais leve.",
      nome: "Workshop Despertar",
      cargo: ""
    }
  ];

  return (
    <section className="depoimentos-section premium-dark">
      {/* Geometria de fundo copiada do MOVER para manter o padrão */}
      <div className="geo-ring ring-primary"></div>
      <div className="geo-ring ring-secondary"></div>

      <div className="container relative-z">
        <div className="depoimentos-header">
          <span className="section-tag dark-tag">PROVA SOCIAL</span>
          <h2 className="title text-white">Quem conhece, recomenda.</h2>
            {/* Setinha Animada para Mobile */}
        <div className="swipe-indicator">
          <span>Deslize para ver mais</span>
          <ArrowRight size={18} />
        </div>
        </div>
      
        <div className="depoimentos-grid">
          {depoimentos.map((item) => (
            <div className="depoimento-card" key={item.id}>
              {/* Marca d'água de aspas gigantes igual a letra do MOVER */}
              <div className="quote-bg">"</div>
              
              <div className="depoimento-content">
                <p className="depoimento-texto">
                  "{item.texto}"
                </p>
                
                <div className="depoimento-autor">
                  <div className="autor-info">
                    <h4 className="autor-nome">{item.nome}</h4>
                    <span className="autor-cargo">{item.cargo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}