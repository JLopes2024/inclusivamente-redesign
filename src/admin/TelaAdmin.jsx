import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import StudentManager from "../components/StudentManager";
import { dataAluno } from "../data/dataAlunos";
import { dataProfessor } from "../data/dataProfessor";
import { LogOut, LayoutDashboard, AlertTriangle, Send, Users, CheckCircle2, Clock } from "lucide-react";
import "./TelaAdmin.css";

export default function TelaAdmin() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // --- LÓGICA MACRO (VISÃO DO ADMIN) ---
  const totalProfessores = dataProfessor.length;
  const totalAlunos = dataAluno.length;
  
  const alunosAvaliados = dataAluno.filter(a => a.relatorios > 0).length;
  const alunosPendentes = totalAlunos - alunosAvaliados;
  const taxaConclusao = totalAlunos > 0 ? Math.round((alunosAvaliados / totalAlunos) * 100) : 0;

  // Detecta professores com mais de 3 alunos pendentes para gerar alerta
  const professoresAtrasados = dataProfessor.filter(prof => {
    return dataAluno.filter(a => a.professorId === prof.id && a.relatorios === 0).length > 3;
  }).length;

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div>
          <h1><LayoutDashboard color="var(--primary)" size={28} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Visão Geral da Operação</h1>
          <p>Gestão de Educadores e Status de Avaliações (PAM)</p>
        </div>
        <button onClick={handleLogout} className="btn-logout">
          Sair <LogOut size={16} />
        </button>
      </header>
      
      <main className="admin-content">
        
        {/* ALERTA DO SISTEMA */}
        {professoresAtrasados > 0 && (
          <div className="alerta-global-card">
            <div className="alerta-conteudo">
              <div className="alerta-icone">
                <AlertTriangle size={24} color="#d97706" />
              </div>
              <div className="alerta-info">
                <h4>Atenção: {professoresAtrasados} educadores com volume crítico de atrasos</h4>
                <p>O fluxo de consolidação dos relatórios está comprometido. Notifique os responsáveis técnicos.</p>
              </div>
            </div>
            
            <button className="btn-notificar" onClick={() => alert("E-mails de cobrança enviados com sucesso!")}>
              <Send size={16} /> Notificar
            </button>
          </div>
        )}

        {/* KPIs GLOBAIS */}
        <div className="admin-kpis">
          <div className="kpi-card">
            <div className="kpi-icone" style={{ background: '#e0f2fe', color: '#0284c7' }}><Users size={20} /></div>
            <div className="kpi-info-bloco">
              <span className="kpi-label">Educadores Ativos</span>
              <span className="kpi-valor">{totalProfessores}</span>
            </div>
          </div>
          
          <div className="kpi-card">
            <div className="kpi-icone" style={{ background: 'var(--background)', color: 'var(--primary)' }}><Users size={20} /></div>
            <div className="kpi-info-bloco">
              <span className="kpi-label">Pacientes / Alunos</span>
              <span className="kpi-valor">{totalAlunos}</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icone" style={{ background: '#dcfce7', color: '#166534' }}><CheckCircle2 size={20} /></div>
            <div className="kpi-info-bloco">
              <span className="kpi-label">Taxa de Conclusão</span>
              <span className="kpi-valor">{taxaConclusao}%</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icone" style={{ background: '#fef9c3', color: '#854d0e' }}><Clock size={20} /></div>
            <div className="kpi-info-bloco">
              <span className="kpi-label">PAMs Pendentes</span>
              <span className="kpi-valor">{alunosPendentes}</span>
            </div>
          </div>
        </div>
        
        {/* GESTÃO MICRO (A Tabela Completa) */}
        <StudentManager />
      </main>
    </div>
  );
}