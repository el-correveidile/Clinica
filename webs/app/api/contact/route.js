// El correo de destino solo existe en el servidor: nunca llega al navegador.
const DESTINO = "informa@blablaele.com";

// Clave secreta de Turnstile. Si no hay variable de entorno configurada se
// usa la clave de PRUEBA oficial de Cloudflare (siempre pasa, solo para dev).
const TURNSTILE_SECRET =
  process.env.TURNSTILE_SECRET_KEY || "1x0000000000000000000000000000000AA";

async function verificarTurnstile(token, ip) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: TURNSTILE_SECRET,
        response: token,
        remoteip: ip,
      }),
    }
  );
  if (!res.ok) return false;
  const data = await res.json();
  return data.success === true;
}

export async function POST(request) {
  let datos;
  try {
    datos = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const { nombre, email, mensaje, empresa, segundos } = datos ?? {};
  const token = datos?.["cf-turnstile-response"];

  // Honeypot relleno o envío en menos de 3 segundos: casi seguro un bot.
  // Respondemos 200 para no darle pistas, pero no se envía nada.
  if (empresa || (typeof segundos === "number" && segundos < 3)) {
    return Response.json({ ok: true });
  }

  if (
    typeof nombre !== "string" || !nombre.trim() || nombre.length > 100 ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof mensaje !== "string" || mensaje.trim().length < 10 || mensaje.length > 3000 ||
    typeof token !== "string" || !token
  ) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (!(await verificarTurnstile(token, ip))) {
    return Response.json({ ok: false, error: "captcha" }, { status: 403 });
  }

  const enviado = process.env.BREVO_API_KEY
    ? await enviarPorBrevo({ nombre, email, mensaje })
    : await enviarPorFormSubmit({ nombre, email, mensaje });

  if (!enviado) {
    return Response.json({ ok: false }, { status: 502 });
  }
  return Response.json({ ok: true });
}

// Vía preferida: API transaccional de Brevo (requiere BREVO_API_KEY en Vercel).
async function enviarPorBrevo({ nombre, email, mensaje }) {
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: "Formulario webs.blablaele.com", email: DESTINO },
      to: [{ email: DESTINO }],
      replyTo: { email: email.trim(), name: nombre.trim() },
      subject: "Nuevo mensaje desde webs.blablaele.com",
      htmlContent: `<h3>Nuevo mensaje del formulario</h3>
        <p><strong>Nombre:</strong> ${escaparHtml(nombre.trim())}</p>
        <p><strong>Correo:</strong> ${escaparHtml(email.trim())}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escaparHtml(mensaje.trim()).replace(/\n/g, "<br/>")}</p>`,
    }),
  });
  return res.ok;
}

// Respaldo sin clave: FormSubmit (requiere confirmar un email de activación).
async function enviarPorFormSubmit({ nombre, email, mensaje }) {
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
  return res.ok;
}

function escaparHtml(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
