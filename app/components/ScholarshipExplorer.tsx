"use client";

import { Bookmark, ExternalLink, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Scholarship } from "../data/content";

export function ScholarshipExplorer({ items }: { items: Scholarship[] }) {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState("Todos");
  const [audience, setAudience] = useState("Todos");
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    try { setSaved(JSON.parse(localStorage.getItem("rutabeca:saved-scholarships") || "[]")); } catch { setSaved([]); }
  }, []);

  function toggleSaved(slug: string) {
    const next = saved.includes(slug) ? saved.filter((value) => value !== slug) : [...saved, slug];
    setSaved(next);
    localStorage.setItem("rutabeca:saved-scholarships", JSON.stringify(next));
  }

  const results = useMemo(() => items.filter((item) => {
    const text = `${item.name} ${item.owner} ${item.audience} ${item.summary}`.toLowerCase();
    return text.includes(query.toLowerCase()) && (scope === "Todos" || item.scope === scope) && (audience === "Todos" || item.audience === audience);
  }), [items, query, scope, audience]);

  return (
    <section aria-label="Buscador de becas">
      <div className="filters">
        <div className="field"><label htmlFor="buscar-beca">Buscar por nombre o institución</label><div style={{ position: "relative" }}><Search size={18} style={{ position: "absolute", left: 14, top: 15, color: "#637694" }} /><input id="buscar-beca" className="input" style={{ paddingLeft: 42 }} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ejemplo: Beca 18" /></div></div>
        <div className="field"><label htmlFor="alcance">Alcance</label><select id="alcance" className="select" value={scope} onChange={(e) => setScope(e.target.value)}><option>Todos</option><option>Nacional</option><option>Internacional</option></select></div>
        <div className="field"><label htmlFor="publico">Público</label><select id="publico" className="select" value={audience} onChange={(e) => setAudience(e.target.value)}><option>Todos</option>{[...new Set(items.map((item) => item.audience))].map((value) => <option key={value}>{value}</option>)}</select></div>
      </div>
      <p aria-live="polite" style={{ color: "var(--muted)", fontWeight: 750 }}>{results.length} oportunidades encontradas</p>
      <div className="result-grid">
        {results.map((item) => (
          <article className="card result-card" key={item.slug}>
            <div><span className={`tag ${item.statusTone}`}>{item.status}</span><h3>{item.name}</h3><p>{item.summary}</p><p style={{ marginTop: ".65rem", fontSize: ".86rem" }}><strong>Dirigida a:</strong> {item.audience}</p></div>
            <footer style={{ flexWrap: "wrap" }}>
              <span className="tag">{item.owner}</span>
              <button className="btn btn-ghost" style={{ minHeight: 38, padding: ".45rem .65rem" }} onClick={() => toggleSaved(item.slug)} aria-pressed={saved.includes(item.slug)}><Bookmark size={15} fill={saved.includes(item.slug) ? "currentColor" : "none"} /> {saved.includes(item.slug) ? "Guardada" : "Guardar"}</button>
              {item.slug === "beca-18" ? <Link href="/becas/beca-18">Guía completa →</Link> : <a href={item.source} target="_blank" rel="noopener noreferrer">Fuente oficial <ExternalLink size={14} style={{ display: "inline" }} /></a>}
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
