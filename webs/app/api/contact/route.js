// El correo de destino solo existe en el servidor: nunca llega al navegador.
const DESTINO = "informa@blablaele.com";

export async function POST(request) {
  let datos;
  try {
    datos = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const { nombre, email, mensaje, empresa, segundos } = datos ?? {};

  // Honeypot relleno o envío en menos de 3 segundos: casi seguro un bot.
  // Respondemos 200 para no darle pistas, pero no se envía nada.
  if (empresa || (typeof segundos === "number" && segundos < 3)) {
    return Response.json({ ok: true });
  }

  if (
    typeof nombre !== "string" || !nombre.trim() || nombre.length > 100 ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof mensaje !== "string" || mensaje.trim().length < 10 || mensaje.length > 3000
  ) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const res = await fetch(`https://formsubmit.co/ajax/${DESTINO}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: nombre.trim(),
      email: email.trim(),
      message: mensaje.trim(),
      _subject: "Nuevo mensaje desde webs.blablaele.com",
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!res.ok) {
    return Response.json({ ok: false }, { status: 502 });
  }
  return Response.json({ ok: true });
}
