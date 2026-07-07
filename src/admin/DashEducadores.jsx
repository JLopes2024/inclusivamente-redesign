import { useState } from "react";
import { dataProfessor } from "../data/dataProfessor";
import { dataAluno } from "../data/dataAlunos";
import NavbarAdminProf from "../layout/NavbarAdminProf";
import { Search, Plus, UserCircle, Mail, BookOpen } from "lucide-react";
// Você pode reutilizar o CSS do admin ou criar um específico
import "./TelaAdmin.css"; 

export default function DashEducadores() {
  const [busca, setBusca] = useState("");

  // Relaciona os professores com a quantidade de alunos que eles atendem
  const educadoresComDados = dataProfessor.map(prof => {
    const alunosDoProf = dataAluno.filter(a => a.professorId === prof.id);
    return {
      ...prof,
      totalAlunos: alunosDoProf.length
    };
  });

  const educadoresFiltrados = educadoresComDados.filter(prof => 
    prof.nome.toLowerCase().includes(busca.toLowerCase()) ||
    prof.especialidade.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <NavbarAdminProf tipoUsuario="admin" />
      
      <div className="admin-dashboard">
        <header className="admin-header">
          <div>
            <h1>Gestão de Educadores</h1>
            <p>Gerencie o corpo docente e a distribuição de alunos.</p>
          </div>
          <button className="btn-acao primario" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Novo Educador
          </button>
        </header>
        
        <main className="admin-content">
          <div className="controle-painel" style={{ marginBottom: '24px' }}>
            <div className="busca-box" style={{ maxWidth: '400px' }}>
              <Search size={18} color="var(--text-light)" />
              <input 
                type="text" 
                placeholder="Buscar por nome ou especialidade..." 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
          </div>

          <div className="grid-educadores" style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {educadoresFiltrados.map(prof => (
              <div key={prof.id} className="bloco-sessao" style={{ marginBottom: '0', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <UserCircle size={40} color="var(--primary)" />
                  <div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '16px' }}>{prof.nome}</h3>
                    <span style={{ fontSize: '13px', color: 'var(--text-light)', background: '#f1f5f9', padding: '2px 8px', borderRadius: '12px' }}>
                      {prof.especialidade}
                    </span>
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--text)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Mail size={16} color="var(--text-light)" /> {prof.email || "email@instituicao.com"}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <BookOpen size={16} color="var(--text-light)" /> {prof.totalAlunos} alunos sob responsabilidade
                  </div>
                </div>
                
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button className="btn-acao secundario" style={{ padding: '8px 16px', fontSize: '13px' }}>Ver Perfil</button>
                </div>
              </div>
            ))}
          </div>
          
          {educadoresFiltrados.length === 0 && (
            <div className="empty-state">Nenhum educador encontrado.</div>
          )}
        </main>
      </div>
    </>
  );
}
