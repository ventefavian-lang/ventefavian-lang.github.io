import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { RoutePlanner } from "../components/RoutePlanner";

export const metadata: Metadata = { title: "Mi ruta de preparación y postulación", description: "Organiza las etapas de exploración, preparación, verificación y postulación. El progreso se guarda en tu dispositivo." };

export default function MyRoutePage() {
  return <main><PageHero eyebrow="Plan personal · sin cuenta" title="Convierte una convocatoria grande en ocho pasos manejables." description="Marca cada etapa cuando la hayas revisado. El progreso se guarda solamente en este dispositivo." /><section className="section"><div className="site-container content-layout"><RoutePlanner /><aside className="sidebar"><div className="card side-card"><h2>Tu información permanece local</h2><p>No solicitamos nombre, DNI, documentos ni contraseña.</p></div><div className="card side-card"><h2>No reemplaza el módulo oficial</h2><p>Esta ruta sirve para organizarte. La postulación se completa únicamente en la plataforma indicada por la entidad.</p></div></aside></div></section></main>;
}
