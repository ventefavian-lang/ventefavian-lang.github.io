import { PageHero } from "./PageHero";

export function TrustPage({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: React.ReactNode }) {
  return <main><PageHero eyebrow={eyebrow} title={title} description={description} /><section className="section"><div className="site-container content-layout"><article className="card article rich-copy">{children}</article><aside className="sidebar"><div className="card side-card"><h2>Proyecto independiente</h2><p>RutaBeca no representa a PRONABEC, una universidad ni una entidad pública.</p></div><div className="card side-card"><h2>Última revisión general</h2><p>2 de septiembre de 2026.</p></div></aside></div></section></main>;
}
