import { useState } from "react";
import { dataAluno } from "../data/dataAlunos";
import { dataProfessor } from "../data/dataProfessor";
import { 
  Search, Mail, CheckCircle2, AlertOctagon, 
  AlertTriangle, Clock, MapPin, Users, Eye, Edit, Repeat, Trash2 
} from "lucide-react";
import "./studentmanager.css";

export default function StudentManager() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra professores pelo nome ou especialidade
  const filteredProfessores = dataProfessor.filter((prof) =>
    prof.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
    prof.especialidade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-manager">
      
      <div className="sm-header">
        <h2>Gestão de Educadores e Operação</h2>
        <div className="search-bar-container">
          <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '10px' }} />
          <input
            type="text"
            placeholder="Buscar por nome ou especialidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Professor / Perfil</th>
              <th>Unidade de Atendimento</th>
              <th>Engajamento / Carga</th>
              <th>Status PAM</th>
              <th style={{ textAlign: 'right', paddingRight: '24px' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfessores.map((prof) => {
              const alunosDoProf = dataAluno.filter((a) => a.professorId === prof.id);
              const cargaAlunos = alunosDoProf.length;
              const pendentes = alunosDoProf.filter((a) => a.relatorios === 0).length;
              const taxa = cargaAlunos > 0 ? Math.round(((cargaAlunos - pendentes) / cargaAlunos) * 100) : 100;

              const diasInativo = (prof.id * 3) % 12; 
              const strAcesso = diasInativo === 0 ? 'Hoje' : diasInativo === 1 ? 'Ontem' : `Há ${diasInativo} dias`;

              let statusClass = "verde";
              let statusLabel = "Completo";
              if (pendentes > 0 && pendentes <= 3) {
                statusClass = "amarelo";
                statusLabel = `${pendentes} Atrasos`;
              } else if (pendentes > 3) {
                statusClass = "vermelho";
                statusLabel = `${pendentes} Atrasos`;
              }

              return (
                <tr key={prof.id}>
                  <td>
                    <span className="col-principal">{prof.nome}</span>
                    <span className="col-secundaria">{prof.especialidade} | {prof.registro}</span>
                  </td>

                  <td>
                    <span className="col-principal">{prof.escola || "Atendimento Externo"}</span>
                    <span className="col-secundaria"><MapPin size={12}/> {prof.escola ? "Presencial" : "Clínico/Remoto"}</span>
                  </td>

                  <td>
                    <span className="col-principal" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Users size={14} color="#64748b"/> {cargaAlunos} alunos na base
                    </span>
                    <span className="col-secundaria"><Clock size={12}/> Último acesso: {strAcesso}</span>
                  </td>

                  <td>
                    <span className={`status-badge ${statusClass}`}>
                      {statusClass === 'verde' && <CheckCircle2 size={14} />}
                      {statusClass === 'amarelo' && <AlertTriangle size={14} />}
                      {statusClass === 'vermelho' && <AlertOctagon size={14} />}
                      {taxa}% ({statusLabel})
                    </span>
                  </td>

                  {/* COLUNA DE AÇÕES COM BOTÕES INLINE */}
                  <td>
                    <div className="acoes-inline">
                      {statusClass !== 'verde' && (
                        <button className="btn-icon cobrar" title="Enviar cobrança de avaliações" onClick={() => alert(`Notificação enviada para ${prof.nome}!`)}>
                          <Mail size={18} />
                        </button>
                      )}
                      
                      <button className="btn-icon primario" title="Ver Perfil Completo" onClick={() => alert(`Abrindo perfil de ${prof.nome}...`)}>
                        <Eye size={18} />
                      </button>

                      <button className="btn-icon" title="Editar Cadastro" onClick={() => alert('Editando cadastro...')}>
                        <Edit size={18} />
                      </button>

                      <button className="btn-icon" title="Transferir Turma/Alunos" onClick={() => alert('Transferindo alunos...')}>
                        <Repeat size={18} />
                      </button>

                      <button className="btn-icon perigo" title="Inativar Educador" onClick={() => {
                        if(window.confirm(`Tem a certeza que deseja inativar o acesso de ${prof.nome}?`)) alert('Educador inativado.');
                      }}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
        
        {filteredProfessores.length === 0 && (
          <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
            Nenhum educador encontrado com esse nome ou especialidade.
          </div>
        )}
      </div>
    </div>
  );
}