import type { Metadata } from "next";
import { AdSlot } from "../components/AdSlot";
import { PageHero } from "../components/PageHero";
import { ScholarshipExplorer } from "../components/ScholarshipExplorer";
import { LAST_REVIEWED, scholarships } from "../data/content";

export const metadata: Metadata = { title: "Explorador de becas del Perú", description: "Directorio educativo de becas con filtros, estado referencial y enlaces a fuentes oficiales." };

export default function ScholarshipsPage() {
  return (
    <main>
      <PageHero eyebrow="Directorio actualizado" title="Explora becas sin perder de vista la fuente oficial." description="Filtra oportunidades, comprende a quién se dirigen y abre el portal responsable antes de tomar una decisión." />
      <section className="section-tight"><div className="site-container"><div className="notice"><div><strong>Revisión editorial: {LAST_REVIEWED}.</strong> Una convocatoria puede cambiar después de esta fecha. Confirma siempre la información en la entidad responsable.</div></div></div></section>
      <section className="section"><div className="site-container"><ScholarshipExplorer items={scholarships} /></div></section>
      <AdSlot />
      <section className="section"><div className="site-container content-layout"><article className="card article rich-copy"><h2>Cómo usar este directorio</h2><p>RutaBeca organiza información pública para ayudarte a comparar oportunidades, pero no reemplaza las bases. Primero revisa el público objetivo y el estado mostrado. Luego abre la fuente oficial y localiza la convocatoria vigente, sus anexos, impedimentos, fechas y canales de consulta.</p><h2>Qué significa “posiblemente compatible”</h2><p>Significa únicamente que tu situación parece coincidir con algunos criterios generales. La entidad responsable es la única que puede validar documentos, registros administrativos, orden de mérito, condición económica, impedimentos y cumplimiento de plazos.</p><h2>Antes de presentar una postulación</h2><ul><li>Descarga las bases desde el portal de la entidad.</li><li>Comprueba que correspondan al año y modalidad correctos.</li><li>Revisa todos los impedimentos, no solo los requisitos principales.</li><li>Usa únicamente plataformas oficiales para registrar información.</li><li>Guarda constancias y cargos emitidos por el sistema oficial.</li></ul></article><aside className="sidebar"><div className="card side-card"><h2>¿Buscas Beca 18?</h2><p>Lee nuestra guía explicativa y luego abre la convocatoria oficial.</p></div><div className="card side-card"><h2>Sin cobros</h2><p>RutaBeca no vende vacantes ni ofrece trámites preferenciales.</p></div></aside></div></section>
    </main>
  );
}
