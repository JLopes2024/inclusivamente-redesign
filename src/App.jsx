import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

// Componentes Globais e Públicos
import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Numbers from "./sections/Numbers";
import Problem from "./sections/Problem";
import Methodology from "./sections/Methodology";
import Services from "./sections/Services";
import Benefits from "./sections/Benefits";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import LoginPage from "./pages/LoginPage";

// Componentes do Sistema (Painéis)
import NavbarDashboard from "./layout/NavbarDashboard"; // <- Ajuste o caminho se necessário
import TelaProfessor from "./professor/TelaProfessor"; 
import TelaAdmin from "./admin/TelaAdmin";

/* =========================================
   GUARDIÃO DE ROTAS (PROTECTED ROUTE)
   ========================================= */
// Este componente intercepta o acesso. Se não houver usuário, joga para o login.
const ProtectedRoute = ({ children, cargoRequerido }) => {
  const user = useAuthStore((state) => state.user);

  // 1. Bloqueio de Não Logados
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Bloqueio de Nível de Acesso (Opcional)
  // Descomente e ajuste de acordo com a estrutura do seu objeto 'user'
  /*
  if (cargoRequerido && user.cargo !== cargoRequerido) {
    alert("Acesso negado: Você não tem permissão para acessar esta área.");
    return <Navigate to="/login" replace />;
  }
  */

  // Se passou em todos os testes, renderiza a tela solicitada
  return children;
};

/* =========================================
   LAYOUTS BASE
   ========================================= */
// Layout para a Landing Page (Usa a Navbar de Marketing)
const PublicLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

// Layout para os Painéis (Usa a Navbar do Dashboard)
const DashboardLayout = ({ children }) => (
  <>
    <NavbarDashboard />
    <main className="dashboard-container">{children}</main>
  </>
);

/* =========================================
   APP CORE
   ========================================= */
function App() {
  return (
    <Router>
      <Routes>
        
        {/* ROTAS PÚBLICAS (Abertas para a Internet) */}
        <Route path="/" element={
          <PublicLayout>
            <section id="hero"><Hero /></section>
            <About />
            <Numbers />
            <Problem />
            <section id="metodologia"><Methodology /></section>
            <section id="servicos"><Services /></section>
            <Benefits />
            <section id="resultados"><Testimonials /></section>
            <CTA />
          </PublicLayout>
        } />
        
        {/* O login não precisa da Navbar de marketing, fica isolado */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* ROTAS PRIVADAS E BLINDADAS (Exigem Autenticação) */}
        <Route path="/tela-admin" element={
          <ProtectedRoute cargoRequerido="admin">
            <DashboardLayout>
              <TelaAdmin />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/tela-professor" element={
          <ProtectedRoute cargoRequerido="professor">
            <DashboardLayout>
              <TelaProfessor />
            </DashboardLayout>
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
}

export default App;