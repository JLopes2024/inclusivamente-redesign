import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogOut, LayoutDashboard, Users, FileBarChart, Settings, Home } from "lucide-react";
import "./NavbarAdminProf.css";

export default function NavbarAdminProf({ tipoUsuario }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/login");
  };

  // ==========================================
  // RENDERIZAÇÃO: NAVBAR DO PROFESSOR
  // ==========================================
  if (tipoUsuario === "professor") {
    return (
      <nav className="navbar-sistema navbar-professor">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">Inclusiva<strong>Mente</strong></span>
          </Link>
        </div>
        
        <div className="navbar-actions">
          <button onClick={handleLogout} className="btn-logout-nav">
            Sair <LogOut size={18} />
          </button>
        </div>
      </nav>
    );
  }

  // ==========================================
  // RENDERIZAÇÃO: NAVBAR DO ADMIN
  // ==========================================
  if (tipoUsuario === "admin") {
    return (
      <nav className="navbar-sistema navbar-admin">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">Inclusiva<strong>Mente</strong> <span className="tag-admin">Admin</span></span>
          </Link>
        </div>

        {/* Menu robusto de navegação para o Admin */}
        <ul className="navbar-links">
          <li>
            <Link 
              to="/tela-admin" 
              className={`nav-item ${location.pathname === "/tela-admin" ? "ativo" : ""}`}
            >
              <LayoutDashboard size={18} /> Visão Geral
            </Link>
          </li>
          <li>
            {/* Rota atualizada para DashEducadores */}
            <Link 
              to="/dash-educadores" 
              className={`nav-item ${location.pathname.includes("/dash-educadores") ? "ativo" : ""}`}
            >
              <Users size={18} /> Educadores
            </Link>
          </li>
          <li>
            {/* Rota atualizada para DashPam */}
            <Link 
              to="/dash-pam" 
              className={`nav-item ${location.pathname.includes("/dash-pam") ? "ativo" : ""}`}
            >
              <FileBarChart size={18} /> Relatórios PAM
            </Link>
          </li>
          <li>
            <Link 
              to="/tela-admin/configuracoes" 
              className={`nav-item ${location.pathname.includes("/configuracoes") ? "ativo" : ""}`}
            >
              <Settings size={18} /> Configurações
            </Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <Link to="/" className="btn-icon" title="Voltar ao Site">
            <Home size={20} />
          </Link>
          <button onClick={handleLogout} className="btn-logout-nav">
            Sair <LogOut size={18} />
          </button>
        </div>
      </nav>
    );
  }

  return null;
}