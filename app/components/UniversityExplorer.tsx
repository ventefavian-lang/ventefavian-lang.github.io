"use client";

import { ExternalLink, Search } from "lucide-react";
import { useMemo, useState } from "react";

type University = { name: string; short: string; region: string; type: string; url: string; note: string };

export function UniversityExplorer({ items }: { items: University[] }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("Todas");
  const regions = [...new Set(items.map((item) => item.region))];
  const results = useMemo(() => items.filter((item) => `${item.name} ${item.short}`.toLowerCase().includes(query.toLowerCase()) && (region === "Todas" || item.region === region)), [items, query, region]);

  return (
    <section>
      <div className="filters" style={{ gridTemplateColumns: "1.5fr 1fr" }}>
        <div className="field"><label htmlFor="buscar-universidad">Buscar universidad</label><div style={{ position: "relative" }}><Search size={18} style={{ position: "absolute", left: 14, top: 15, color: "#637694" }} /><input id="buscar-universidad" className="input" style={{ paddingLeft: 42 }} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Nombre o sigla" /></div></div>
        <div className="field"><label htmlFor="region">Región</label><select id="region" className="select" value={region} onChange={(e) => setRegion(e.target.value)}><option>Todas</option>{regions.map((value) => <option key={value}>{value}</option>)}</select></div>
      </div>
      <p aria-live="polite" style={{ color: "var(--muted)", fontWeight: 750 }}>{results.length} instituciones en este directorio inicial</p>
      <div className="result-grid">
        {results.map((item) => <article className="card result-card" key={item.short}><div><span className="tag">{item.region} · {item.type}</span><h3>{item.name}</h3><p>{item.note}</p></div><footer><strong>{item.short}</strong><a href={item.url} target="_blank" rel="noopener noreferrer">Sitio oficial <ExternalLink size={14} style={{ display: "inline" }} /></a></footer></article>)}
      </div>
    </section>
  );
}
