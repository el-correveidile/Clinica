import Link from "next/link";
import { AREAS } from "../lib/areas";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <header
        className="hero"
        style={{ background: "linear-gradient(rgba(200,80,60,.92),rgba(168,62,45,.94)), #C8503C" }}
      >
        <div className="wrap">
          <p className="kicker">blablaELE — Hablamos español</p>
          <h1>Tres caminos, un mismo proyecto</h1>
          <p className="lead">
            Enseñanza del español, tecnología al servicio del aula y creación cultural.
            Elige por dónde quieres empezar.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="cajas">
            {AREAS.map((area) => (
              <Link key={area.slug} className="caja" href={`/${area.slug}`} style={{ background: area.gradiente }}>
                <div>
                  <span className="caja-num">{area.num}</span>
                  <h3>{area.titulo}</h3>
                  <p>{area.resumen}</p>
                </div>
                <span className="caja-cta">Explorar →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Contacto</span>
          <h2>¿Hablamos?</h2>
          <p className="sub">
            Cuéntame qué necesitas y te respondo lo antes posible.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
