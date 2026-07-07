import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// Importando as páginas de dashboard
import TelaProfessor from "./professor/TelaProfessor"; 
import TelaAdmin from "./admin/TelaAdmin";
import DashEducadores from "./admin/DashEducadores"; // <- Adicionar
import DashPam from "./admin/DashPam";
import Configuracoes from "./admin/Configuracoes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota principal com a Navbar presa apenas nela */}
        <Route path="/" element={
          <>
            <Navbar /> {/* <-- Cole ela aqui dentro! */}
            <section id="hero"><Hero /></section>
            <About />
            <Numbers />
            <Problem />
            <section id="metodologia"><Methodology /></section>
            <section id="servicos"><Services /></section>
            <Benefits />
            <section id="resultados"><Testimonials /></section>
            <CTA />
          </>
        } />
        
        {/* Rota dedicada ao Login Profissional */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Rota do Painel Administrativo (Livre da Navbar antiga) */}
        <Route path="/tela-admin" element={<TelaAdmin />} />
        
        {/* Rota dedicada à Tela do Professor */}
        <Route path="/tela-professor" element={<TelaProfessor />} />

        <Route path="/dash-educadores" element={<DashEducadores />} />
        <Route path="/dash-pam" element={<DashPam />} />
        <Route path="/tela-admin/configuracoes" element={<Configuracoes />} />
      </Routes>
    </Router>
  );
}

export default App;