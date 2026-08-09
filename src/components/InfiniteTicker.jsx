import "./InfiniteTicker.css";

export default function InfiniteTicker() {
  // As palavras que vão ficar rolando na tela. 
  // O "•" funciona como um separador elegante.
  const items = [
    "Educação Inclusiva", "•",
    "Neurociência", "•",
    "Psicomotricidade", "•",
    "Desenvolvimento Humano", "•",
    "Metodologia MOVer®", "•",
    "Capacitação Docente", "•"
  ];

  return (
    <div className="ticker-section">
      <div className="ticker-container">
        <div className="ticker-track">
          {/* Nós renderizamos o mesmo array duas vezes para o efeito infinito não quebrar */}
          {[...Array(2)].map((_, i) => (
            <div className="ticker-group" key={i}>
              {items.map((item, index) => (
                <span 
                  key={index} 
                  className={item === "•" ? "ticker-dot" : "ticker-text"}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}