import "./Testimonials.css";

export default function Testimonials() {
  const depoimentos = [
    {
      id: 1,
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
      nome: "Mariana S. Carvalho",
      cargo: "Coordenadora Pedagógica"
    },
    {
      id: 2,
      texto: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur.",
      nome: "Carlos Eduardo",
      cargo: "Diretor Escolar"
    },
    {
      id: 3,
      texto: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
      nome: "Ana Beatriz",
      cargo: "Psicopedagoga"
    },
    {
      id: 4,
      texto: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
      nome: "Juliana Mendes",
      cargo: "Professora"
    },
    {
      id: 5,
      texto: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      nome: "Roberto Alves",
      cargo: "Orientador Educacional"
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