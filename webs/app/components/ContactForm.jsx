"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const [estado, setEstado] = useState("idle");
  const inicioRef = useRef(Date.now());

  async function enviar(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = Object.fromEntries(new FormData(form));
    datos.segundos = Math.round((Date.now() - inicioRef.current) / 1000);
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
      <button className="btn btn-primary" type="submit" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando…" : "Enviar mensaje"}
      </button>
      {estado === "error" && (
        <p className="form-error">
          No se pudo enviar. Inténtalo de nuevo en unos minutos.
        </p>
      )}
    </form>
  );
}
