import { Compass, Menu, Route } from "lucide-react";
import Link from "next/link";

const links = [
  ["Becas", "/becas"],
  ["Academia", "/academia"],
  ["Simulacros", "/simulacros"],
  ["Universidades", "/universidades"],
  ["Calendario", "/calendario"],
  ["Mi ruta", "/mi-ruta"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container nav-shell">
        <Link className="brand" href="/" aria-label="RutaBeca, inicio">
          <span className="brand-mark"><Route size={23} aria-hidden="true" /></span>
          <span className="brand-word">Ruta<span>Beca</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="header-action" href="/herramientas/test-compatibilidad">
          <Compass size={18} aria-hidden="true" /> Encontrar mi ruta
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú"><Menu size={21} aria-hidden="true" /></summary>
          <nav className="mobile-panel" aria-label="Navegación móvil">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/herramientas/test-compatibilidad">Encontrar mi ruta</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
