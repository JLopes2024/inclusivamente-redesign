import { useState } from "react";
import { dataProfessor } from "../data/dataProfessor";
import { dataAluno } from "../data/dataAlunos";
import NavbarAdminProf from "../layout/NavbarAdminProf";
import { Search, Plus, UserCircle, Mail, BookOpen, X, CheckCircle2 } from "lucide-react";
import "./TelaAdmin.css"; 

export default function DashEducadores() {
  const [busca, setBusca] = useState("");
  // Estado para controlar se o modal está aberto ou fechado
  const [modalAberto, setModalAberto] = useState(false); 

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
          
          {/* O botão da sua imagem agora aciona o Modal */}
          <button 
            onClick={() => setModalAberto(true)}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '8px', 
              backgroundColor: 'var(--secondary)', /* Cor verde água da imagem */
              color: '#ffffff', border: 'none', padding: '12px 24px', 
              borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer',
              transition: 'transform 0.2s', boxShadow: '0 4px 12px rgba(43, 187, 173, 0.2)'
            }}
          >
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

      {/* ==========================================
          MODAL DE CADASTRO PREMIUM (Fica oculto até clicar)
          ========================================== */}
      {modalAberto && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(6px)', // Fundo escuro com blur
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999
        }}>
          
          {/* Card do Modal */}
          <div style={{
            background: '#ffffff', width: '100%', maxWidth: '550px',
            borderRadius: '20px', padding: '40px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            position: 'relative'
          }}>
            
            {/* Cabeçalho do Modal */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <h2 style={{ margin: 0, color: 'var(--primary)', fontSize: '24px', fontWeight: '800' }}>Adicionar Educador</h2>
                <p style={{ margin: '8px 0 0 0', color: 'var(--text-light)', fontSize: '15px' }}>
                  Preencha os dados abaixo para cadastrar um novo profissional na InclusivaMente.
                </p>
              </div>
              
              <button 
                onClick={() => setModalAberto(false)} 
                style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', padding: '8px', cursor: 'pointer', color: 'var(--text-light)' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Formulário Simulado */}
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              alert("Educador cadastrado com sucesso! (Isso é uma simulação)"); 
              setModalAberto(false); 
            }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>Nome Completo</label>
                  <input type="text" placeholder="Ex: Dra. Ana Beatriz" required style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid var(--border)', outline: 'none', fontSize: '15px' }} />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>E-mail Institucional</label>
                  <input type="email" placeholder="email@inclusivamente.com.br" required style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid var(--border)', outline: 'none', fontSize: '15px' }} />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>Especialidade</label>
                    <select required style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid var(--border)', outline: 'none', background: '#fff', fontSize: '15px', color: 'var(--text)' }}>
                      <option value="">Selecione...</option>
                      <option value="psicopedagogia">Psicopedagogia</option>
                      <option value="psicomotricidade">Psicomotricidade</option>
                      <option value="educacao_fisica">Educação Física Adaptada</option>
                      <option value="fonoaudiologia">Fonoaudiologia</option>
                    </select>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>Senha Provisória</label>
                    <input type="text" defaultValue="inclui@2026" readOnly style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid var(--border)', background: '#f8fafc', color: 'var(--text-light)', outline: 'none', fontSize: '15px', fontWeight: '500' }} />
                  </div>
                </div>
              </div>

              {/* Botões do Rodapé */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button 
                  type="button" 
                  onClick={() => setModalAberto(false)} 
                  style={{ padding: '14px 24px', borderRadius: '10px', border: '1px solid var(--border)', background: '#ffffff', color: 'var(--text)', fontWeight: '600', cursor: 'pointer', fontSize: '15px' }}
                >
                  Cancelar
                </button>
                
                <button 
                  type="submit" 
                  style={{ padding: '14px 28px', borderRadius: '10px', border: 'none', background: 'var(--primary)', color: '#ffffff', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', boxShadow: '0 4px 12px rgba(16, 39, 90, 0.2)' }}
                >
                  <CheckCircle2 size={20} /> Finalizar Cadastro
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  );
}