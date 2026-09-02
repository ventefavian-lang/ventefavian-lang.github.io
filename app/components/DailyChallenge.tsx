"use client";

import { ArrowRight, Check, Flame } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function DailyChallenge() {
  const [done, setDone] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const last = localStorage.getItem("rutabeca:last-mission");
    const stored = Number(localStorage.getItem("rutabeca:streak") || 0);
    setDone(last === today);
    setStreak(stored);
  }, []);

  function completeMission() {
    const today = new Date().toISOString().slice(0, 10);
    if (!done) {
      const next = streak + 1;
      localStorage.setItem("rutabeca:last-mission", today);
      localStorage.setItem("rutabeca:streak", String(next));
      setStreak(next);
      setDone(true);
    }
  }

  return (
    <aside className="mission-card" aria-labelledby="mision-hoy">
      <div className="mission-top"><span className="status-pill"><Flame size={14} /> {streak} días de avance</span><span>10–15 min</span></div>
      <h2 id="mision-hoy">Tu misión de hoy</h2>
      <p>Una sesión breve para mantener tu preparación en movimiento.</p>
      <div className="mission-list">
        <div className="mission-item"><span className="mission-dot">1</span><span>Resuelve un reto de comprensión lectora</span></div>
        <div className="mission-item"><span className="mission-dot">2</span><span>Revisa una convocatoria con fuente oficial</span></div>
        <div className="mission-item"><span className="mission-dot">3</span><span>Marca una etapa de tu ruta</span></div>
      </div>
      {done ? (
        <Link className="btn btn-secondary" href="/simulacros"><Check size={18} /> Misión completa · practicar más</Link>
      ) : (
        <button className="btn btn-primary" onClick={completeMission}>Comenzar misión <ArrowRight size={18} /></button>
      )}
    </aside>
  );
}
