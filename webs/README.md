# webs — hub de servicios para webs.blablaele.com

App **Next.js** (App Router) que reemplaza al antiguo sitio de HubSpot.

- `app/page.jsx` — hub con tres cajas: Educación, IA y desarrollo web,
  Cultura y creación literaria.
- `app/[area]/page.jsx` — página de cada área (SSG), con sus servicios.
- `lib/areas.js` — datos de las áreas y sus servicios: para destacar un
  servicio nuevo, se añade aquí y se despliega.
- `app/globals.css` — estilos compartidos (identidad blablaELE).
- `next.config.mjs` — redirección permanente (308)
  `/olimpo-estepona` → `https://webs.blablaele.com/`
  (aplica en cualquier dominio del proyecto, p. ej. web.blablaele.com).

Desarrollo: `npm install && npm run dev`. Verificación: `npm run build`.

Se despliega en el proyecto de Vercel `clinica-vz34` (Root Directory: `webs`),
independiente del build de Vite de la web principal (raíz de este repo).
