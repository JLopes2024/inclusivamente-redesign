import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import StudentManager from "../components/StudentManager";
import "./TelaAdmin.css";

export default function TelaAdmin() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Painel do Administrador</h1>
        <button onClick={handleLogout} className="btn-logout">Sair</button>
      </header>
      
      <main className="admin-content">
        <div className="welcome-card">
          <h2>Bem-vindo, {user?.user || "Admin"}!</h2>
          <p>Visão geral de todos os professores e alunos</p>
        </div>
        
        {/* O Admin tem acesso à lista completa */}
        <StudentManager />
      </main>
    </div>
  );
}