import { useState } from "react";
import { ArrowLeft, Save, User, FileText, Activity, Brain, HeartHandshake } from "lucide-react";
import "./AvaliacaoPratica.css";

export default function AvaliacaoPratica({ aluno, onVoltar }) {
  const professorNome = "Prof. Marcos Silva";

  // Estado que guarda as respostas do professor
  const [form, setForm] = useState({
    visuoconstrucao: "",
    praxiaGlobal: "",
    memoriaMotora: "",
    interacao: "",
    barreiras: "",
    planoAcao: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    alert("Avaliação salva com sucesso!");
    onVoltar();
  };

  return (
    <div className="avaliacao-container">
      <header className="avaliacao-header">
        <button className="btn-voltar" onClick={onVoltar}>
          <ArrowLeft size={18} /> Voltar para a Fila
        </button>
        <h2>Avaliação PAM (Plano de Acompanhamento Multidisciplinar)</h2>
        <p>Ciclo atual: <strong>Julho / 2026</strong></p>
      </header>

      <div className="form-wrapper">
        <form onSubmit={handleSalvar}>
          
          {/* BLOCO 1: IDENTIFICAÇÃO (Já existente no seu print) */}
          <section className="bloco-sessao info-automatica">
            <div className="info-grid">
              <div className="info-item">
                <span className="label">Avaliador Responsável</span>
                <div className="valor"><User size={16} /> {professorNome}</div>
              </div>
              <div className="info-item">
                <span className="label">Paciente / Aluno</span>
                <div className="valor destaque">{aluno.nome} ({aluno.idade} anos)</div>
              </div>
              <div className="info-item">
                <span className="label">Condição / PAC</span>
                <div className="valor">{aluno.necessidade} | Resp: {aluno.responsavel}</div>
              </div>
            </div>
          </section>

          {/* BLOCO 2: DOMÍNIO PSICOMOTOR E PRAXIA */}
          <section className="bloco-sessao">
            <h3><Activity size={20} color="var(--primary)" /> 1. Domínio Psicomotor e Praxia</h3>
            
            <div className="pergunta-grupo">
              <label>1.1. Visuoconstrução (Capacidade de observar e reproduzir atos voluntários)</label>
              <div className="opcoes-grid">
                {["Suporte Físico Total", "Suporte Verbal/Visual Constante", "Autônomo e Fluido"].map(opcao => (
                  <label key={opcao} className="radio-card">
                    <input type="radio" name="visuoconstrucao" value={opcao} onChange={handleChange} required />
                    <span>{opcao}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pergunta-grupo">
              <label>1.2. Praxia Global e Coordenação Múltipla</label>
              <div className="opcoes-grid">
                {["Dificuldade Severa", "Execução com Atraso", "Execução Coordenada"].map(opcao => (
                  <label key={opcao} className="radio-card">
                    <input type="radio" name="praxiaGlobal" value={opcao} onChange={handleChange} required />
                    <span>{opcao}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* BLOCO 3: ASPECTOS COGNITIVOS */}
          <section className="bloco-sessao">
            <h3><Brain size={20} color="var(--primary)" /> 2. Processamento Cognitivo</h3>
            
            <div className="pergunta-grupo">
              <label>2.1. Memória Não Declarativa (Armazenamento de habilidades já aprendidas)</label>
              <div className="opcoes-grid">
                {["Não demonstra retenção", "Retenção parcial (requer gatilho)", "Consolidação motora evidente"].map(opcao => (
                  <label key={opcao} className="radio-card">
                    <input type="radio" name="memoriaMotora" value={opcao} onChange={handleChange} required />
                    <span>{opcao}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* BLOCO 4: COMPORTAMENTAL E SOCIAL */}
          <section className="bloco-sessao">
            <h3><HeartHandshake size={20} color="var(--primary)" /> 3. Aspectos Comportamentais</h3>
            
            <div className="pergunta-grupo">
              <label>3.1. Interação com o Grupo durante a Prática</label>
              <div className="opcoes-grid">
                {["Isolamento Voluntário", "Interage apenas com o Professor", "Participação Ativa com Pares"].map(opcao => (
                  <label key={opcao} className="radio-card">
                    <input type="radio" name="interacao" value={opcao} onChange={handleChange} required />
                    <span>{opcao}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* BLOCO 5: REGISTROS DESCRITIVOS (TEXTO) */}
          <section className="bloco-sessao">
            <h3><FileText size={20} color="var(--primary)" /> 4. Registros Qualitativos</h3>
            
            <div className="pergunta-grupo">
              <label>Barreiras Identificadas neste ciclo (O que dificultou o aprendizado?):</label>
              <textarea 
                name="barreiras" 
                rows="3" 
                placeholder="Descreva as principais dificuldades observadas na execução dos movimentos..."
                value={form.barreiras}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="pergunta-grupo">
              <label>Plano de Ação (Próximos 30 dias):</label>
              <textarea 
                name="planoAcao" 
                rows="3" 
                placeholder="Foco pedagógico e motor para as próximas aulas práticas..."
                value={form.planoAcao}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </section>

          {/* BOTÃO DE SALVAR */}
          <div className="form-actions">
            <button type="submit" className="btn-salvar">
              <Save size={18} /> Assinar e Salvar Avaliação
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}