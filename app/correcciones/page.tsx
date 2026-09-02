import type { Metadata } from "next";
import Link from "next/link";
import { TrustPage } from "../components/TrustPage";

export const metadata: Metadata = { title: "Política de correcciones", description: "Cómo reportar errores y cómo RutaBeca documenta las correcciones importantes." };

export default function CorrectionsPage() {
  return <TrustPage eyebrow="Correcciones" title="Un error corregido debe quedar claro para quien lo leyó." description="Revisamos reportes que incluyen una fuente verificable y explican qué contenido necesita cambiar."><h2>Cómo reportar un error</h2><p>Indica la dirección de la página, el fragmento que consideras incorrecto, la razón y el enlace a una fuente primaria. No envíes DNI, constancias, claves ni documentación personal.</p><h2>Qué hacemos después</h2><ol><li>Comprobamos que la fuente corresponda a la misma convocatoria y modalidad.</li><li>Comparamos fechas y posibles modificatorias.</li><li>Actualizamos el contenido si el reporte es correcto.</li><li>Añadimos una nota cuando el cambio pueda afectar una decisión importante.</li></ol><h2>Correcciones registradas</h2><p>Esta versión inicial no tiene correcciones públicas registradas.</p><p>Utiliza la página de <Link href="/contacto">contacto</Link> para revisar el canal disponible.</p></TrustPage>;
}
