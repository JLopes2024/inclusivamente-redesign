import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import SubHero from "./sections/SubHero";
import About from "./sections/About";
import Numbers from "./sections/Differentiators";
import Problem from "./sections/Problem";
import Methodology from "./sections/Methodology";
import Services from "./sections/Services";
import Benefits from "./sections/Benefits";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Target from "./sections/Target";
import LoginPage from "./pages/LoginPage";

// Mantenha as importações comentadas para quando for fechar a venda do Admin!
/*
import TelaProfessor from "./professor/TelaProfessor"; 
import TelaAdmin from "./admin/TelaAdmin";
import DashEducadores from "./admin/DashEducadores"; 
import DashPam from "./admin/DashPam";
import Configuracoes from "./admin/Configuracoes";
*/

import './styles/variabels.css';
import './styles/animations.css';
import './styles/globals.css';
import Differentiators from "./sections/Differentiators";

function App() {
  return (
    <Router>
      <Routes>
        {/* ROTA PRINCIPAL: A vitrine que foi vendida */}
        <Route path="/" element={
          <>
            <Navbar /> 
            <section id="hero"><Hero /></section>
            <SubHero />
            <About />
            <Target />
            <Differentiators />
            <Problem />
            <section id="metodologia"><Methodology /></section>
            <Benefits />
            <section id="resultados"><Testimonials /></section>
            <CTA />
            <Footer />
          </>
        } />
        
        {/* Rota do Login (Pode servir como um "Em breve" ou área restrita básica) */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* ROTAS FUTURAS (Comentadas para não vazar na entrega atual) */}
        {/* 
        <Route path="/tela-admin" element={<TelaAdmin />} />
        <Route path="/tela-professor" element={<TelaProfessor />} />
        <Route path="/dash-educadores" element={<DashEducadores />} />
        <Route path="/dash-pam" element={<DashPam />} />
        <Route path="/tela-admin/configuracoes" element={<Configuracoes />} />
        */}

        {/* ROTA CORINGA: Se a cliente digitar um link errado, volta pra Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;