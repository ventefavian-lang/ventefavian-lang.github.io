const paths = ["/", "/becas", "/becas/beca-18", "/academia", "/academia/comprension-lectora", "/academia/razonamiento-matematico", "/simulacros", "/universidades", "/calendario", "/mi-ruta", "/herramientas/test-compatibilidad", "/guias/documentos-beca-18", "/sobre-nosotros", "/metodologia", "/correcciones", "/privacidad", "/terminos", "/aviso-publicitario", "/contacto"];

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `\n  <url><loc>${origin}${path}</loc><changefreq>${path === "/" ? "daily" : "weekly"}</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`).join("")}\n</urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } });
}
