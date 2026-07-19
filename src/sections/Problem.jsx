import "./Problem.css";

export default function Problem() {
  return (
    <section id="problema" className="problem premium-dark">
      {/* Geometria de fundo mantida para consistência visual */}
      <div className="geo-ring ring-primary"></div>
      <div className="geo-ring ring-secondary"></div>

      <div className="container relative-z problem-clean">
        <span className="section-tag dark-tag">A REALIDADE</span>
        
        <h2 className="problem-title-clean">
          O discurso da inclusão é lindo.<br />
          <span className="text-secondary">A prática, nem tanto.</span>
        </h2>
        
        <p className="problem-subtitle-clean">
          Muitas instituições aceitam a matrícula, mas na prática o aluno neurodivergente fica isolado. 
          Enquanto não houver capacitação real e metodologias baseadas em evidências, o ecossistema educacional continuará falhando com quem mais precisa.
        </p>
      </div>
    </section>
  );
}