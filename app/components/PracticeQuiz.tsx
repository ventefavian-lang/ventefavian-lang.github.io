"use client";

import { CheckCircle2, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { practiceQuestions } from "../data/content";

export function PracticeQuiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState(0);
  const current = practiceQuestions[index];

  useEffect(() => setBest(Number(localStorage.getItem("rutabeca:best-score") || 0)), []);

  function verify() {
    if (selected === null) return;
    setChecked(true);
    if (selected === current.correct) setScore((value) => value + 1);
  }

  function next() {
    if (index === practiceQuestions.length - 1) {
      const finalScore = score + (selected === current.correct && !checked ? 1 : 0);
      const percentage = Math.round((finalScore / practiceQuestions.length) * 100);
      if (percentage > best) {
        localStorage.setItem("rutabeca:best-score", String(percentage));
        setBest(percentage);
      }
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
    setChecked(false);
  }

  function restart() {
    setIndex(0); setSelected(null); setChecked(false); setScore(0); setFinished(false);
  }

  if (finished) {
    const percentage = Math.round((score / practiceQuestions.length) * 100);
    return (
      <div className="card quiz-shell" style={{ textAlign: "center" }}>
        <span className="eyebrow">Resultado guardado en este dispositivo</span>
        <div className="score-ring" style={{ "--score": `${percentage}%` } as React.CSSProperties} data-score={`${percentage}%`} />
        <h2>{percentage >= 80 ? "Excelente base" : percentage >= 60 ? "Vas avanzando" : "Toca reforzar"}</h2>
        <p className="section-copy" style={{ margin: "0 auto" }}>Acertaste {score} de {practiceQuestions.length}. Tu mejor marca es {Math.max(best, percentage)} %.</p>
        <button className="btn btn-primary" style={{ marginTop: "1rem" }} onClick={restart}><RotateCcw size={18} /> Intentar nuevamente</button>
      </div>
    );
  }

  return (
    <div className="card quiz-shell">
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginBottom: ".6rem" }}><strong>Pregunta {index + 1} de {practiceQuestions.length}</strong><span>Mejor marca: {best} %</span></div>
      <div className="quiz-progress" aria-label={`${index + 1} de ${practiceQuestions.length}`}><span style={{ width: `${((index + 1) / practiceQuestions.length) * 100}%` }} /></div>
      <h2 style={{ margin: "1.4rem 0 .4rem", fontSize: "1.55rem", lineHeight: 1.25 }}>{current.question}</h2>
      <div className="answer-list">
        {current.answers.map((answer, answerIndex) => {
          const state = checked ? answerIndex === current.correct ? "correct" : answerIndex === selected ? "incorrect" : "" : selected === answerIndex ? "selected" : "";
          return <button className={`answer ${state}`} key={answer} onClick={() => !checked && setSelected(answerIndex)} disabled={checked}><span className="answer-letter">{String.fromCharCode(65 + answerIndex)}</span><span>{answer}</span></button>;
        })}
      </div>
      {checked ? <div className="source-box"><strong><CheckCircle2 size={17} style={{ display: "inline" }} /> Explicación:</strong> {current.explanation}</div> : null}
      <div className="actions" style={{ justifyContent: "flex-end" }}>
        {!checked ? <button className="btn btn-primary" onClick={verify} disabled={selected === null}>Comprobar respuesta</button> : <button className="btn btn-primary" onClick={next}>{index === practiceQuestions.length - 1 ? "Ver resultado" : "Siguiente pregunta"}</button>}
      </div>
    </div>
  );
}
