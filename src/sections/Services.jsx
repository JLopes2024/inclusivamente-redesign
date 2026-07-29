import { useState } from "react";
import { GraduationCap, Presentation, BookOpen, CheckCircle2 } from "lucide-react";
import "./Services.css";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: 0,
      icon: <GraduationCap size={24} />,
      title: "Formação e Capacitação",
      items: [
        "Trilhas de Formação Inclusiva (online e presencial) e Educação Corporativa" /*[cite: 2] */,
        "Mentoria da certificação do MOVer®" /*[cite: 2] */,
        "Capacitação Institucional para professores, coordenadores, estagiários e auxiliares" /*[cite: 2] */,
        "Capacitação de educadores sociais, equipes de ONGs, corporativas e famílias" /*[cite: 2] */,
        "Oficinas Socioemocionais: Autoconhecimento, Comunicação, Protagonismo juvenil e Habilidades para o Século XXI" /*[cite: 2] */
      ]
    },
    {
      id: 1,
      icon: <Presentation size={24} />,
      title: "Consultoria Pedagógica",
      items: [
        "Diagnóstico completo da instituição e Plano de Desenvolvimento Inclusivo" /*[cite: 2] */,
        "Acompanhamento pedagógico mensal e Protocolos de inclusão/acessibilidade" /*[cite: 2] */,
        "Consultoria em comportamento, adaptação curricular e materiais" /*[cite: 2] */,
        "Consultoria para ONGs, projetos sociais e consultoria esportiva adaptada" /*[cite: 2] */,
        "Estimulação cognitiva e psicomotricidade (foco no desenvolvimento de visuoconstrução, praxia e consolidação da memória não declarativa)"
      ]
    },
    {
      id: 2,
      icon: <BookOpen size={24} />,
      title: "Produtos Educacionais",
      items: [
        "Apostilas, cadernos de atividades e cartilhas de inclusão" /*[cite: 2] */,
        "Jogos pedagógicos inclusivos (opções digitais e impressas)" /*[cite: 2] */,
        "E-books, mini-cursos gravados e podcasts exclusivos" /*[cite: 2] */,
        "Kits pedagógicos estruturados para aplicação imediata" /*[cite: 2] */,
        "Temas de oficinas prontas direcionadas para multiplicadores" /*[cite: 2] */
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
