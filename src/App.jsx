import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

// Seções da Home
import Hero from "./sections/Hero";
import SubHero from "./sections/SubHero";
import Problem from "./sections/Problem";
import About from "./sections/About";
import Methodology from "./sections/Methodology";
import Services from "./sections/Services";
import Target from "./sections/Target";
import Differentiators from "./sections/Differentiators";
import CTA from "./sections/CTA";
import Testimonials from "./sections/Testimonials";

// Páginas Extras e Legais
import LoginPage from "./pages/LoginPage";
import Privacidade from "./pages/Privacidade"; 
import Termos from "./pages/Termos";

// Módulo do Professor
import TelaProfessor from "./professor/TelaProfessor";
import AvaliacaoDiaria from "./professor/AvaliacaoDiaria";
import AvaliacaoPratica from "./professor/AvaliacaoPratica";

// Módulo do Administrador
import TelaAdmin from "./admin/TelaAdmin";
import DashEducadores from "./admin/DashEducadores"; // NOVO: Dashboard de Educadores
import DashPam from "./admin/DashPam";               // NOVO: Central PAM
import Configuracoes from "./admin/Configuracoes";   // NOVO: Configurações

// Estilos Globais
import './styles/variabels.css';
import './styles/animations.css';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* ROTA PRINCIPAL: Vitrine de Alta Conversão */}
        <Route path="/" element={
          <>
            <Navbar /> 
            
            <section id="hero"><Hero /></section>
            <SubHero />
            <Problem />
            <About />
            <section id="metodologia"><Methodology /></section>
            <Services />
            <Target />
            <section id="diferentiators"><Differentiators /></section>
            <Testimonials/>
            <CTA />
            
            <Footer />
          </>
        } />
        
        {/* ROTAS DE AUTENTICAÇÃO */}
        <Route path="/login" element={<LoginPage />} />

        {/* ROTAS DO ADMINISTRADOR (Painel Completo) */}
        <Route path="/admin" element={<TelaAdmin />} />
        <Route path="/admin/educadores" element={<DashEducadores />} />
        <Route path="/admin/pam" element={<DashPam />} />
        <Route path="/admin/configuracoes" element={<Configuracoes />} />

        {/* ROTAS DO PROFESSOR */}
        <Route path="/professor" element={<TelaProfessor />} />
        <Route path="/professor/avaliacao-diaria" element={<AvaliacaoDiaria />} />
        <Route path="/professor/avaliacao-pratica" element={<AvaliacaoPratica />} />

     {/* ROTAS LEGAIS */}
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />

        <Route path="/termos" element={
          <>
            <Navbar />
            <Termos />
            <Footer />
          </>
        } />
        
        {/* ROTA CORINGA: Se digitar um link errado, volta pra Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;