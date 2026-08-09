import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp"; 
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";

// Seções da Home (Mantidas normais para renderização imediata da vitrine)
import Hero from "./sections/Hero";
import InfiniteTicker from "./components/InfiniteTicker";
import SubHero from "./sections/SubHero";
import Problem from "./sections/Problem";
import About from "./sections/About";
import Methodology from "./sections/Methodology";
import Services from "./sections/Services";
import Target from "./sections/Target";
import Differentiators from "./sections/Differentiators";
import CTA from "./sections/CTA";
import Testimonials from "./sections/Testimonials";

// Estilos Globais
import './styles/variabels.css';
import './styles/animations.css';
import './styles/globals.css';

// ==========================================
// CODE SPLITTING (LAZY LOADING) DAS ROTAS INTERNAS E LEGAIS
// ==========================================
const LoginPage = lazy(() => import("./pages/LoginPage"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const Termos = lazy(() => import("./pages/Termos"));

// Painel do Professor
const TelaProfessor = lazy(() => import("./professor/TelaProfessor"));
const AvaliacaoDiaria = lazy(() => import("./professor/AvaliacaoDiaria"));
const AvaliacaoPratica = lazy(() => import("./professor/AvaliacaoPratica"));

// Painel Admin
const TelaAdmin = lazy(() => import("./admin/TelaAdmin"));
const DashEducadores = lazy(() => import("./admin/DashEducadores"));
const DashPam = lazy(() => import("./admin/DashPam"));
const Configuracoes = lazy(() => import("./admin/Configuracoes"));

// Componente simples de Loading para as rotas Lazy
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--primary)' }}>
    <h2 style={{ color: 'white' }}>Carregando...</h2>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* ROTA PRINCIPAL: Vitrine de Alta Conversão */}
          <Route path="/" element={
            <>
              {/* COMPONENTE SEO: Título, Descrição e Imagem para Compartilhamento */}
              <SEO 
                title="InclusivaMente | Assessoria e Consultoria Pedagógica"
                description="Especialistas em soluções pedagógicas inclusivas, integrando saúde, educação e desenvolvimento humano através da metodologia MOVer."
                image="/banner-compartilhamento.jpg" 
                url="https://inclusivamente.com.br"
              />
              
              <Navbar /> 
              <section id="hero"><Hero /></section>
              <InfiniteTicker />
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
              <FloatingWhatsApp />
            </>
          } />
          
          {/* TODAS AS OUTRAS ROTAS AGORA USAM SUSPENSE PARA LAZY LOADING */}
          <Route path="/login" element={<Suspense fallback={<PageLoader />}><LoginPage /></Suspense>} />
          
          <Route path="/admin" element={<Suspense fallback={<PageLoader />}><TelaAdmin /></Suspense>} />
          <Route path="/admin/educadores" element={<Suspense fallback={<PageLoader />}><DashEducadores /></Suspense>} />
          <Route path="/admin/pam" element={<Suspense fallback={<PageLoader />}><DashPam /></Suspense>} />
          <Route path="/admin/configuracoes" element={<Suspense fallback={<PageLoader />}><Configuracoes /></Suspense>} />
          
          <Route path="/professor" element={<Suspense fallback={<PageLoader />}><TelaProfessor /></Suspense>} />
          <Route path="/professor/avaliacao-diaria" element={<Suspense fallback={<PageLoader />}><AvaliacaoDiaria /></Suspense>} />
          <Route path="/professor/avaliacao-pratica" element={<Suspense fallback={<PageLoader />}><AvaliacaoPratica /></Suspense>} />
          
          <Route path="/privacidade" element={<Suspense fallback={<PageLoader />}><Privacidade /></Suspense>} />
          <Route path="/termos" element={<Suspense fallback={<PageLoader />}><Termos /></Suspense>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;