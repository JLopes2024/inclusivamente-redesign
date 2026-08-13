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
      texto: "Eu sou uma pessoa muito intensa em tudo que faço, todas as responsabilidades faziam com que eu não percebesse o quanto eu não precisava ser tão rígida. Aprendi nos encontros da Inclusivamente que tudo pode ser mais maleável, me sinto mais leve.",
      nome: "Marcia Peixoto",
      cargo: "Mãe Atípica | Grupo apoio ao cuidador"
    },
    {
      id: 3,
      texto: "O que eu esperava era que minha filha deixasse ao menos eu tocar no cabelo dela, apenas isso, mas tudo foi muito além. A Inclusivamente trouxe movimento, foco e presença. O movimento consciente trouxe ordem e independência. Trouxeram vida.",
      nome: "Micaelle Santos",
      cargo: "Mãe Atípica | Personal de Atividade Física Adaptada"
    }, 
    {
      id: 4,
      texto: "Em menos de um mês após a conclusão da Certificação Método MOVer®, surgiram novas oportunidades profissionais, incluindo uma proposta para cargo de coordenação, além da conquista de mais 3 alunos particulares. A mentoria individual me trouxe uma bagagem técnica muito sólida. Hoje me sinto mais seguro para atender meus alunos e entregar resultados reais. Sou muito grato por essa evolução na minha carreira.",
      nome: "João Santos",
      cargo: "Professor de Natação | Certificação Aquática Método MOVer®"
    },
     {
      id: 5,
      texto: "Sou muita grata por cada aprendizado, não é apenas uma aula de natação. A InclusivaMente tem nos ajudado bastante com as orientações de manejo comportamental que recebemos em aula e trazemos para o nosso dia a dia. Só tenho a agradecer.",
      nome: "Amanda Ramos",
      cargo: "Família Participante | Natação Adaptada"
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
