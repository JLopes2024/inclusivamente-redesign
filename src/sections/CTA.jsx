import Button from "../components/Button";

export default function CTA() {

  return (
    <section className="cta">

      <div className="container cta-box">

        <h2>
          Vamos construir uma escola verdadeiramente inclusiva?
        </h2>

        <p>
          Fale com nossa equipe e descubra como aplicar nossa metodologia na sua instituição.
        </p>

        <div className="cta-buttons">

          <Button>
            Solicitar apresentação
          </Button>

          <Button variant="secondary">
            Falar com especialista
          </Button>

        </div>

      </div>

    </section>
  );
}