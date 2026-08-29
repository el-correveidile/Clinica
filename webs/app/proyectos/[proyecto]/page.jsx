import Link from "next/link";
import { notFound } from "next/navigation";
import { getProyectos, getProyecto } from "../../../lib/areas";

export function generateStaticParams() {
  return getProyectos().map((p) => ({ proyecto: p.pslug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { proyecto: pslug } = await params;
  const p = getProyecto(pslug);
  if (!p) return {};
  return {
    title: `${p.titulo} · blablaELE`,
    description: p.descripcion,
  };
}

export default async function ProyectoPage({ params }) {
  const { proyecto: pslug } = await params;
  const p = getProyecto(pslug);
  if (!p) notFound();

  return (
    <>
      <header
        className="hero"
        style={{ background: p.color || "linear-gradient(160deg,#C8503C,#A83E2D)" }}
      >
        <div className="wrap">
          <Link className="volver" href="/educacion">← Proyectos educativos</Link>
          <p className="kicker">Proyecto educativo</p>
          <h1>{p.titulo}</h1>
          <p className="lead">{p.descripcion}</p>
        </div>
      </header>

      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow">Qué es</span>
          <h2>El proyecto, en detalle</h2>
          <p className="sub" style={{ maxWidth: "none" }}>{p.detalle}</p>
          {p.puntos?.length > 0 && (
            <ul className="proyecto-puntos">
              {p.puntos.map((punto) => (
                <li key={punto}>{punto}</li>
              ))}
            </ul>
          )}
          <p style={{ marginTop: 32 }}>
            <a
              className="btn btn-primary"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar {p.url.replace("https://", "")} ↗
            </a>
          </p>
        </div>
      </section>

      {p.embed && (
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            <span className="eyebrow">La web, en vivo</span>
            <div className="proyecto" style={{ marginTop: 14 }}>
              <iframe
                src={p.url}
                title={p.titulo}
                loading="lazy"
                style={{ aspectRatio: "16/10", borderTop: "none" }}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
