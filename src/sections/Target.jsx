import { Building2, HeartHandshake } from "lucide-react";
import "./Target.css";

export default function Target() {
  return (
    <section className="target" id="publico">
      <div className="container">
        
        {/* Cabeçalho da Seção adicionado para dar contexto */}
        <div className="target-header">
          <span className="section-tag">NOSSOS PÚBLICOS</span>
          <h2 className="title">Soluções sob medida para cada necessidade</h2>
        </div>

        <div className="target-grid">
          
          {/* Card B2B */}
          <div className="target-card b2b">
            <div className="target-icon">
              <Building2 size={36} />
            </div>
            <h3>Público Institucional (B2B)</h3>
            <p>Soluções estruturadas e consultoria técnica para escolas, ONGs, prefeituras, empresas e condomínios que buscam excelência em diversidade e inclusão.</p>
          </div>

          {/* Card B2C */}
          <div className="target-card b2c">
            <div className="target-icon">
              <HeartHandshake size={36} />
            </div>
            <h3>Público Individual (B2C)</h3>
            <p>Apoio especializado para famílias de crianças e jovens PCDs, autistas, neurodivergentes e profissionais em busca de desenvolvimento socioemocional.</p>
          </div>

        </div>
      </div>
    </section>
  );
}