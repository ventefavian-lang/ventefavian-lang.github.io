import { Route } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <h2 className="brand"><span className="brand-mark"><Route size={22} /></span> RutaBeca</h2>
          <p>Información educativa independiente para comprender convocatorias, prepararse y tomar decisiones con fuentes oficiales.</p>
        </div>
        <div>
          <h3>Explorar</h3>
          <div className="footer-links">
            <Link href="/becas">Becas</Link><Link href="/academia">Academia</Link><Link href="/simulacros">Simulacros</Link><Link href="/universidades">Universidades</Link>
          </div>
        </div>
        <div>
          <h3>Transparencia</h3>
          <div className="footer-links">
            <Link href="/metodologia">Metodología editorial</Link><Link href="/correcciones">Correcciones</Link><Link href="/sobre-nosotros">Sobre RutaBeca</Link><Link href="/contacto">Contacto</Link>
          </div>
        </div>
        <div>
          <h3>Legal</h3>
          <div className="footer-links">
            <Link href="/privacidad">Privacidad</Link><Link href="/terminos">Términos de uso</Link><Link href="/aviso-publicitario">Política publicitaria</Link><a href="https://www.pronabec.gob.pe/" rel="noopener noreferrer" target="_blank">PRONABEC oficial ↗</a>
          </div>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© 2026 RutaBeca. Proyecto educativo independiente.</span>
        <span>No somos PRONABEC ni representamos a una entidad pública.</span>
      </div>
    </footer>
  );
}
