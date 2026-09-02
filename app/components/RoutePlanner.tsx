"use client";

import { CheckCircle2, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const stages = [
  { id: "explore", title: "Explorar convocatorias", text: "Compara el público objetivo, alcance y estado de diferentes becas.", href: "/becas" },
  { id: "bases", title: "Leer las bases vigentes", text: "Identifica modalidad, requisitos, impedimentos, puntajes y cronograma.", href: "/becas/beca-18" },
  { id: "profile", title: "Revisar tu situación", text: "Comprueba qué criterios necesitan una verificación más detallada.", href: "/herramientas/test-compatibilidad" },
  { id: "practice", title: "Prepararte", text: "Refuerza lectura y matemática con lecciones originales.", href: "/academia" },
  { id: "mock", title: "Medir tu avance", text: "Resuelve el simulacro y revisa las explicaciones.", href: "/simulacros" },
  { id: "institution", title: "Elegir institución y carrera", text: "Compara opciones y verifica la lista oficial exacta.", href: "/universidades" },
  { id: "documents", title: "Organizar documentos", text: "Crea tu checklist desde las bases correspondientes.", href: "/guias/documentos-beca-18" },
  { id: "calendar", title: "Controlar fechas", text: "Registra el cronograma y cualquier modificatoria oficial.", href: "/calendario" },
];

export function RoutePlanner() {
  const [done, setDone] = useState<string[]>([]);
  useEffect(() => {
    try { setDone(JSON.parse(localStorage.getItem("rutabeca:route") || "[]")); } catch { setDone([]); }
  }, []);

  function toggle(id: string) {
    const next = done.includes(id) ? done.filter((value) => value !== id) : [...done, id];
    setDone(next); localStorage.setItem("rutabeca:route", JSON.stringify(next));
  }
  function reset() { setDone([]); localStorage.removeItem("rutabeca:route"); }
  const percentage = Math.round((done.length / stages.length) * 100);

  return (
    <section>
      <div className="card quiz-shell" style={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}><div><span className="eyebrow">Progreso local</span><h2 style={{ margin: ".5rem 0 0" }}>{percentage} % de tu ruta organizada</h2></div><button className="btn btn-ghost" onClick={reset}><RotateCcw size={16} /> Reiniciar</button></div>
        <div className="quiz-progress" style={{ marginTop: "1rem" }} aria-label={`${percentage} % completado`}><span style={{ width: `${percentage}%` }} /></div>
      </div>
      <div className="timeline">
        {stages.map((stage, index) => <div className="timeline-item" key={stage.id}><button className="timeline-dot" onClick={() => toggle(stage.id)} aria-label={`${done.includes(stage.id) ? "Desmarcar" : "Completar"} ${stage.title}`} style={{ border: 0, cursor: "pointer", background: done.includes(stage.id) ? "var(--green)" : "var(--blue)" }}>{done.includes(stage.id) ? <CheckCircle2 size={19} /> : index + 1}</button><article className="card timeline-card"><h3>{stage.title}</h3><p>{stage.text}</p><Link href={stage.href} style={{ display: "inline-block", marginTop: ".55rem", color: "var(--blue-2)", fontWeight: 850 }}>Abrir recurso →</Link></article></div>)}
      </div>
    </section>
  );
}
