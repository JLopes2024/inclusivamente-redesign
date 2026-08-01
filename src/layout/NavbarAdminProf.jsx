import { Link, useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, FileText, Settings, Home, LogOut } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
// Importe seu CSS correspondente aqui (ajuste o caminho se necessário)
import "./NavbarAdminProf.css"; 

export default function NavbarAdminProf({ tipoUsuario }) {
  const navigate = useNavigate();
  const location = useLocation(); // Pega a URL atual para sabermos qual menu deixar "ativo"
  
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout(); // Limpa o estado global
    navigate("/login"); // Manda de volta pro login
  };

  return (
    <nav className="navbar-admin" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
      
      {/* 1. LOGO E BADGE */}
      <div className="navbar-admin-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary)' }}>InclusivaMente</span>
        <span style={{ fontSize: '10px', background: '#fee2e2', color: '#ef4444', padding: '4px 8px', borderRadius: '12px', fontWeight: 'bold' }}>
          {tipoUsuario === 'admin' ? 'ADMIN' : 'PROFESSOR'}
        </span>
      </div>

      {/* 2. MENUS DE NAVEGAÇÃO (Com React Router) */}
      <div className="navbar-admin-links" style={{ display: 'flex', gap: '24px' }}>
        <Link 
          to="/admin" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: location.pathname === "/admin" ? "var(--primary)" : "var(--text-light)", fontWeight: location.pathname === "/admin" ? "600" : "400" }}
        >
          <LayoutDashboard size={18} /> Visão Geral
        </Link>
        
        <Link 
          to="/admin/educadores" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: location.pathname === "/admin/educadores" ? "var(--primary)" : "var(--text-light)", fontWeight: location.pathname === "/admin/educadores" ? "600" : "400" }}
        >
          <Users size={18} /> Educadores
        </Link>
        {/*
        <Link 
          to="/admin/pam" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: location.pathname === "/admin/pam" ? "var(--primary)" : "var(--text-light)", fontWeight: location.pathname === "/admin/pam" ? "600" : "400" }}
        >
          <FileText size={18} /> Relatórios PAM
        </Link>

        */}
                
        <Link 
          to="/admin/configuracoes" 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: location.pathname === "/admin/configuracoes" ? "var(--primary)" : "var(--text-light)", fontWeight: location.pathname === "/admin/configuracoes" ? "600" : "400" }}
        >
          <Settings size={18} /> Configurações
        </Link>
      </div>

      {/* 3. AÇÕES (Home e Sair) */}
      <div className="navbar-admin-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Link to="/" title="Voltar para o site" style={{ color: 'var(--text-light)' }}>
          <Home size={20} />
        </Link>
        
        <button 
          onClick={handleLogout} 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1px solid #fecaca', color: '#ef4444', padding: '6px 16px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' }}
        >
          Sair <LogOut size={16} />
        </button>
      </div>
      
    </nav>
  );
}