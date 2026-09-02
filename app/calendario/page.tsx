import { AlertTriangle, CalendarClock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "../components/AdSlot";
import { PageHero } from "../components/PageHero";
import { LAST_REVIEWED } from "../data/content";

export const metadata: Metadata = { title: "Calendario y etapas de convocatorias de becas", description: "Comprende las etapas habituales de una convocatoria y distingue fechas oficiales de fechas aún no publicadas." };

const stages = [
  ["1", "Publicación de bases", "La entidad define requisitos, impedimentos, puntajes, beneficios y cronograma."],
  ["2", "Inscripción o preselección", "El postulante registra información únicamente en el módulo oficial dentro del plazo."],
  ["3", "Evaluación", "Puede incluir examen, validación documental u otros criterios establecidos en las bases."],
  ["4", "Ingreso a una institución", "Cuando corresponda, debe acreditarse el ingreso a una institución, sede y programa elegibles."],
  ["5", "Postulación para selección", "Se completan formatos, declaraciones y documentos de la fase correspondiente."],
  ["6", "Resultados y aceptación", "Los seleccionados siguen los pasos oficiales para aceptar la beca dentro del plazo."],
];

export default function CalendarPage() {
  return (
    <main>
      <PageHero eyebrow={`Revisado · ${LAST_REVIEWED}`} title="Un calendario claro también muestra lo que todavía no se sabe." description="No publicamos fechas futuras como si fueran oficiales. Aquí puedes comprender las etapas mientras esperas el cronograma vigente." />
      <section className="section-tight"><div className="site-container notice"><AlertTriangle /><div><strong>Próxima convocatoria de Beca 18:</strong> no colocamos una fecha hasta que aparezca en una fuente oficial. Evita planificar con rumores o calendarios anteriores.</div></div></section>
      <section className="section"><div className="site-container content-layout"><div className="timeline">{stages.map(([number, title, description]) => <div className="timeline-item" key={number}><span className="timeline-dot">{number}</span><article className="card timeline-card"><h2>{title}</h2><p>{description}</p></article></div>)}</div><aside className="sidebar"><div className="card side-card"><h2><CalendarClock size={18} style={{ display: "inline" }} /> Fuente recomendada</h2><p>Consulta la portada de PRONABEC y la página específica de cada concurso.</p><a className="btn btn-ghost" style={{ marginTop: ".8rem" }} href="https://www.pronabec.gob.pe/" target="_blank" rel="noopener noreferrer">Abrir PRONABEC</a></div><div className="card side-card"><h2>Prepara mientras esperas</h2><p>Practica lectura y matemática sin asumir fechas no confirmadas.</p><Link href="/academia" style={{ color: "var(--blue-2)", fontWeight: 850 }}>Ir a Academia →</Link></div></aside></div></section>
      <AdSlot />
      <section className="section"><div className="site-container card article rich-copy"><h2>Cómo registrar una fecha importante</h2><p>Anota la fecha, la hora, la fuente y la acción que debes completar. Si la entidad publica una modificatoria, conserva ambos documentos y utiliza el cronograma más reciente. No confundas la fecha de publicación de una noticia con el último día para postular.</p><h2>Qué revisar cada semana</h2><ul><li>Comunicados de la entidad responsable.</li><li>Modificatorias o ampliaciones de bases.</li><li>Listas actualizadas de instituciones.</li><li>Resultados y periodos de subsanación.</li><li>Correos enviados desde dominios oficiales.</li></ul></div></section>
    </main>
  );
}
