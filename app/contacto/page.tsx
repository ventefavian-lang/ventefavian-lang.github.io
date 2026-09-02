import { Mail } from "lucide-react";
import type { Metadata } from "next";
import { TrustPage } from "../components/TrustPage";

export const metadata: Metadata = { title: "Contacto", description: "Canal de contacto para correcciones editoriales, privacidad y consultas sobre RutaBeca." };

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return <TrustPage eyebrow="Contacto" title="Reporta un error sin compartir información personal." description="Indica la página, el fragmento y una fuente verificable. No envíes documentos de postulación."><h2>Canal disponible</h2>{email ? <p><a className="btn btn-primary" href={`mailto:${email}`}><Mail size={18} /> {email}</a></p> : <div className="notice"><div><strong>El correo todavía no está configurado.</strong> El propietario debe establecer NEXT_PUBLIC_CONTACT_EMAIL antes de publicar el sitio o solicitar revisión de AdSense.</div></div>}<h2>Qué incluir</h2><ul><li>Dirección de la página.</li><li>Texto que necesita revisión.</li><li>Fuente oficial y fecha.</li><li>Explicación breve del posible error.</li></ul><h2>Qué no debes enviar</h2><p>No envíes DNI, claves, constancias, certificados, información económica ni documentos de un menor. RutaBeca no revisa expedientes personales.</p><h2>Consultas oficiales</h2><p>Las preguntas sobre el estado de una postulación deben dirigirse a la entidad responsable mediante sus canales oficiales.</p></TrustPage>;
}
