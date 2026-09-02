import {
  ArrowRight, BookOpenCheck, CalendarDays, CheckCircle2, ClipboardCheck,
  GraduationCap, MapPinned, Medal, Search, ShieldCheck, Trophy, UsersRound,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { DailyChallenge } from "./components/DailyChallenge";
import { AdSlot } from "./components/AdSlot";
import { scholarships } from "./data/content";

export const metadata: Metadata = {
  title: "Becas, preparación y oportunidades para estudiantes peruanos",
};

const features = [
  { icon: Search, title: "Explorador de becas", text: "Compara oportunidades por etapa, público y alcance con enlaces a sus fuentes oficiales.", href: "/becas", label: "Explorar becas" },
  { icon: ClipboardCheck, title: "Test de compatibilidad", text: "Revisa criterios generales con reglas transparentes. El resultado orienta, nunca reemplaza las bases.", href: "/herramientas/test-compatibilidad", label: "Revisar mi perfil" },
  { icon: BookOpenCheck, title: "Academia gratuita", text: "Practica comprensión lectora y razonamiento matemático con explicaciones originales.", href: "/academia", label: "Empezar a estudiar" },
  { icon: Trophy, title: "Simulacros", text: "Resuelve preguntas cronometradas, revisa cada respuesta y guarda tu mejor resultado en este dispositivo.", href: "/simulacros", label: "Hacer un simulacro" },
  { icon: GraduationCap, title: "Universidades", text: "Encuentra instituciones por región y recuerda verificar carrera, sede y periodo en la lista vigente.", href: "/universidades", label: "Ver directorio" },
  { icon: CalendarDays, title: "Calendario", text: "Sigue las etapas de una convocatoria y distingue fechas oficiales de fechas todavía no anunciadas.", href: "/calendario", label: "Revisar etapas" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Plataforma educativa independiente</span>
            <h1 className="display">Tu oportunidad necesita una <span>ruta clara.</span></h1>
            <p>Descubre becas, comprende los requisitos, practica y organiza cada etapa sin depender de capturas reenviadas o información sin fecha.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/mi-ruta">Crear mi ruta <ArrowRight size={18} /></Link>
              <Link className="btn btn-secondary" href="/simulacros">Practicar ahora</Link>
            </div>
            <div className="stats" aria-label="Principios de RutaBeca">
              <div className="stat"><strong>6</strong><span>becas explicadas</span></div>
              <div className="stat"><strong>2</strong><span>rutas de aprendizaje</span></div>
              <div className="stat"><strong>0</strong><span>resultados garantizados</span></div>
              <div className="stat"><strong>100 %</strong><span>fuentes visibles</span></div>
            </div>
          </div>
          <DailyChallenge />
        </div>
      </section>

      <section className="section-tight">
        <div className="site-container">
          <div className="notice"><ShieldCheck aria-hidden="true" /><div><strong>Información responsable.</strong> RutaBeca no tramita postulaciones ni cobra por asegurar una vacante. Las decisiones finales siempre dependen de las bases y plataformas oficiales.</div></div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <span className="eyebrow">Todo en un solo recorrido</span>
          <h2 className="section-title">De “quiero una beca” a “sé qué hacer hoy”.</h2>
          <p className="section-copy">Cada módulo resuelve una parte distinta de la preparación y conduce a una fuente, una acción o una práctica concreta.</p>
          <div className="grid-3" style={{ marginTop: "1.6rem" }}>
            {features.map(({ icon: Icon, ...feature }) => (
              <article className="card feature-card" key={feature.title}>
                <span className="icon-box"><Icon size={23} /></span>
                <h3>{feature.title}</h3><p>{feature.text}</p>
                <Link href={feature.href}>{feature.label} <ArrowRight size={16} style={{ display: "inline" }} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AdSlot />

      <section className="section" style={{ background: "rgba(255,255,255,.58)", borderBlock: "1px solid var(--line)" }}>
        <div className="site-container">
          <span className="eyebrow">Oportunidades destacadas</span>
          <h2 className="section-title">Comienza por una convocatoria.</h2>
          <div className="grid-3" style={{ marginTop: "1.5rem" }}>
            {scholarships.slice(0, 3).map((item) => (
              <article className="card result-card" key={item.slug}>
                <div><span className={`tag ${item.statusTone}`}>{item.status}</span><h3>{item.name}</h3><p>{item.summary}</p></div>
                <footer><span className="tag">{item.scope}</span><Link href={item.slug === "beca-18" ? "/becas/beca-18" : "/becas"}>Ver información →</Link></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <span className="eyebrow">Una rutina que sí se puede mantener</span>
          <h2 className="section-title">Regresa por progreso, no por presión.</h2>
          <div className="grid-4" style={{ marginTop: "1.5rem" }}>
            {[
              [CheckCircle2, "Misión diaria", "Una práctica breve y una acción útil para tu postulación."],
              [Medal, "Mejor marca", "Guarda tu mejor puntaje sin crear una cuenta."],
              [MapPinned, "Ruta por etapas", "Visualiza qué revisar antes, durante y después de postular."],
              [UsersRound, "Meta compartible", "Compara tu avance con objetivos claros, no con promesas."],
            ].map(([Icon, title, text]) => {
              const C = Icon as typeof CheckCircle2;
              return <article className="card feature-card" style={{ minHeight: 230 }} key={String(title)}><span className="icon-box"><C size={22} /></span><h3>{String(title)}</h3><p>{String(text)}</p></article>;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
