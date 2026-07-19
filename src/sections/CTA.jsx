import { MessageCircle } from "lucide-react";
import "./CTA.css";

export default function CTA() {
  // Configuração do Link do WhatsApp
  const phoneNumber = "551199357532";
  const message = encodeURIComponent("Olá! Gostaria de agendar uma apresentação da InclusivaMente.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="cta-section">
      <div className="container cta-container">
        
        <span className="section-tag">VAMOS CONVERSAR?</span>
        
        <h2 className="title cta-title">
          Vamos construir um ambiente mais inclusivo juntos?
        </h2>
        
        <p className="subtitle cta-subtitle">
          Fale com a nossa equipe agora mesmo e descubra a solução pedagógica ideal para a sua instituição, empresa ou família.
        </p>
        
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn cta-btn"
        >
          <MessageCircle size={24} />
          Falar no WhatsApp
        </a>

      </div>
    </section>
  );
}