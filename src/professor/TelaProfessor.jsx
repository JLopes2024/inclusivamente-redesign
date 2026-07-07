import { useState } from "react";
import { dataAluno } from "../data/dataAlunos";
import { dataProfessor } from "../data/dataProfessor"; 
import { 
  Search, Users, Clock, Target, 
  ChevronDown, ChevronUp, FileText, CheckCircle2, AlertCircle, Mic, Check
} from "lucide-react";
import AvaliacaoPratica from "./AvaliacaoPratica"; 
import AvaliacaoDiaria from "./AvaliacaoDiaria"; // Import da Diária
import "./TelaProfessor.css";
import NavbarAdminProf from "../layout/NavbarAdminProf";

export default function TelaProfessor() {
  const [filtroStatus, setFiltroStatus] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [expandidoAtual, setExpandidoAtual] = useState(null);
  
  const [alunoAvaliando, setAlunoAvaliando] = useState(null); 
  const [alunoRegistroDiario, setAlunoRegistroDiario] = useState(null); 
  
  // NOVO: Estado para rastrear quem já teve o diário preenchido hoje
  const [diariosConcluidos, setDiariosConcluidos] = useState([]); 

  const PROFESSOR_LOGADO_ID = 1; 

  const professorLogado = dataProfessor.find(p => p.id === PROFESSOR_LOGADO_ID);
  const nomeApresentacao = professorLogado ? professorLogado.nome : "Educador";

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

  const totalAlunos = alunosProcessados.length;
  const comAnalise = alunosProcessados.filter(a => a.status === "Pronto").length;
  const pendentes = totalAlunos - comAnalise;
  const percentualCompleto = totalAlunos > 0 ? Math.round((comAnalise / totalAlunos) * 100) : 0;

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

  if (alunoAvaliando) {
    return (
      <AvaliacaoPratica 
        aluno={alunoAvaliando} 
        onVoltar={() => setAlunoAvaliando(null)} 
      />
    );
  }

  if (alunoRegistroDiario) {
    return (
      <AvaliacaoDiaria 
        aluno={alunoRegistroDiario} 
        onVoltar={() => setAlunoRegistroDiario(null)} 
        // NOVO: Quando salvar, adiciona o ID do aluno na lista de concluídos
        onSalvar={() => {
          setDiariosConcluidos([...diariosConcluidos, alunoRegistroDiario.id]);
          setAlunoRegistroDiario(null);
        }}
      />
    );
  }

  return (
    <>
      {/* Navbar colocada fora do dashboard e recebendo a prop "professor" */}
      <NavbarAdminProf tipoUsuario="professor" />
      
      <div className="prof-dashboard">
        <header className="prof-header">
          <div>
            <span style={{ display: 'block', color: 'var(--secondary)', fontWeight: '600', fontSize: '15px', marginBottom: '6px' }}>
              👋 Olá, {nomeApresentacao}!
            </span>
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
          {alunosFiltrados.map((aluno) => {
            // NOVO: Verifica se o aluno atual já teve o diário preenchido hoje
            const diarioPreenchido = diariosConcluidos.includes(aluno.id);

            return (
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
                      
                      {/* NOVO: Botão Diário com cores dinâmicas */}
                      <button 
                        className="btn-acao"
                        onClick={() => setAlunoRegistroDiario(aluno)}
                        style={{ 
                          display: 'flex', alignItems: 'center', gap: '6px',
                          background: diarioPreenchido ? '#dcfce7' : '#fee2e2',
                          color: diarioPreenchido ? '#166534' : '#991b1b',
                          border: 'none'
                        }}
                      >
                        {diarioPreenchido ? (
                          <><Check size={16} /> Diário Concluído</>
                        ) : (
                          <><Mic size={16} /> Diário Pendente</>
                        )}
                      </button>

                      {aluno.status === "Pendente" ? (
                        <button 
                          className="btn-acao primario"
                          onClick={() => setAlunoAvaliando(aluno)} 
                        >
                          Avaliação PAM
                        </button>
                      ) : (
                        <button className="btn-acao secundario">Revisar Relatório</button>
                      )}
                    </div>
                  </div>
                )}
                
              </div>
            );
          })}

          {alunosFiltrados.length === 0 && (
            <div className="empty-state">
              Nenhum aluno encontrado com estes filtros.
            </div>
          )}
        </div>

      </div>
    </>
  );
}