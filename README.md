# RutaBeca

Plataforma educativa independiente para explorar becas, comprender requisitos, practicar y organizar una postulación. No usa inteligencia artificial ni requiere una cuenta para las funciones incluidas.

## Qué incluye

- Portada profesional y adaptable a celulares.
- Explorador de seis programas de becas con fuentes oficiales.
- Guía extensa de Beca 18.
- Test orientativo sin datos personales.
- Academia de comprensión lectora y razonamiento matemático.
- Simulacro con explicaciones y mejor marca guardada localmente.
- Ruta personal de ocho etapas y becas guardadas en el dispositivo.
- Directorio inicial de universidades con filtros.
- Calendario de etapas sin inventar fechas futuras.
- Guía de documentos y seguridad.
- Metodología editorial, correcciones, privacidad, términos, contacto y política publicitaria.
- `robots.txt` y `sitemap.xml` generados con el dominio real de la visita.
- Integración de AdSense desactivada hasta configurar identificadores válidos.

## Ejecutar el proyecto

Requiere Node.js 22.13 o superior.

```bash
npm run install:ci
npm run dev
```

Para compilar:

```bash
npm run build
```

## Configuración antes de publicar

Copia `.env.example` como `.env.local` y completa como mínimo:

```env
NEXT_PUBLIC_CONTACT_EMAIL=tu-correo-real@dominio.com
```

No solicites revisión de AdSense hasta tener un correo real, dominio público, contenido revisado y enlaces funcionando.

## Activar AdSense después de la aprobación

Los anuncios no se muestran si faltan las variables. Cuando tengas identificadores reales:

```env
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-0000000000000000
NEXT_PUBLIC_ADSENSE_SLOT_CONTENT=0000000000
```

Nunca inventes un identificador ni uses el de otra persona. Configura también `ads.txt` con la línea que AdSense te proporcione y una plataforma de consentimiento certificada cuando sea aplicable.

## Subir a GitHub

1. Descomprime el ZIP.
2. Reemplaza el contenido de tu repositorio con estos archivos, conservando la carpeta `.github` solo si contiene una implementación que necesitas.
3. No subas `.env.local`, claves, tokens ni archivos de configuración privados.
4. Confirma los cambios y publícalos en tu proveedor de hosting.
5. Añade el dominio a Google Search Console y envía `/sitemap.xml`.

Este proyecto utiliza un servidor compatible con Next/Vinext. GitHub aloja el código, pero para que el sitio funcione debes conectarlo a un proveedor compatible como Cloudflare o usar el hosting que ya tenga tu repositorio.

## Actualización editorial

Los estados de convocatorias se encuentran en `app/data/content.ts`. Antes de modificar un estado:

1. Abre la fuente oficial.
2. Confirma año, modalidad y fecha.
3. Actualiza `LAST_REVIEWED`.
4. Revisa que el texto no prometa elegibilidad o selección.

## Importante

Ningún código puede garantizar la aprobación de AdSense. Google revisa el sitio publicado, su contenido, navegación, cumplimiento, propiedad y tráfico. RutaBeca incorpora una base sólida, pero el propietario debe mantenerla y completar los datos reales antes de solicitar revisión.
