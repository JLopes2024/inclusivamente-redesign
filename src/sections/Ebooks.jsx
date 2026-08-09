import { motion } from "framer-motion";
import "./Ebooks.css";
import SwipeIndicator from "../components/SwipeIndicator";


export default function Ebooks() {
  const books = [
    {
      title: "Além do Nadar",
      subtitle: "Como o movimento organiza o corpo e transforma a aprendizagem no TEA",
      description: "Descubra a ciência prática de como atividades direcionadas são a chave para a regulação corporal e o salto no aprendizado de crianças neurodivergentes.",
      link: "https://hotmart.com/pt-br/marketplace/produtos/alem-do-nadar-como-o-movimento-organiza-o-corpo-e-transforma-a-aprendizagem-no-tea/I105646660Y?sck=HOTMART_PRODUCT_PAGE",
      coverImage: "https://static-media.hotmart.com/U7d3GYkdtwAmEBajGqWGBHil_5w=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/16d9c58b-4009-4911-877a-d92cec423ae3/EbookAlemdoNadarCAPA.jpg?w=920"
    },
    {
      title: "O Elo Invisível",
      subtitle: "Como a regulação da mãe destrava o desenvolvimento e a neuroaprendizagem do filho",
      description: "Um guia profundo sobre a co-regulação. Entenda como o estado emocional materno é a base fundamental para o avanço cognitivo e emocional da criança.",
      link: "https://hotmart.com/pt-br/marketplace/produtos/o-elo-invisivel-como-a-regulacao-da-mae-destrava-o-desenvolvimento-e-a-neuroaprendizagem-do-filho/Y106055798C?sck=HOTMART_PRODUCT_PAGE",
      coverImage: "https://static-media.hotmart.com/84d4dE69VkZ7q9937AXopLXTpC4=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/84f35b81-0d8f-4c07-a0a2-39cc219119a2/CapaEbookoEloinvisivel1.png?w=920"
    }
  ];

  return (
    <section id="materiais" className="ebooks-section">
      <div className="container ebooks-container">
        
        <motion.div 
          className="ebooks-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">BIBLIOTECA DIGITAL</span>
          <h2>Aprofunde-se na <span className="text-secondary">Nossa Metodologia</span></h2>
          <p>Materiais exclusivos desenvolvidos para pais, educadores e profissionais que buscam resultados práticos.</p>
          <SwipeIndicator />
        </motion.div>

        <div className="ebooks-grid">
          {books.map((book, index) => (
            <motion.div 
              key={index} 
              className="ebook-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="ebook-cover-wrapper">
                {book.coverImage ? (
                  /* Renderiza a capa real com as duas imagens agora inseridas */
                  <div className="ebook-real-cover-container">
                    <img src={book.coverImage} alt={`Capa do livro ${book.title}`} className="ebook-real-image" />
                  </div>
                ) : (
                  /* Fallback caso alguma imagem não carregue no futuro */
                  <div className="ebook-cover-placeholder">
                    <h3>{book.title}</h3>
                  </div>
                )}
              </div>
              
              <div className="ebook-info">
                <h3 className="ebook-title">{book.title}</h3>
                <h4 className="ebook-subtitle">{book.subtitle}</h4>
                <p className="ebook-desc">{book.description}</p>
                
                <a 
                  href={book.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ebook-btn"
                >
                  Adquirir E-book
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}