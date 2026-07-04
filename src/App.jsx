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

function App() {
  return (
    <>
      <Navbar />
      <div id="hero" />
      <Hero />
      <About />
      <Numbers />
      <Problem />
      <div id="metodologia" />
      <Methodology />
      <div id="servicos" />
      <Services />
      <Benefits />
      <div id="resultados" />
      <Testimonials />
      <CTA />
    </>
  );
}

export default App;