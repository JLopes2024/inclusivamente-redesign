import { useState } from "react";
import { ArrowLeft, Save, Mic, MicOff, User, Calendar } from "lucide-react";
// Lembre-se de criar o arquivo AvaliacaoDiaria.css depois, ou usar as classes globais
import "./AvaliacaoPratica.css"; 

export default function AvaliacaoDiaria({ aluno, onVoltar, onSalvar }) {
  const professorNome = "Prof. Marcos Silva";
  
  // 1. Estado para os dois campos simples
  const [form, setForm] = useState({
    focoAtividade: "",
    observacao: ""
  });
  
  // Estado para controlar a animação do microfone
  const [gravando, setGravando] = useState(false);

  // 2. Função de captura de voz nativa do navegador
  const iniciarDitado = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Infelizmente, seu navegador atual não suporta digitação por voz.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = false; // Grava uma frase por vez e para

    recognition.onstart = () => setGravando(true);
    
    recognition.onend = () => setGravando(false);
    
    recognition.onresult = (event) => {
      const textoFalado = event.results[0][0].transcript;
      
      // Adiciona o texto falado ao que já estava escrito na observação
      setForm((prev) => ({
        ...prev,
        observacao: prev.observacao ? `${prev.observacao} ${textoFalado}` : textoFalado
      }));
    };

    recognition.start();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    alert("Acompanhamento diário registrado com sucesso!");
    
    // Dispara a mudança de cor lá na tela principal se a prop onSalvar foi enviada
    if (onSalvar) {
      onSalvar(); 
    } else {
      onVoltar();
    }
  };

  return (
    <div className="avaliacao-container">
      <header className="avaliacao-header">
        <button className="btn-voltar" onClick={onVoltar}>
          <ArrowLeft size={18} /> Voltar para a Fila
        </button>
        <h2>Registro Diário de Acompanhamento</h2>
        <p><Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} /> {new Date().toLocaleDateString('pt-BR')}</p>
      </header>

      <div className="form-wrapper">
        <form onSubmit={handleSalvar}>
          
          {/* CABEÇALHO DO ALUNO */}
          <section className="bloco-sessao info-automatica">
            <div className="info-grid">
              <div className="info-item">
                <span className="label">Educador</span>
                <div className="valor"><User size={16} /> {professorNome}</div>
              </div>
              <div className="info-item">
                <span className="label">Aluno(a)</span>
                <div className="valor destaque">{aluno?.nome || "Aluno Selecionado"}</div>
              </div>
            </div>
          </section>

          {/* CAMPO 1: O QUE FOI FEITO */}
          <section className="bloco-sessao">
            <div className="pergunta-grupo">
              <label>1. Foco da Atividade de Hoje</label>
              <textarea 
                name="focoAtividade" 
                rows="2" 
                placeholder="Ex: Circuito motor, treino de habilidades de visuoconstrução, etc..."
                value={form.focoAtividade}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </section>

          {/* CAMPO 2: OBSERVAÇÕES COM BOTÃO DE VOZ */}
          <section className="bloco-sessao">
            <div className="pergunta-grupo">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ margin: 0 }}>2. Observações do Atendimento</label>
                
                {/* O BOTÃO MÁGICO DO MICROFONE */}
                <button 
                  type="button" 
                  onClick={iniciarDitado}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    background: gravando ? '#fee2e2' : '#e0f2fe',
                    color: gravando ? '#ef4444' : '#0284c7',
                    border: 'none', padding: '8px 12px', borderRadius: '8px',
                    cursor: 'pointer', fontWeight: 'bold', fontSize: '13px',
                    transition: 'all 0.2s'
                  }}
                >
                  {gravando ? (
                    <><MicOff size={16} /> Gravando (Fale agora)...</>
                  ) : (
                    <><Mic size={16} /> Ditar Observação</>
                  )}
                </button>
              </div>

              <textarea 
                name="observacao" 
                rows="4" 
                placeholder="Como foi o comportamento? Houve alguma dificuldade ou evolução marcante?"
                value={form.observacao}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </section>

          <div className="form-actions">
            <button type="submit" className="btn-salvar">
              <Save size={18} /> Salvar Registro Diário
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}