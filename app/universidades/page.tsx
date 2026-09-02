import { AlertTriangle } from "lucide-react";
import type { Metadata } from "next";
import { AdSlot } from "../components/AdSlot";
import { PageHero } from "../components/PageHero";
import { UniversityExplorer } from "../components/UniversityExplorer";
import { universities } from "../data/content";

export const metadata: Metadata = { title: "Directorio de universidades del Perú", description: "Busca universidades por región y abre sus portales oficiales. Verifica siempre la lista elegible de cada beca." };

export default function UniversitiesPage() {
  return (
    <main>
      <PageHero eyebrow="Directorio inicial" title="Busca una universidad y luego comprueba su elegibilidad." description="Este directorio facilita la exploración, pero no declara qué institución, sede o carrera es elegible para una convocatoria." />
      <section className="section-tight"><div className="site-container notice"><AlertTriangle /><div><strong>Importante:</strong> aparecer en esta página no significa que la universidad sea elegible. Verifica la lista oficial vigente de institución, sede, programa y modalidad.</div></div></section>
      <section className="section"><div className="site-container"><UniversityExplorer items={universities} /></div></section>
      <AdSlot />
      <section className="section"><div className="site-container card article rich-copy"><h2>Cómo comprobar correctamente una institución</h2><p>Abre la lista publicada por la entidad responsable de la beca y busca la institución. Después verifica sede, carrera, modalidad de estudios y periodo académico. No asumas que todas las carreras de una universidad tienen la misma condición.</p><h2>Qué comparar antes de elegir</h2><ul><li>Plan de estudios y duración de la carrera.</li><li>Sede exacta donde estudiarás.</li><li>Costos que no cubra la beca, si los hubiera.</li><li>Condiciones para conservar el beneficio.</li><li>Servicios de acompañamiento y bienestar.</li><li>Canales oficiales de admisión.</li></ul></div></section>
    </main>
  );
}
