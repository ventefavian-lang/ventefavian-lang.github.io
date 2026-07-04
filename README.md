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

## 6. Formulario de contacto (ya está conectado, solo falta tu clave)

El formulario de `contacto.html` ya tiene el código funcional integrado con **Web3Forms** (gratis, hasta 250 envíos al mes). Solo falta que actives tu clave personal:

1. Ve a [web3forms.com](https://web3forms.com)
2. Ingresa el correo donde quieres recibir los mensajes y confirma
3. Te dan una "Access Key" — cópiala
4. Abre `contacto.html`, busca el texto `TU_ACCESS_KEY_AQUI` y reemplázalo por tu clave real
5. Sube el cambio a GitHub

Mientras no hagas esto, el formulario se ve bien pero no enviará nada.

## 8. Cómo conseguir tu propio dominio (barato)

No es obligatorio para empezar, pero ayuda a la aprobación de AdSense y se ve más profesional que `usuario.github.io`.

**Dato importante:** ya no existen dominios gratuitos confiables — servicios como Freenom (que ofrecía dominios .tk/.ml gratis) dejaron de operar. Lo más barato y seguro es comprar uno de bajo costo:

| Registrador | Por qué considerarlo |
|---|---|
| **Porkbun** | Precios bajos, WHOIS privado incluido gratis, panel simple |
| **Namecheap** | Muy usado, buen soporte, promociones frecuentes el primer año |
| **Cloudflare Registrar** | Vende al precio "de fábrica" sin margen — de los más baratos, pero requiere que tu sitio use su DNS |

Un dominio `.com` suele costar entre 8-15 USD al año. Extensiones menos comunes (`.online`, `.site`, `.xyz`) pueden salir más baratas (2-5 USD el primer año) pero se ven menos profesionales para un sitio serio.

**Pasos generales para conectar tu dominio a GitHub Pages:**
1. Compra el dominio en el registrador que elijas
2. En el panel del registrador, busca la sección de DNS y agrega los registros que GitHub indica en su [guía oficial de dominio personalizado](https://docs.github.com/es/pages/configuring-a-custom-domain-for-your-github-pages-site)
3. En tu repositorio: Settings → Pages → "Custom domain", escribe tu dominio y guarda
4. Espera unas horas a que se propague el DNS (a veces toma hasta 24-48 horas)

## 9. Analíticas: cómo saber cuánta gente visita tu sitio

Ya dejamos preparado el espacio para **Google Analytics (GA4)** en todas las páginas. Para activarlo:

1. Ve a [analytics.google.com](https://analytics.google.com) y crea una cuenta gratis
2. Crea una "propiedad" nueva con la URL de tu sitio
3. Te dan un ID de medición con formato `G-XXXXXXXXXX`
4. Busca ese texto (`G-XXXXXXXXXX`) en **todos** los archivos `.html` y reemplázalo por tu ID real (aparece dos veces por archivo, en el bloque de Google Analytics cerca de `</head>`)
5. Sube los cambios a GitHub

Con esto, entras a tu panel de Analytics cuando quieras y ves visitas, de qué país vienen, qué páginas leen más, etc. — en privado, solo tú lo ves.

**Si además quieres un contador público y real** (no inventado) que cualquiera pueda ver:
1. Crea una cuenta gratis en [goatcounter.com](https://www.goatcounter.com) (sin tarjeta de crédito)
2. Sigue sus instrucciones para pegar su script de seguimiento en tu sitio
3. En su panel, activa la opción de "estadísticas públicas"
4. Te dan un link público (algo como `tucuenta.goatcounter.com`) que puedes enlazar desde tu footer si quieres mostrar tráfico real

Preferimos esto sobre un "contador de visitas" genérico de internet porque muchos de esos widgets muestran números falsos o inflados, cargan scripts pesados de sitios de baja calidad, y pueden verse poco confiables ante una revisión de AdSense.

## 10. El archivo ads.txt (para después de la aprobación)

Cuando AdSense te apruebe, Google te va a pedir subir un archivo llamado `ads.txt` en la raíz de tu repositorio, con una sola línea que ellos te dan (algo como `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`). No lo crees antes de tener ese dato real — un `ads.txt` vacío o mal formado puede generar advertencias.

## 11. Checklist final antes de aplicar a AdSense

- [ ] Tienes 15+ artículos publicados (ya vas en 21)
- [ ] El sitio lleva algunas semanas online, no recién subido
- [ ] Reemplazaste `[tu correo de contacto]` por tu correo real en `contacto.html` y `privacidad.html`
- [ ] Reemplazaste `TU_ACCESS_KEY_AQUI` en `contacto.html` por tu clave real de Web3Forms (o el formulario no enviará nada)
- [ ] Todos los links entre artículos funcionan sin error 404
- [ ] Activaste Google Analytics con tu ID real (opcional pero recomendado)
- [ ] Revisaste el sitio completo en el celular, no solo en computadora
- [ ] (Opcional pero recomendado) Ya tienes un dominio propio conectado

Con todo esto listo, el sitio está en buen estado para enviarlo a revisión de AdSense siguiendo los pasos que ya conversamos antes.

