import { useState } from "react";
import { ArrowLeft, Save, User, FileText, Activity, Brain } from "lucide-react";
import "./AvaliacaoPratica.css";

// Agora o componente RECEBE o aluno dinamicamente
export default function AvaliacaoPratica({ aluno, onVoltar }) {
  const professorNome = "Prof. Marcos Silva"; // Pode vir do useAuthStore no futuro

  const [form, setForm] = useState({
    visuoconstrucao: "",
    memoriaMotora: "",
    regulacao: "",
    barreiras: "",
    planoAcao: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    alert("Avaliação salva com sucesso!");
    onVoltar(); // Volta para a lista de alunos
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
          
          {/* BLOCO DINÂMICO QUE PUXOU OS DADOS DA TELA ANTERIOR */}
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

          {/* ... resto dos blocos e botões de rádio que fizemos na mensagem anterior ... */}
          
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