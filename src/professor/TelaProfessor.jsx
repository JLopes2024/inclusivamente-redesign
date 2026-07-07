import { useState } from "react";
import { dataAluno } from "../data/dataAlunos";
import { 
  Search, Users, Clock, Target, 
  ChevronDown, ChevronUp, FileText, CheckCircle2, AlertCircle 
} from "lucide-react";
import AvaliacaoPratica from "./AvaliacaoPratica"; 
import "./TelaProfessor.css";

export default function TelaProfessor() {
  // --- ESTADOS DO COMPONENTE ---
  const [filtroStatus, setFiltroStatus] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [expandidoAtual, setExpandidoAtual] = useState(null);
  
  // Estado para controlar o formulário dinâmico
  const [alunoAvaliando, setAlunoAvaliando] = useState(null);

  // --- LÓGICA DE DADOS (DETERMINÍSTICA E SEM BUGS DE RENDER) ---
  const PROFESSOR_LOGADO_ID = 1; // Simulação de sessão

  const cargaAlunos = dataAluno.filter(a => a.professorId === PROFESSOR_LOGADO_ID);

  const alunosProcessados = cargaAlunos.map(aluno => {
    const isPendente = aluno.relatorios === 0;
    const diasFila = isPendente ? (aluno.id * 3) % 15 + 1 : 0; 
    
    return {
      ...aluno,
      status: isPendente ? "Pendente" : "Pronto",
      urgencia: diasFila > 7 ? "Crítica" : diasFila > 3 ? "Atenção" : "Normal",
      diasPendente: diasFila
    };
  });

  // KPIs
  const totalAlunos = alunosProcessados.length;
  const comAnalise = alunosProcessados.filter(a => a.status === "Pronto").length;
  const pendentes = totalAlunos - comAnalise;
  const percentualCompleto = totalAlunos > 0 ? Math.round((comAnalise / totalAlunos) * 100) : 0;

  // Filtro Duplo + Ordenação Inteligente
  const alunosFiltrados = alunosProcessados
    .filter(aluno => {
      if (filtroStatus !== "Todos" && aluno.status !== filtroStatus) return false;
      if (busca && !aluno.nome.toLowerCase().includes(busca.toLowerCase()) && 
                   !aluno.necessidade.toLowerCase().includes(busca.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (a.status === "Pendente" && b.status === "Pronto") return -1;
      if (a.status === "Pronto" && b.status === "Pendente") return 1;
      return b.diasPendente - a.diasPendente; 
    });

  // --- RENDERIZAÇÃO CONDICIONAL ---
  if (alunoAvaliando) {
    return (
      <AvaliacaoPratica 
        aluno={alunoAvaliando} 
        onVoltar={() => setAlunoAvaliando(null)} 
      />
    );
  }

  // --- JSX (INTERFACE DO EDUCADOR) ---
  return (
    <div className="prof-dashboard">
      
      <header className="prof-header">
        <div>
          <h1>Painel de Avaliação PAM</h1>
          <p>Acompanhamento prático e consolidação de habilidades.</p>
        </div>
      </header>

      <div className="prof-kpis">
        <div className="kpi-card">
          <div className="kpi-icon primario"><Users size={20} /></div>
          <div className="kpi-info">
            <span className="kpi-label">Meus Alunos</span>
            <span className="kpi-value">{totalAlunos}</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon alerta"><Clock size={20} /></div>
          <div className="kpi-info">
            <span className="kpi-label">Fila de Avaliação</span>
            <span className="kpi-value">{pendentes}</span>
          </div>
        </div>

        <div className="kpi-card meta-card">
          <div className="meta-header">
            <span className="kpi-label"><Target size={16} /> Completude</span>
            <span className="meta-valor">{percentualCompleto}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${percentualCompleto}%` }}></div>
          </div>
        </div>
      </div>

      <div className="controle-painel">
        <div className="filtros-botoes">
          {["Todos", "Pendente", "Pronto"].map(status => (
            <button 
              key={status}
              className={`btn-filtro ${filtroStatus === status ? "ativo" : ""}`}
              onClick={() => setFiltroStatus(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="busca-box">
          <Search size={18} color="var(--text-light)" />
          <input 
            type="text" 
            placeholder="Buscar por nome ou necessidade..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </div>

      <div className="lista-alunos">
        {alunosFiltrados.map((aluno) => (
          <div key={aluno.id} className={`aluno-card ${aluno.status === "Pendente" ? "destaque" : ""}`}>
            
            <div className="aluno-card-header" onClick={() => setExpandidoAtual(expandidoAtual === aluno.id ? null : aluno.id)}>
              <div className="aluno-resumo">
                <h3>{aluno.nome}</h3>
                <span>{aluno.idade} anos | {aluno.necessidade}</span>
              </div>
              
              <div className="aluno-status-bloco">
                {aluno.status === "Pendente" ? (
                  <span className={`status-badge pendente ${aluno.urgencia === "Crítica" ? "critico" : ""}`}>
                    <AlertCircle size={14} /> Fila: {aluno.diasPendente} dias
                  </span>
                ) : (
                  <span className="status-badge pronto">
                    <CheckCircle2 size={14} /> Finalizado
                  </span>
                )}
                <button className="btn-expandir">
                  {expandidoAtual === aluno.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
            </div>

            {expandidoAtual === aluno.id && (
              <div className="aluno-card-body">
                <div className="info-pac">
                  <h4><FileText size={16} /> Relato do Responsável ({aluno.responsavel})</h4>
                  <p>
                    Aluno necessita de acompanhamento contínuo para desenvolvimento motor e cognitivo. 
                    Focar na resposta a comandos voluntários e armazenamento de habilidades já aprendidas (memória não declarativa).
                  </p>
                </div>
                <div className="acoes-card">
                  {aluno.status === "Pendente" ? (
                    <button 
                      className="btn-acao primario"
                      onClick={() => setAlunoAvaliando(aluno)}
                    >
                      Iniciar Avaliação Prática
                    </button>
                  ) : (
                    <button className="btn-acao secundario">Revisar Relatório</button>
                  )}
                </div>
              </div>
            )}
            
          </div>
        ))}

        {alunosFiltrados.length === 0 && (
          <div className="empty-state">
            Nenhum aluno encontrado com estes filtros.
          </div>
        )}
      </div>

    </div>
  );
}