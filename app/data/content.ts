export const LAST_REVIEWED = "2 de septiembre de 2026";

export type Scholarship = {
  slug: string;
  name: string;
  owner: string;
  audience: string;
  scope: string;
  status: string;
  statusTone: "green" | "gold" | "red";
  summary: string;
  source: string;
};

export const scholarships: Scholarship[] = [
  {
    slug: "beca-18",
    name: "Beca 18 y Becas Especiales",
    owner: "PRONABEC",
    audience: "Egresados de secundaria",
    scope: "Nacional",
    status: "Convocatoria 2026 concluida",
    statusTone: "red",
    summary: "Becas integrales para jóvenes con alto rendimiento académico en situación de vulnerabilidad o condiciones especiales.",
    source: "https://www.pronabec.gob.pe/beca-18/",
  },
  {
    slug: "beca-permanencia",
    name: "Beca Permanencia",
    owner: "PRONABEC",
    audience: "Estudiantes de universidades públicas",
    scope: "Nacional",
    status: "Consulta la próxima convocatoria",
    statusTone: "gold",
    summary: "Apoyo para estudiantes de universidades públicas con buen rendimiento y situación de vulnerabilidad económica.",
    source: "https://www.pronabec.gob.pe/beca-permanencia/",
  },
  {
    slug: "beca-peru",
    name: "Beca Perú",
    owner: "PRONABEC e instituciones privadas",
    audience: "Egresados de secundaria",
    scope: "Nacional",
    status: "Revisa ofertas vigentes",
    statusTone: "green",
    summary: "Becas donadas por instituciones de educación superior privadas; condiciones y beneficios dependen de cada oferta.",
    source: "https://www.pronabec.gob.pe/beca-peru/",
  },
  {
    slug: "alianza-pacifico",
    name: "Alianza del Pacífico",
    owner: "PRONABEC",
    audience: "Estudiantes, docentes e investigadores",
    scope: "Internacional",
    status: "Según cronograma oficial",
    statusTone: "gold",
    summary: "Intercambios académicos entre Perú, Chile, Colombia y México para perfiles que cumplen las bases vigentes.",
    source: "https://www.pronabec.gob.pe/beca-alianza-del-pacifico/",
  },
  {
    slug: "hijos-docentes",
    name: "Beca Hijos de Docentes",
    owner: "PRONABEC",
    audience: "Hijos de docentes de la CPM",
    scope: "Nacional",
    status: "Consulta la convocatoria vigente",
    statusTone: "gold",
    summary: "Oportunidad dirigida a hijos de docentes que forman parte de la Carrera Pública Magisterial.",
    source: "https://www.pronabec.gob.pe/beca-hijos-de-docentes/",
  },
  {
    slug: "inclusion",
    name: "Beca Inclusión",
    owner: "PRONABEC",
    audience: "Personas que acreditan discapacidad",
    scope: "Nacional",
    status: "Revisa las bases oficiales",
    statusTone: "gold",
    summary: "Convocatoria orientada a facilitar el acceso y continuidad de estudios superiores para personas con discapacidad.",
    source: "https://www.pronabec.gob.pe/beca-inclusion-carreras-profesionales/",
  },
];

export const universities = [
  { name: "Universidad Nacional Mayor de San Marcos", short: "UNMSM", region: "Lima", type: "Pública", url: "https://www.unmsm.edu.pe/", note: "La elegibilidad depende de la lista oficial de cada convocatoria." },
  { name: "Universidad Nacional de Ingeniería", short: "UNI", region: "Lima", type: "Pública", url: "https://www.uni.edu.pe/", note: "Revisa sede, programa y periodo exactos en PRONABEC." },
  { name: "Universidad Nacional San Luis Gonzaga", short: "UNICA", region: "Ica", type: "Pública", url: "https://www.unica.edu.pe/", note: "Verifica la carrera y sede en la lista vigente." },
  { name: "Universidad Nacional de San Agustín", short: "UNSA", region: "Arequipa", type: "Pública", url: "https://www.unsa.edu.pe/", note: "La presencia en este directorio no confirma elegibilidad." },
  { name: "Universidad Nacional Federico Villarreal", short: "UNFV", region: "Lima", type: "Pública", url: "https://www.unfv.edu.pe/", note: "Consulta siempre el documento oficial actualizado." },
  { name: "Universidad Nacional de Trujillo", short: "UNT", region: "La Libertad", type: "Pública", url: "https://unitru.edu.pe/", note: "Las listas de instituciones pueden modificarse." },
];

export const practiceQuestions = [
  {
    question: "¿Cuál es la idea principal de un texto argumentativo?",
    answers: ["El dato más largo", "La postura central que se defiende", "La primera oración", "La lista de ejemplos"],
    correct: 1,
    explanation: "La idea principal concentra la postura o afirmación central que el autor sostiene mediante razones y evidencias.",
  },
  {
    question: "Si 3 cuadernos cuestan S/ 24, ¿cuánto cuestan 5 al mismo precio unitario?",
    answers: ["S/ 30", "S/ 35", "S/ 40", "S/ 45"],
    correct: 2,
    explanation: "Cada cuaderno cuesta S/ 8. Multiplicando 5 × 8 se obtiene S/ 40.",
  },
  {
    question: "En la expresión 2(x + 3) = 18, el valor de x es:",
    answers: ["3", "6", "7", "9"],
    correct: 1,
    explanation: "Dividimos entre 2: x + 3 = 9. Luego restamos 3: x = 6.",
  },
  {
    question: "¿Qué acción mejora más la comprensión de una lectura difícil?",
    answers: ["Leer más rápido", "Subrayar todo", "Identificar ideas y relaciones", "Memorizar cada palabra"],
    correct: 2,
    explanation: "Reconocer ideas principales, secundarias y conectores permite reconstruir la estructura del texto.",
  },
  {
    question: "Una cantidad aumenta de 80 a 100. ¿Cuál fue el aumento porcentual?",
    answers: ["20 %", "25 %", "40 %", "80 %"],
    correct: 1,
    explanation: "El aumento es 20 y se compara con el valor inicial: 20 ÷ 80 = 0,25, es decir 25 %.",
  },
  {
    question: "¿Cuál de estas fuentes debe tener prioridad al verificar una convocatoria pública?",
    answers: ["Un comentario de red social", "Un video sin fuentes", "La entidad que publica las bases", "Una captura reenviada"],
    correct: 2,
    explanation: "Las bases, resoluciones y comunicados de la entidad responsable son la fuente primaria de la convocatoria.",
  },
];
