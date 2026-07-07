import { useState } from "react";
import { dataAluno } from "../data/dataAlunos";
import NavbarAdminProf from "../layout/NavbarAdminProf";
import { Search, FileText, Download, Filter, CheckCircle2, AlertCircle } from "lucide-react";
import "./TelaAdmin.css"; 

export default function DashPam() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("Todos"); // "Todos", "Concluido", "Pendente"

  // Processa alunos para saber o status do relatório
  const relatoriosPam = dataAluno.map(aluno => {
    return {
      ...aluno,
      statusRelatorio: aluno.relatorios > 0 ? "Concluido" : "Pendente",
      dataAtualizacao: aluno.relatorios > 0 ? "Julho/2026" : "Aguardando"
    };
  });

  const relatoriosFiltrados = relatoriosPam.filter(rel => {
    if (filtro !== "Todos" && rel.statusRelatorio !== filtro) return false;
    if (busca && !rel.nome.toLowerCase().includes(busca.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <NavbarAdminProf tipoUsuario="admin" />
      
      <div className="admin-dashboard">
        <header className="admin-header">
          <div>
            <h1>Central de Relatórios PAM</h1>
            <p>Histórico e exportação de Planos de Acompanhamento Multidisciplinar.</p>
          </div>
          <button className="btn-acao secundario" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Download size={18} /> Exportar Lote (PDF)
          </button>
        </header>
        
        <main className="admin-content">
          <div className="controle-painel" style={{ marginBottom: '24px' }}>
            <div className="filtros-botoes">
              {["Todos", "Concluido", "Pendente"].map(status => (
                <button 
                  key={status}
                  className={`btn-filtro ${filtro === status ? "ativo" : ""}`}
                  onClick={() => setFiltro(status)}
                >
                  {status === "Concluido" ? "Avaliados" : status === "Pendente" ? "Pendentes" : "Todos"}
                </button>
              ))}
            </div>

            <div className="busca-box" style={{ maxWidth: '350px' }}>
              <Search size={18} color="var(--text-light)" />
              <input 
                type="text" 
                placeholder="Buscar aluno..." 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
          </div>

          <div className="bloco-sessao" style={{ padding: '0', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead style={{ background: '#f8fafc', borderBottom: '1px solid var(--border)' }}>
                <tr>
                  <th style={{ padding: '16px 24px', color: 'var(--text-light)', fontWeight: '600', fontSize: '13px' }}>ALUNO</th>
                  <th style={{ padding: '16px 24px', color: 'var(--text-light)', fontWeight: '600', fontSize: '13px' }}>CICLO</th>
                  <th style={{ padding: '16px 24px', color: 'var(--text-light)', fontWeight: '600', fontSize: '13px' }}>STATUS DO PAM</th>
                  <th style={{ padding: '16px 24px', color: 'var(--text-light)', fontWeight: '600', fontSize: '13px', textAlign: 'right' }}>AÇÕES</th>
                </tr>
              </thead>
              <tbody>
                {relatoriosFiltrados.map(rel => (
                  <tr key={rel.id} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: '500' }}>{rel.nome}</td>
                    <td style={{ padding: '16px 24px', color: 'var(--text-light)' }}>{rel.dataAtualizacao}</td>
                    <td style={{ padding: '16px 24px' }}>
                      {rel.statusRelatorio === "Concluido" ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#166534', background: '#dcfce7', padding: '4px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 'bold' }}>
                          <CheckCircle2 size={14} /> Finalizado
                        </span>
                      ) : (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#991b1b', background: '#fee2e2', padding: '4px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 'bold' }}>
                          <AlertCircle size={14} /> Aguardando Avaliação
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                      <button 
                        className="btn-acao secundario" 
                        disabled={rel.statusRelatorio === "Pendente"}
                        style={{ padding: '6px 12px', fontSize: '12px', opacity: rel.statusRelatorio === "Pendente" ? 0.5 : 1 }}
                      >
                        <FileText size={14} style={{ display: 'inline', marginRight: '4px' }} /> Ver PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {relatoriosFiltrados.length === 0 && (
            <div className="empty-state">Nenhum relatório PAM encontrado.</div>
          )}
        </main>
      </div>
    </>
  );
}