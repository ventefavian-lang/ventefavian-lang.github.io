import type { Metadata } from "next";
import { AdSlot } from "../components/AdSlot";
import { PageHero } from "../components/PageHero";
import { PracticeQuiz } from "../components/PracticeQuiz";

export const metadata: Metadata = { title: "Simulacro gratuito de lectura y matemática", description: "Resuelve un simulacro corto con preguntas originales, explicaciones y mejor puntaje guardado localmente." };

export default function SimulationsPage() {
  return (
    <main>
      <PageHero eyebrow="Práctica sin registro" title="Seis preguntas. Una explicación después de cada respuesta." description="Este simulacro es educativo y no reproduce un examen oficial. Úsalo para identificar qué debes reforzar." />
      <section className="section"><div className="site-container content-layout"><PracticeQuiz /><aside className="sidebar"><div className="card side-card"><h2>Cómo usar el resultado</h2><p>Revisa las explicaciones, estudia el tema y vuelve a intentarlo. Una buena marca aquí no predice una beca.</p></div><div className="card side-card"><h2>Privacidad</h2><p>No enviamos tus respuestas a un servidor. El mejor puntaje se guarda en tu dispositivo.</p></div></aside></div></section>
      <div className="site-container"><AdSlot /></div>
      <section className="section"><div className="site-container card article rich-copy"><h2>Por qué explicamos cada respuesta</h2><p>Un simulacro sirve cuando permite reconocer el proceso correcto, no solo contar aciertos. Por eso cada pregunta incluye una explicación breve y verificable. Después de practicar, vuelve a la Academia para estudiar la habilidad relacionada.</p><h2>Qué evalúa esta primera versión</h2><ul><li>Identificación de ideas centrales.</li><li>Proporciones y porcentajes.</li><li>Resolución de ecuaciones sencillas.</li><li>Lectura estratégica.</li><li>Selección de fuentes confiables.</li></ul></div></section>
    </main>
  );
}
