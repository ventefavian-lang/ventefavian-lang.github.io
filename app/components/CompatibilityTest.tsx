"use client";

import { CheckCircle2, ExternalLink, RotateCcw } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Answers = { school: string; performance: string; vulnerability: string; admission: string; studies: string };
const initial: Answers = { school: "", performance: "", vulnerability: "", admission: "", studies: "" };

export function CompatibilityTest() {
  const [answers, setAnswers] = useState(initial);
  const [result, setResult] = useState(false);
  const complete = Object.values(answers).every(Boolean);

  function set(field: keyof Answers, value: string) { setAnswers((current) => ({ ...current, [field]: value })); }

  if (result) {
    const positives = Object.values(answers).filter((value) => value === "si").length;
    return (
      <section className="card quiz-shell">
        <span className="eyebrow">Orientación general</span>
        <h2 className="section-title" style={{ fontSize: "2rem" }}>{positives >= 4 ? "Tu perfil merece una revisión completa de las bases" : "Hay criterios que debes revisar antes de avanzar"}</h2>
        <p className="section-copy">Este resultado no declara que seas apto o no apto. Las modalidades, impedimentos y documentos cambian según cada convocatoria.</p>
        <div className="timeline" style={{ marginTop: "1.3rem" }}>
          <div className="timeline-item"><span className="timeline-dot"><CheckCircle2 size={18} /></span><div className="card timeline-card"><h3>Lee la convocatoria vigente</h3><p>Comprueba modalidad, edad, rendimiento, situación económica, impedimentos y plazos.</p></div></div>
          <div className="timeline-item"><span className="timeline-dot">2</span><div className="card timeline-card"><h3>Verifica tu información académica</h3><p>Confirma que tus estudios y rendimiento estén registrados correctamente.</p></div></div>
          <div className="timeline-item"><span className="timeline-dot">3</span><div className="card timeline-card"><h3>Revisa instituciones elegibles</h3><p>La universidad, sede y carrera deben coincidir exactamente con la lista aplicable.</p></div></div>
        </div>
        <div className="actions"><a className="btn btn-primary" href="https://www.pronabec.gob.pe/beca-18/" target="_blank" rel="noopener noreferrer">Abrir fuente oficial <ExternalLink size={17} /></a><Link className="btn btn-secondary" href="/guias/documentos-beca-18">Ver guía de documentos</Link><button className="btn btn-ghost" onClick={() => { setAnswers(initial); setResult(false); }}><RotateCcw size={17} /> Reiniciar</button></div>
      </section>
    );
  }

  const fields: Array<[keyof Answers, string, string]> = [
    ["school", "¿Concluiste o estás por concluir la educación secundaria reconocida en Perú?", "La convocatoria exige acreditar estudios secundarios según sus bases."],
    ["performance", "¿Puedes acreditar el rendimiento académico solicitado por una modalidad?", "El nivel exigido no es igual para todas las modalidades."],
    ["vulnerability", "¿Puedes acreditar una condición económica o especial contemplada en las bases?", "Beca 18 y las becas especiales atienden diferentes condiciones."],
    ["admission", "¿Ya ingresaste o planeas ingresar a una institución, sede y carrera elegibles?", "La coincidencia exacta con la lista oficial es importante."],
    ["studies", "¿Has revisado si tus estudios superiores anteriores generan algún impedimento?", "Algunas modalidades aplican excepciones; revisa las bases completas."],
  ];

  return (
    <section className="card quiz-shell">
      <span className="eyebrow">Cinco preguntas · sin registro</span>
      <h2 style={{ margin: ".7rem 0 0" }}>Revisión inicial de tu situación</h2>
      <p className="section-copy">No solicitamos DNI, nombre, dirección ni documentos personales.</p>
      <div style={{ display: "grid", gap: "1rem", marginTop: "1.4rem" }}>
        {fields.map(([field, question, help], index) => <fieldset className="card" style={{ padding: "1rem" }} key={field}><legend style={{ fontWeight: 850 }}>Paso {index + 1}: {question}</legend><p style={{ color: "var(--muted)", margin: ".25rem 0 .7rem" }}>{help}</p><div className="actions" style={{ marginTop: 0 }}><label className={`btn ${answers[field] === "si" ? "btn-primary" : "btn-secondary"}`}><input type="radio" name={field} value="si" checked={answers[field] === "si"} onChange={(e) => set(field, e.target.value)} style={{ position: "absolute", opacity: 0 }} />Sí</label><label className={`btn ${answers[field] === "no" ? "btn-primary" : "btn-secondary"}`}><input type="radio" name={field} value="no" checked={answers[field] === "no"} onChange={(e) => set(field, e.target.value)} style={{ position: "absolute", opacity: 0 }} />No / no estoy seguro</label></div></fieldset>)}
      </div>
      <button className="btn btn-primary" style={{ marginTop: "1.2rem" }} disabled={!complete} onClick={() => setResult(true)}>Ver orientación</button>
    </section>
  );
}
