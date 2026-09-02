import { ArrowRight, BookOpen, Calculator, CheckCircle2, Target } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "../components/AdSlot";
import { PageHero } from "../components/PageHero";
import { StudyProgress } from "../components/StudyProgress";

export const metadata: Metadata = { title: "Academia gratuita para postulantes", description: "Lecciones originales de comprensión lectora y razonamiento matemático con práctica y progreso local." };

export default function AcademyPage() {
  return (
    <main>
      <PageHero eyebrow="Aprendizaje gratuito" title="Practica habilidades que te sirven en cualquier convocatoria." description="Lecciones breves, ejemplos resueltos y ejercicios originales. Tu progreso se guarda únicamente en este dispositivo." />
      <section className="section"><div className="site-container grid-3"><article className="card feature-card"><span className="icon-box"><BookOpen /></span><h2>Comprensión lectora</h2><p>Aprende a encontrar ideas principales, reconocer relaciones y evaluar argumentos.</p><Link href="/academia/comprension-lectora">Abrir ruta <ArrowRight size={16} style={{ display: "inline" }} /></Link></article><article className="card feature-card"><span className="icon-box"><Calculator /></span><h2>Razonamiento matemático</h2><p>Refuerza proporciones, porcentajes y traducción de problemas cotidianos.</p><Link href="/academia/razonamiento-matematico">Abrir ruta <ArrowRight size={16} style={{ display: "inline" }} /></Link></article><article className="card feature-card"><span className="icon-box"><Target /></span><h2>Simulacro mixto</h2><p>Combina lectura, matemática y verificación responsable de fuentes.</p><Link href="/simulacros">Practicar <ArrowRight size={16} style={{ display: "inline" }} /></Link></article></div></section>
      <AdSlot />
      <section className="section"><div className="site-container content-layout"><StudyProgress /><aside className="sidebar"><div className="card side-card"><h3><CheckCircle2 size={18} style={{ display: "inline" }} /> Sin cuenta</h3><p>El navegador guarda las casillas marcadas. Si borras los datos del sitio, el progreso se reinicia.</p></div><div className="card side-card"><h3>Contenido original</h3><p>Las explicaciones y preguntas de esta primera versión fueron redactadas para RutaBeca.</p></div></aside></div></section>
    </main>
  );
}
