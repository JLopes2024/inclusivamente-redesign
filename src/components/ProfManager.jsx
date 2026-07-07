import { useState } from "react";
import { dataAluno } from "../data/dataAlunos";
import { dataProfessor } from "../data/dataProfessor";
import { 
  Users, CheckCircle2, Clock, Target, 
  Search, FileText, ArrowRight, AlertCircle
} from "lucide-react";
import "./profmanager.css";

export default function ProfManager() {
  // Simulando o ID do professor logado no momento
  const ID_PROFESSOR_LOGADO = 1; 
  
  const professor = dataProfessor.find(p => p.id === ID_PROFESSOR_LOGADO);
  
  // Pegando apenas os alunos deste professor
  const meusAlunos = dataAluno.filter((a) => a.professorId === ID_PROFESSOR_LOGADO);
  
  // Lógica de Triagem
  const alunosPendentes = meusAlunos.filter((a) => a.relatorios === 0);
  const alunosConcluidos = meusAlunos.filter((a) => a.relatorios > 0);
  
  const totalAlunos = meusAlunos.length;
  const pendentesCount = alunosPendentes.length;
  const concluidosCount = alunosConcluidos.length;
  const progresso = totalAlunos > 0 ? Math.round((concluidosCount / totalAlunos) * 100) : 0;

  // Busca dentro da própria fila
  const [searchTerm, setSearchTerm] = useState("");
  
  // Junta a lista colocando os pendentes primeiro (Smart Queue)
  const filaOrdenada = [...alunosPendentes, ...alunosConcluidos].filter(a => 
    a.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="prof-dashboard">
      
      {/* CABEÇALHO E BOAS VINDAS */}
      <header className="prof-header">
        <div>
          <h1 style={{ color: 'var(--primary)', margin: '0 0 8px 0', fontSize: '24px' }}>
            Olá, {professor?.nome.split(' ')[0] || 'Educador'}! 👋
          </h1>
          <p style={{ color: 'var(--text-light)', margin: 0 }}>
            Você tem <strong>{pendentesCount} avaliações PAM</strong> aguardando preenchimento esta semana.
          </p>
        </div>
      </header>

      {/* BLOCO 1: KPIs DE AUTOGESTÃO */}
      <div className="prof-kpis">
        <div className="kpi-card">
          <div className="kpi-icon" style={{ backgroundColor: 'var(--background)' }}>
            <Users size={20} color="var(--primary)" />
          </div>
          <div className="kpi-info">
            <span className="kpi-label">Minha Carga</span>
            <span className="kpi-value">{totalAlunos} <small>alunos</small></span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon" style={{ backgroundColor: '#fffbeb' }}>
            <Clock size={20} color="#d97706" />
          </div>
          <div className="kpi-info">
            <span className="kpi-label">Fila de Avaliação</span>
            <span className="kpi-value">{pendentesCount} <small>pendentes</small></span>
          </div>
        </div>

        <div className="kpi-card meta-card">
          <div className="meta-header">
            <span className="kpi-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Target size={16} color="var(--accent)" /> Meta do Mês
            </span>
            <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{progresso}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progresso}%` }}></div>
          </div>
        </div>
      </div>

      {/* BLOCO 2: FILA DE TRIAGEM INTELIGENTE */}
      <div className="fila-container">
        <div className="fila-header">
          <h2 style={{ color: 'var(--primary)', margin: 0, fontSize: '18px' }}>Fila de Atendimento</h2>
          <div className="search-box">
            <Search size={16} color="var(--text-light)" />
            <input 
              type="text" 
              placeholder="Buscar aluno..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="fila-lista">
          {filaOrdenada.map((aluno) => {
            const isPendente = aluno.relatorios === 0;

            return (
              <div key={aluno.id} className={`fila-item ${isPendente ? 'urgente' : 'concluido'}`}>
                
                <div className="item-info">
                  <h3 className="aluno-nome">{aluno.nome}</h3>
                  <span className="aluno-detalhes">
                    {aluno.idade} anos | {aluno.necessidade}
                  </span>
                </div>

                <div className="item-status">
                  {isPendente ? (
                    <span className="badge-status pendente">
                      <AlertCircle size={14} /> PAC Recebido
                    </span>
                  ) : (
                    <span className="badge-status ok">
                      <CheckCircle2 size={14} /> PAM Concluído
                    </span>
                  )}
                </div>

                <div className="item-acao">
                  {isPendente ? (
                    <button className="btn-avaliar" onClick={() => alert(`Iniciando PAM de ${aluno.nome}...`)}>
                      Avaliar <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button className="btn-ver-historico" onClick={() => alert(`Abrindo dossiê de ${aluno.nome}...`)}>
                      <FileText size={16} /> Ver Histórico
                    </button>
                  )}
                </div>
                
              </div>
            );
          })}

          {filaOrdenada.length === 0 && (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-light)' }}>
              Nenhum aluno encontrado na sua fila.
            </div>
          )}
        </div>
      </div>

    </div>
  );
}