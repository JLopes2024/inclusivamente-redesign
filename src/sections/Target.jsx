import { Building2, HeartHandshake } from "lucide-react";
import "./Target.css";

export default function Target() {
  return (
    <section className="target-premium premium-dark" id="publico">
      {/* Geometria de fundo idêntica ao método MOVER */}
      <div className="geo-ring ring-primary"></div>
      <div className="geo-ring ring-secondary"></div>

      <div className="container relative-z">
        <div className="target-header-glass">
          <span className="section-tag dark-tag">PARA QUEM É</span>
          <h2 className="title text-white">Desenhado para a sua realidade</h2>
        </div>

        <div className="target-grid-glass">
          
          {/* Card Institucional (B2B) */}
          <div className="target-card-glass">
            {/* O Efeito de Marca d'Água (Ícone Gigante no fundo) */}
            <div className="target-watermark">
              <Building2 size={200} strokeWidth={1} />
            </div>
            
            <div className="target-content-glass">
              <div className="target-icon-glass b2b-icon">
                <Building2 size={32} strokeWidth={1.5} />
              </div>
              <h3>Instituições</h3>
              <p>Escolas, clubes, academias, ONGs e empresas que precisam estruturar processos inclusivos, adaptar currículos e capacitar equipes com embasamento técnico.</p>
            </div>
          </div>

          {/* Card Famílias (B2C) */}
          <div className="target-card-glass">
            {/* O Efeito de Marca d'Água (Ícone Gigante no fundo) */}
            <div className="target-watermark">
              <HeartHandshake size={200} strokeWidth={1} />
            </div>
            
            <div className="target-content-glass">
              <div className="target-icon-glass b2c-icon">
                <HeartHandshake size={32} strokeWidth={1.5} />
              </div>
              <h3>Famílias e Profissionais</h3>
              <p>Orientação especializada e materiais focados no neurodesenvolvimento para pais de crianças atípicas e educadores buscarem segurança no dia a dia.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
