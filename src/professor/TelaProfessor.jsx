import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import StudentManager from "../components/StudentManager"; // Importando o novo componente
import "./TelaProfessor.css";

export default function TelaProfessor() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="prof-dashboard">
      <header className="prof-header">
        <h1>Painel do Professor</h1>
        <button onClick={handleLogout} className="btn-logout">Sair</button>
      </header>
      
      <main className="prof-content">
        <div className="welcome-card">
          <h2>Bem-vindo, {user?.user || "Professor"}!</h2>
          <p>Gerenciamento de alunos</p>
        </div>
        
        {/* Integração do gerenciador com filtro */}
        <StudentManager />
      </main>
    </div>
  );
}