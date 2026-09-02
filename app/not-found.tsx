import Link from "next/link";

export default function NotFound() {
  return <main className="section"><div className="site-container card article" style={{ textAlign: "center" }}><span className="eyebrow">Página no encontrada</span><h1 className="section-title">Esta ruta todavía no existe.</h1><p className="section-copy" style={{ margin: "0 auto" }}>Vuelve al inicio o utiliza el explorador de becas para continuar.</p><div className="actions" style={{ justifyContent: "center" }}><Link className="btn btn-primary" href="/">Volver al inicio</Link><Link className="btn btn-secondary" href="/becas">Explorar becas</Link></div></div></main>;
}
