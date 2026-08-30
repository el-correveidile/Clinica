import Link from "next/link";
import { notFound } from "next/navigation";
import { AREAS, getArea } from "../../lib/areas";

export function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `${area.titulo} · blablaELE`,
    description: area.resumen,
  };
}

export default async function AreaPage({ params }) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <>
      <header
        className="hero"
        style={{
          background: area.imagen
            ? `${area.velo}, url('${area.imagen}') center/cover no-repeat, ${area.gradiente}`
            : area.gradiente,
        }}
      >
        <div className="wrap">
          <Link className="volver" href="/">← Todas las áreas</Link>
          <p className="kicker">{area.titulo}</p>
          <h1>{area.heroTitulo}</h1>
          <p className="lead">{area.heroTexto}</p>
        </div>
      </header>

      {area.proyectos && (
        <section>
          <div className="wrap">
            <span className="eyebrow">{area.proyectosEyebrow || "Proyectos"}</span>
            <h2>{area.proyectosTitulo || "Webs y plataformas"}</h2>
            <p className="sub">{area.intro}</p>
            <div className="proyectos">
              {area.proyectos.map((p) => (
                <article
                  className={p.destacado ? "proyecto proyecto-destacado" : "proyecto"}
                  key={p.url}
                >
                  <div className="proyecto-cabecera">
                    <div>
                      {p.destacado && <span className="badge-destacado">Destacado</span>}
                      <h3>{p.titulo}</h3>
                      <p>{p.descripcion}</p>
                    </div>
                    <Link className="btn btn-primary" href={`/proyectos/${p.pslug}`}>
                      Conocer el proyecto →
                    </Link>
                  </div>
                  {p.embed ? (
                    <iframe src={p.url} title={p.titulo} loading="lazy" />
                  ) : (
                    <Link
                      className="proyecto-pantalla"
                      href={`/proyectos/${p.pslug}`}
                      style={{ background: p.color || "var(--tinta)" }}
                    >
                      <span>{p.titulo.split("·")[0].trim()}</span>
                      <small>{p.url.replace("https://", "")}</small>
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {area.servicios?.length > 0 && (
      <section>
        <div className="wrap">
          <span className="eyebrow">Servicios destacados</span>
          <h2>Servicios de {area.titulo.toLowerCase()}</h2>
          <p className="sub">
            Iremos destacando aquí los diferentes servicios. Estos son los principales:
          </p>
          <div className="grid">
            {area.servicios.map((s) => (
              <div className="card" key={s.titulo}>
                <span className="num">{s.etiqueta}</span>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
                {s.tags.length > 0 && (
                  <div>
                    {s.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {area.cierre && (
        <section style={{ paddingTop: 0, textAlign: "center" }}>
          <div className="wrap">
            <h2>{area.cierre}</h2>
            <Link className="btn btn-primary" href="/#contacto">
              Ir al formulario de contacto
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
