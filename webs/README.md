# webs — hub de servicios para webs.blablaele.com

Sitio estático multipágina que reemplaza al antiguo sitio de HubSpot.

- `index.html` — hub con tres cajas: Educación, IA y desarrollo web,
  Cultura y creación literaria.
- `educacion/`, `ia-y-desarrollo-web/`, `cultura-y-creacion-literaria/` —
  páginas de cada área, donde se irán destacando los servicios.
- `styles.css` — estilos compartidos (identidad blablaELE).
- `vercel.json` — redirección permanente (308)
  `/olimpo-estepona` → `https://webs.blablaele.com/`
  (aplica en cualquier dominio del proyecto, p. ej. web.blablaele.com).

Se despliega en el proyecto de Vercel `clinica-vz34` (Root Directory: `webs`),
independiente del build de Vite de la web principal (raíz de este repo).
