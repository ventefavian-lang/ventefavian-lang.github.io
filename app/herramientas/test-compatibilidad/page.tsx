import type { Metadata } from "next";
import { CompatibilityTest } from "../../components/CompatibilityTest";
import { PageHero } from "../../components/PageHero";

export const metadata: Metadata = { title: "Test orientativo de compatibilidad con Beca 18", description: "Revisa criterios generales sin registrar datos personales. El resultado no sustituye las bases ni declara aptitud oficial." };

export default function CompatibilityPage() {
  return (
    <main>
      <PageHero eyebrow="Herramienta educativa" title="Revisa tu situación sin entregar datos personales." description="Cinco preguntas generales te ayudarán a identificar qué apartados de las bases debes revisar con mayor atención." />
      <section className="section"><div className="site-container content-layout"><CompatibilityTest /><aside className="sidebar"><div className="card side-card"><h2>No es una postulación</h2><p>Las respuestas no se envían a PRONABEC ni se guardan en una base de datos.</p></div><div className="card side-card"><h2>No promete resultados</h2><p>Solo la entidad responsable puede validar requisitos, registros y documentos.</p></div></aside></div></section>
    </main>
  );
}
