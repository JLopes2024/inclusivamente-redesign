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

function App() {
  return (
    <Router>
      {/* Navbar presente em todas as rotas para navegação global */}
      <Navbar />
      
      <Routes>
        {/* Rota principal: Renderiza a Landing Page como uma SPA de seção única */}
        <Route path="/" element={
          <>
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
        
        {/* Rota do Painel Administrativo */}
        <Route path="/tela-admin" element={<TelaAdmin />} />
        
        {/* Rota dedicada à Tela do Professor importada da pasta professor/ */}
        <Route path="/tela-professor" element={<TelaProfessor />} />
      </Routes>
    </Router>
  );
}

export default App;