# RutaBeca — guía de publicación

Este proyecto es un sitio estático (HTML + CSS, sin backend) listo para publicar
gratis en GitHub Pages. Contiene:

- `index.html` — página de inicio
- `finanzas.html`, `becas.html`, `carrera.html` — páginas de categoría
- `articulo-ahorro.html`, `articulo-becas-2026.html`, `articulo-carreras.html` — 3 artículos completos
- `sobre-nosotros.html`, `contacto.html`, `privacidad.html` — páginas requeridas para AdSense
- `css/styles.css` — todo el diseño

## 1. Publicarlo gratis con GitHub Pages

1. Crea una cuenta en [github.com](https://github.com) si no tienes una.
2. Crea un repositorio nuevo, público, con el nombre que quieras (ej. `rutabeca`).
3. Sube todos los archivos de esta carpeta al repositorio (puedes arrastrar los
   archivos directamente desde la interfaz web de GitHub con "Add file" →
   "Upload files").
4. Entra a **Settings → Pages** dentro del repositorio.
5. En "Source", elige la rama `main` y la carpeta `/ (root)`. Guarda.
6. En 1-2 minutos tu sitio estará disponible en:
   `https://tu-usuario.github.io/rutabeca/`

Cuando quieras un dominio propio (ej. `rutabeca.com`), lo compras en un
registrador (Namecheap, Google Domains/Squarespace, etc. — cuesta ~10-15
USD/año) y lo conectas a GitHub Pages desde la misma sección de Settings
→ Pages, opción "Custom domain". Esto no es obligatorio para empezar, pero
ayuda a que AdSense apruebe el sitio más rápido y se ve más profesional.

## 2. Antes de aplicar a Google AdSense

Google exige, como mínimo:
- Contenido original suficiente (recomendado: **15-20 artículos** publicados, no 3)
- Páginas de "Sobre nosotros", "Contacto" y "Política de privacidad" (ya están incluidas)
- Un sitio funcional, rápido, sin enlaces rotos
- Que el sitio tenga algo de tiempo online (no es instantáneo)

**No apliques todavía.** Con solo 3 artículos, es casi seguro que te rechacen.
Usa el calendario de abajo para llegar a 15-20 publicaciones primero.

## 3. Calendario de contenido (1 publicación por semana)

Ya tienes 3 escritas. Aquí van 17 temas más, organizados por categoría, para
que no tengas que pensar el tema cada semana — solo escribir:

**Finanzas**
1. Tarjetas de crédito para principiantes: cómo elegir la primera sin caer en deuda
2. Diferencia entre ahorrar e invertir (y por qué no es lo mismo)
3. Cómo armar un presupuesto con ingresos irregulares (freelance, propinas, medio tiempo)
4. Errores financieros comunes en el primer año de universidad
5. Préstamos estudiantiles en Perú: qué preguntar antes de firmar uno
6. Cómo leer el estado de cuenta de tu tarjeta o cuenta bancaria sin que te sorprendan los cobros

**Becas**
7. Cómo escribir una carta de motivación que no suene genérica
8. Becas para estudios de posgrado: diferencias con las de pregrado
9. Qué hacer si te rechazan una beca (y cómo volver a postular mejor preparado)
10. Becas nacionales vs. becas internacionales: ventajas y desventajas reales
11. Cómo conseguir buenas cartas de recomendación (pedidas con tiempo y bien)
12. Certificaciones de idioma más aceptadas para becas: cuál rinde según tu meta

**Carrera**
13. Cómo armar un portafolio o CV cuando aún no tienes experiencia laboral
14. Prácticas pre-profesionales: qué preguntar antes de aceptar una
15. Carreras técnicas vs. universitarias: cuándo tiene sentido cada una
16. Habilidades blandas que más piden los empleadores (y cómo demostrarlas, no solo mencionarlas)
17. Cómo prepararte para tu primera entrevista de trabajo

Puedes reordenar estos temas según lo que te resulte más fácil de escribir
primero, o pedirme que te ayude a redactar cualquiera de ellos cuando quieras.

## 4. Cómo agregar una publicación nueva

1. Duplica uno de los archivos `articulo-*.html` existentes.
2. Cambia el `<title>`, la meta descripción, el `<h1>`, la etiqueta `stamp`
   (finanzas / becas / carrera) y el contenido del `<article class="article-body">`.
3. Agrega una tarjeta nueva en `index.html` y en la página de categoría
   correspondiente (`finanzas.html`, `becas.html` o `carrera.html`), copiando
   el bloque `<a href="..." class="card">...</a>` y ajustando el enlace, título
   y descripción.
4. Sube el archivo nuevo y los cambios a GitHub (Settings → Pages se actualiza solo).

## 5. Activar los anuncios cuando AdSense te apruebe

Cada archivo `.html` tiene comentarios marcando dónde va el código:

- El script de verificación de Google va justo antes de `</head>` en cada página
  (puedes copiarlo y pegarlo en todas, o usar un script que lo inserte
  automáticamente si más adelante migras a una plantilla dinámica).
- Cada `<div class="ad-placeholder">...</div>` debe reemplazarse por el bloque
  `<ins class="adsbygoogle">` que te da Google para cada "unidad de anuncio"
  que crees en tu panel de AdSense.

No actives los anuncios en el sitio hasta que tu cuenta esté aprobada — mostrar
anuncios de otro proveedor o simular anuncios propios antes de la aprobación
puede afectar la revisión.

## 6. Formulario de contacto (opcional, gratis)

El formulario de `contacto.html` es solo visual por ahora. Para que envíe
correos reales sin programar un backend, la opción más simple y gratuita es:

1. Crea una cuenta gratis en [formspree.io](https://formspree.io) o
   [web3forms.com](https://web3forms.com)
2. Sigue sus instrucciones para obtener tu "endpoint" (una URL única)
3. Reemplaza `action="#"` en el `<form>` de `contacto.html` por esa URL

## 7. Ideas para cuando ya tengas tráfico

- Revisa qué artículos generan más visitas (Google Search Console, gratis) y
  escribe más contenido relacionado a esos temas.
- Agrega enlaces internos entre artículos relacionados (ya hay algunos de ejemplo).
- Considera migrar de HTML estático a algo como WordPress o un generador de
  sitios (Hugo, Astro) solo si el volumen de artículos empieza a ser difícil
  de mantener a mano — no hace falta antes de eso.
