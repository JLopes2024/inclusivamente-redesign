import NavbarAdminProf from "../layout/NavbarAdminProf";
import { User, Bell, Shield, Save } from "lucide-react";
import "./TelaAdmin.css"; 

export default function Configuracoes() {
  const handleSalvar = () => {
    alert("Configurações salvas com sucesso!");
  };

  return (
    <>
      {/* Navbar do Admin */}
      <NavbarAdminProf tipoUsuario="admin" />
      
      <div className="admin-dashboard">
        <header className="admin-header">
          <div>
            <h1>Configurações do Sistema</h1>
            <p>Gerencie preferências, acessos e notificações da plataforma.</p>
          </div>
        </header>
        
        <main className="admin-content" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
          
          {/* SESSÃO 1: PERFIL */}
          <div className="bloco-sessao" style={{ marginBottom: '24px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <User size={24} color="var(--primary)" />
              <h3 style={{ margin: 0, fontSize: '18px' }}>Perfil do Administrador</h3>
            </div>
            
            <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr 1fr' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-light)' }}>Nome da Instituição</label>
                <input 
                  type="text" 
                  defaultValue="Inst" 
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-light)' }}>E-mail de Contato Principal</label>
                <input 
                  type="email" 
                  defaultValue="admin@admin.com.br" 
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }} 
                />
              </div>
            </div>
          </div>

          {/* SESSÃO 2: NOTIFICAÇÕES */}
          <div className="bloco-sessao" style={{ marginBottom: '24px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Bell size={24} color="#d97706" />
              <h3 style={{ margin: 0, fontSize: '18px' }}>Preferências de Alerta</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontSize: '15px' }}>
                <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
                <span>Receber alertas de relatórios PAM atrasados por e-mail</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontSize: '15px' }}>
                <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
                <span>Notificar coordenação quando um novo educador for cadastrado</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontSize: '15px' }}>
                <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                <span>Resumo financeiro e de gestão de unidades (Semanal)</span>
              </label>
            </div>
          </div>

          {/* BOTÃO DE SALVAR */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
            <button 
              className="btn-acao primario" 
              onClick={handleSalvar}
              style={{ padding: '12px 24px', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Save size={18} /> Salvar Alterações
            </button>
          </div>

        </main>
      </div>
    </>
  );
}