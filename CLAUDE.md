# BlablaELE — contexto del proyecto

## Qué es BlablaELE

BlablaELE es una plataforma web para aprender y enseñar español como lengua extranjera (ELE). El nombre combina "bla bla" (onomatopeya del habla) con ELE (Español como Lengua Extranjera). El lema es **"Hablamos español"**.

La plataforma ofrece recursos culturales —mini webs, materiales de lectura, vídeos, actividades— organizados por **nivel MCER** (B2, C1), **destreza** (comprensión audiovisual, expresión escrita, producción oral) y **tipo de contenido** (Pintura, Poesía, Cine, Música, etc.). El enfoque es la inmersión cultural: los alumnos trabajan la lengua a través del arte, la literatura, el cine y la historia hispánica.

El usuario destinatario es el **profesor de ELE** que busca material para sus clases, y el **alumno autónomo** de nivel intermedio-avanzado.

---

## Cursos activos

### Arte y Sociedad en la cultura hispánica · C1 · 13 sesiones
Curso principal. Sesiones sobre obras y movimientos: Las Meninas, Goya, Picasso, Frida Kahlo, el tango, la Alhambra, el graffiti, el algoritmo y las redes, el muralismo mexicano, Almudena Grandes. Cada sesión tiene: lectura analítica, léxico con definiciones emergentes, preguntas de comentario C1, tarea de escritura, preguntas de debate y referencias.

### Escuela de Poetas · C1 · 7 sesiones
Poesía hispánica de Manrique (s. XV) al slam contemporáneo. Sesiones: Manrique, Lorca, Neruda, Vallejo, Pizarnik, Slam poetry, Antonio Machado. Las sesiones pueden incluir un vídeo embebido (campo `video: { src, titulo }`). Preguntas de nivel C1: requieren análisis semántico/gramatical, intertextualidad, contexto histórico-cultural y argumentación crítica.

### Laboratorio de Cine · B2 · 6 sesiones
Cine español e hispanoamericano. Sesiones: Buñuel, Erice, Saura, Almodóvar, Del Toro, Cine s. XXI. Siempre incluye un fragmento de vídeo de YouTube embebido. Preguntas de nivel B2: más accesibles, mezclan comprensión, interpretación sencilla y opinión personal.

---

## Stack técnico

- **React + Vite** — SPA sin router de librería; toda la navegación es un estado `view` en `App.jsx`
- **CSS-in-JS** con variables CSS definidas en `:root` — sin Tailwind ni Bootstrap
- **Fuentes**: Fraunces (display, `.disp`) y Spectral (cuerpo de texto)
- **Paleta**: `--coral` (#C8503C), `--bermellon` (#B23A22), `--azul` (#27384B), `--verde` (#5A8C6E), `--oro` (#D4A574), `--papel` (#F2EBDD), `--tinta` (#1C1814)

### Archivos clave

| Archivo | Contenido |
|---|---|
| `src/App.jsx` | Componente raíz, todos los componentes, lógica de navegación, CSS global, datos de Arte y Sociedad (`SESIONES`, `METADATA`) |
| `src/sesionesPoesia.js` | `export const SESIONES_POESIA` — datos de los 7 poemas (C1) |
| `src/sesionesCine.js` | `export const SESIONES_CINE` — datos de las 6 películas (B2) |
| `public/` | Imágenes estáticas: logos, portadas de cursos, texturas |

### Navegación (estado `view`)

| Valor de `view` | Vista que se renderiza |
|---|---|
| `null` | Catálogo principal (home) |
| `"curso"` | Portada de Arte y Sociedad |
| `0`–`12` (número) | Sesión N de Arte y Sociedad (índice 0-based) |
| `"poesia"` | Portada de Escuela de Poetas |
| `"poe-N"` (string) | Sesión N de Escuela de Poetas (1-based) |
| `"cine"` | Portada de Laboratorio de Cine |
| `"cine-N"` (string) | Sesión N de Laboratorio de Cine (1-based) |

---

## Estructura de datos de una sesión

### Arte y Sociedad (`SESIONES`)
```js
{ n, titulo, obra, nudo, lectura, lexico[], lexicoDefs{}, comentario[], debate[], referencias[], tarea }
```

### Escuela de Poetas (`SESIONES_POESIA`)
```js
{ n, titulo, autor, periodo, nudo, poema: { titulo, nota, texto }, lectura, lexico[], lexicoDefs{}, comentario[], tarea, debate[], referencias[], video?: { src, titulo } }
```

### Laboratorio de Cine (`SESIONES_CINE`)
```js
{ n, titulo, director, pelicula, año, periodo, nudo, escena: { titulo, nota, descripcion }, lectura, lexico[], lexicoDefs{}, comentario[], tarea, debate[], referencias[], video: { src, titulo } }
```

---

## Criterios pedagógicos

### Nivel C1 (Arte y Sociedad, Escuela de Poetas)
Las preguntas de `comentario` deben exigir análisis lingüístico y crítico, no respuestas personales. Modelo: análisis semántico/gramatical de una construcción concreta, conexión intertextual con otras obras del curso, contexto histórico-cultural, análisis estructural del texto, argumentación con evidencia textual.

### Nivel B2 (Laboratorio de Cine)
Preguntas accesibles: comprensión, interpretación sencilla, opinión fundamentada, conexión personal o comparación con el propio entorno.

### Referencias
Solo usar URLs verificadas. Formatos admitidos: `https://es.wikipedia.org/wiki/...` y `https://www.cervantesvirtual.com/obra-visor/...`. Nunca inventar URLs de artículos.

### Vídeos de YouTube
Formato de embed: `https://www.youtube.com/embed/VIDEO_ID`. Verificar que el ID es real antes de añadirlo.

---

## Convenciones de desarrollo

- Los cursos nuevos siguen el patrón de rutas: `"nombre"` para portada y `"nombre-N"` para sesiones
- Al añadir sesiones, actualizar también: el contador en `RECURSOS` (campo `sesiones`), el badge hardcodeado en la portada del curso y la descripción del catálogo
- No hay tests automatizados — verificar con `npm run build` antes de hacer push
- El proyecto se despliega automáticamente en Vercel desde `main`
