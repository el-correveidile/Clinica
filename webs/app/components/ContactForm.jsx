"use client";

import Script from "next/script";
import { useRef, useState } from "react";

// Clave de sitio de Turnstile. Si no hay variable de entorno configurada se
// usa la clave de PRUEBA oficial de Cloudflare (siempre pasa, solo para dev).
const SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

export default function ContactForm() {
  const [estado, setEstado] = useState("idle");
  const inicioRef = useRef(Date.now());

  async function enviar(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = Object.fromEntries(new FormData(form));
    datos.segundos = Math.round((Date.now() - inicioRef.current) / 1000);

    if (!datos["cf-turnstile-response"]) {
      setEstado("captcha");
      return;
    }

    setEstado("enviando");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      if (!res.ok) throw new Error();
      setEstado("ok");
      form.reset();
    } catch {
      setEstado("error");
    } finally {
      // El token de Turnstile es de un solo uso: hay que regenerarlo.
      if (typeof window !== "undefined" && window.turnstile) {
        window.turnstile.reset();
      }
    }
  }

  if (estado === "ok") {
    return (
      <p className="form-ok">
        Mensaje enviado. Te responderé lo antes posible. ¡Gracias!
      </p>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <form className="form-contacto" onSubmit={enviar}>
        <div className="form-fila">
          <label>
            Nombre
            <input name="nombre" type="text" required maxLength={100} autoComplete="name" />
          </label>
          <label>
            Tu correo
            <input name="email" type="email" required maxLength={200} autoComplete="email" />
          </label>
        </div>
        <label>
          Mensaje
          <textarea name="mensaje" required minLength={10} maxLength={3000} rows={5} />
        </label>
        {/* Honeypot: los humanos no lo ven; los bots lo rellenan */}
        <label className="hp" aria-hidden="true">
          No rellenes este campo
          <input name="empresa" type="text" tabIndex={-1} autoComplete="off" />
        </label>
        <div className="cf-turnstile" data-sitekey={SITE_KEY} data-language="es" />
        <button className="btn btn-primary" type="submit" disabled={estado === "enviando"}>
          {estado === "enviando" ? "Enviando…" : "Enviar mensaje"}
        </button>
        {estado === "captcha" && (
          <p className="form-error">
            Completa la verificación anti-robots antes de enviar.
          </p>
        )}
        {estado === "error" && (
          <p className="form-error">
            No se pudo enviar. Inténtalo de nuevo en unos minutos.
          </p>
        )}
      </form>
    </>
  );
}
