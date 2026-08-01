import { useState } from "react";
// IMPORTANTE: ArrowRight foi adicionado na linha abaixo
import { GraduationCap, Presentation, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
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
        
        {/* Setinha Animada para Mobile */}
        <div className="swipe-indicator">
          <span>Deslize para ver mais</span>
          <ArrowRight size={18} />
        </div>

        {/* Navegação das Abas */}
        <div className="tabs-header">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Conteúdo da Aba Ativa */}
        <div className="tab-content">
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