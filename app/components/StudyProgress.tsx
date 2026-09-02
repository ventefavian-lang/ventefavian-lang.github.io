"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const tasks = ["Identificar la idea principal", "Reconocer conectores", "Resolver proporciones", "Calcular porcentajes", "Verificar una fuente oficial"];

export function StudyProgress() {
  const [done, setDone] = useState<string[]>([]);
  useEffect(() => {
    try { setDone(JSON.parse(localStorage.getItem("rutabeca:study-progress") || "[]")); } catch { setDone([]); }
  }, []);
  function toggle(task: string) {
    const next = done.includes(task) ? done.filter((item) => item !== task) : [...done, task];
    setDone(next); localStorage.setItem("rutabeca:study-progress", JSON.stringify(next));
  }
  return (
    <section className="card quiz-shell">
      <span className="eyebrow">Progreso en este dispositivo</span>
      <h2 style={{ margin: ".7rem 0 .3rem" }}>{done.length} de {tasks.length} objetivos completados</h2>
      <div className="quiz-progress" aria-label={`${done.length} de ${tasks.length}`}><span style={{ width: `${(done.length / tasks.length) * 100}%` }} /></div>
      <div style={{ display: "grid", gap: ".65rem", marginTop: "1rem" }}>
        {tasks.map((task) => <label className="answer" key={task} style={{ cursor: "pointer" }}><input type="checkbox" checked={done.includes(task)} onChange={() => toggle(task)} /><CheckCircle2 size={19} color={done.includes(task) ? "var(--green)" : "#91a2bc"} /><span>{task}</span></label>)}
      </div>
    </section>
  );
}
