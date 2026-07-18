import { useState } from "react";
import {
  GraduationCap,
  Presentation,
  BookOpen,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

import "./Services.css";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      id: 1,
      title: "O Elo Invisível",
      description:
        "Como a regulação da mãe destrava o desenvolvimento e a neuroaprendizagem do filho.",
      image: "/ebooks/elo-invisivel.jpg",
      button: "Conhecer e-book",
      link: "https://hotmart.com/pt-br/marketplace/produtos/o-elo-invisivel-como-a-regulacao-da-mae-destrava-o-desenvolvimento-e-a-neuroaprendizagem-do-filho/Y106055798C?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn2jA4DjOf85OUxxPOduVjexYjE0ju4TVf2PV-YpoHi3AXKVwo62XB4nqJ00Y_aem_C_cuaCN9OrNFMOYwMckzng&utm_medium=social&utm_source=ig&utm_content=link_in_bio"
    },
    {
      id: 2,
      title: "Além do Nadar",
      description:
        "Como o movimento organiza o corpo e transforma a aprendizagem no TEA.",
      image: "/ebooks/alem-do-nadar.jpg",
      button: "Conhecer e-book",
      link: "https://hotmart.com/pt-br/marketplace/produtos/alem-do-nadar-como-o-movimento-organiza-o-corpo-e-transforma-a-aprendizagem-no-tea/I105646660Y?sck=HOTMART_PRODUCT_PAGE"
    }
  ];

  const categories = [
    {
      id: 0,
      icon: <GraduationCap size={24} />,
      title: "Formação e Capacitação",
      items: [
        "Trilhas de Formação Inclusiva (online e presencial)",
        "Programa Inclusiva Mente Trainer",
        "Capacitação Institucional",
        "Capacitação para ONGs e empresas",
        "Oficinas Socioemocionais"
      ]
    },
    {
      id: 1,
      icon: <Presentation size={24} />,
      title: "Consultoria Pedagógica",
      items: [
        "Diagnóstico Institucional",
        "Plano de Desenvolvimento Inclusivo",
        "Acompanhamento Pedagógico",
        "Consultoria em adaptação curricular",
        "Psicomotricidade e Estimulação Cognitiva"
      ]
    },
    {
      id: 2,
      icon: <BookOpen size={24} />,
      title: "Produtos Educacionais",
      items: [
        "Apostilas e Cartilhas",
        "Jogos Pedagógicos Inclusivos",
        "E-books Exclusivos",
        "Mini Cursos",
        "Kits Pedagógicos"
      ]
    }
  ];

  return (
    <section id="servicos" className="services-modern">
      <div className="container">

        <span className="section-tag">
          O QUE FAZEMOS
        </span>

        <h2 className="title">
          Soluções para transformar inclusão em prática
        </h2>

        <p className="subtitle">
          Formação, consultoria e materiais desenvolvidos com base científica
          para promover uma educação verdadeiramente inclusiva.
        </p>

        <div className="tabs-header">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`tab-btn ${
                activeTab === category.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        <div className="tab-content">

          <ul className="service-list">
            {categories[activeTab].items.map((item, index) => (
              <li
                key={index}
                className="service-list-item"
              >
                <CheckCircle2
                  className="check-icon"
                  size={20}
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>

          {activeTab === 2 && (
            <div className="ebooks-section">

              <div className="ebooks-header">

                <h3>Materiais em destaque</h3>

                <p>
                  Conteúdos exclusivos desenvolvidos para
                  professores, famílias e profissionais que desejam
                  aprofundar seus conhecimentos em inclusão.
                </p>

              </div>

              <div className="ebooks-grid">

                {products.map((product) => (

                  <article
                    key={product.id}
                    className="ebook-card"
                  >

                    
                    <div className="ebook-content">

                      <h4>{product.title}</h4>

                      <p>{product.description}</p>

                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ebook-button"
                      >
                        {product.button}

                        <ExternalLink size={18} />
                      </a>

                    </div>

                  </article>

                ))}

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}