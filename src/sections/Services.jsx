import { useState } from "react";
import { GraduationCap, Presentation, BookOpen, CheckCircle2 } from "lucide-react";
import SwipeIndicator from "../components/SwipeIndicator";
import "./Services.css";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: 0,
      icon: <GraduationCap size={24} />,
      title: "Formação e Capacitação",
      items: [
        "Trilhas de Formação Inclusiva (online e presencial) e Educação Corporativa",
        "Mentoria da certificação do MOVer®",
        "Capacitação Institucional para professores, coordenadores, estagiários e auxiliares",
        "Capacitação de educadores sociais, equipes de ONGs, corporativas e famílias",
        "Oficinas Socioemocionais: Autoconhecimento, Comunicação, Protagonismo juvenil e Habilidades para o Século XXI"
      ]
    },
    {
      id: 1,
      icon: <Presentation size={24} />,
      title: "Consultoria Pedagógica",
      items: [
        "Diagnóstico completo da instituição e Plano de Desenvolvimento Inclusivo",
        "Acompanhamento pedagógico mensal e Protocolos de inclusão/acessibilidade",
        "Consultoria em comportamento, adaptação curricular e materiais",
        "Consultoria para ONGs, projetos sociais e consultoria esportiva adaptada",
        "Estimulação cognitiva e psicomotricidade (foco no desenvolvimento de visuoconstrução, praxia e consolidação da memória não declarativa)"
      ]
    },
    {
      id: 2,
      icon: <BookOpen size={24} />,
      title: "Produtos Educacionais",
      items: [
        "Apostilas, cadernos de atividades e cartilhas de inclusão",
        "Jogos pedagógicos inclusivos (opções digitais e impressas)",
        "E-books, mini-cursos gravados e podcasts exclusivos",
        "Kits pedagógicos estruturados para aplicação imediata",
        "Temas de oficinas prontas direcionadas para multiplicadores"
      ]
    }
  ];

  return (
    <section id="servicos" className="services-modern">
      <div className="container">
        <span className="section-tag">O QUE FAZEMOS</span>
        <h2 className="title">Catálogo Completo de Soluções</h2>
        <p className="subtitle">
          Atuamos de ponta a ponta para garantir que a inclusão seja aplicada de forma prática e com embasamento científico.
        </p>
        
        <SwipeIndicator />

        {/* Navegação das Abas com Acessibilidade (a11y) */}
        <div className="tabs-header" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              aria-controls={`aba-conteudo-${cat.id}`}
              tabIndex={activeTab === cat.id ? 0 : -1}
              className={`tab-btn ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Conteúdo da Aba Ativa com Acessibilidade (a11y) */}
        <div 
          className="tab-content"
          role="tabpanel"
          id={`aba-conteudo-${activeTab}`}
        >
          <ul className="service-list">
            {categories[activeTab].items.map((item, index) => (
              <li key={index} className="service-list-item">
                <CheckCircle2 className="check-icon" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}