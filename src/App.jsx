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

// Páginas Extras
import LoginPage from "./pages/LoginPage";
// Importe as duas páginas novas aqui (ajuste o caminho da pasta conforme você criou)
import Privacidade from "./pages/Privacidade"; 
import Termos from "./pages/Termos";

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
            
            {/*TESTEMUNHOS*/}
            <Testimonials/>
            
            <CTA />
            
            <Footer />
          </>
        } />
        
        <Route path="/login" element={<LoginPage />} />

        {/* NOVAS ROTAS: Páginas Legais */}
        <Route path="/privacidade" element={
          <>
            <Navbar />
            <Privacidade />
            <Footer />
          </>
        } />

        <Route path="/termos" element={
          <>
            <Navbar />
            <Termos />
            <Footer />
          </>
        } />
        
        {/* ROTA CORINGA: Se a cliente digitar um link errado, volta pra Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;