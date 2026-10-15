import type { Localized } from "@/lib/i18n";

export const profile = {
  name: "Mariano Conte",
  login: "MarianoConte",
  avatarUrl: "https://github.com/MarianoConte.png?size=460",
  headline: {
    en: "Senior Full Stack Developer | React, TypeScript, Next.js, Node.js",
    es: "Senior Full Stack Developer | React, TypeScript, Next.js, Node.js",
  } satisfies Localized,
  location: {
    en: "Mar del Plata, Argentina · Remote (UTC-3)",
    es: "Mar del Plata, Argentina · Remoto (UTC-3)",
  } satisfies Localized,
  links: {
    linkedin: "https://www.linkedin.com/in/mariano-conte/",
    github: "https://github.com/MarianoConte",
  },
  spokenLanguages: [
    { en: "English: B2 (professional working)", es: "Inglés: B2 (profesional)" },
    { en: "Spanish: native", es: "Español: nativo" },
  ] satisfies Localized[],
};

/** README blocks: paragraphs and bullet lists, rendered like a GitHub profile README. */
export type ReadmeBlock = { type: "p"; text: string } | { type: "h"; text: string } | { type: "ul"; items: string[] };

export const readme: Localized<ReadmeBlock[]> = {
  en: [
    {
      type: "p",
      text: "Full Stack Developer with 7+ years of experience, mostly on the frontend with React and TypeScript.",
    },
    {
      type: "p",
      text: "For the past 4 years I've worked on mission-critical public safety software for Seguritech (Mexico): a ticketing platform used by ~1,000 users, a full UI redesign of a legacy AngularJS application, and ongoing work on production dispatch and operations systems. A highlight: I re-engineered a report export pipeline (Spring Boot, SQL Server, JasperReports) to scale from 2,000 to 120,000+ rows (60x) with identical output.",
    },
    { type: "h", text: "What I bring" },
    {
      type: "ul",
      items: [
        "Component architecture with Atomic Design and UI libraries (Material UI, Ant Design, Tailwind CSS)",
        "Performance-focused technical decisions and code reviews",
        "Testing with Jest, Vitest, React Testing Library and Cypress",
        "Full stack range: Next.js, Node.js / Express, Spring Boot, Django and SQL",
        "Mentoring junior developers and presenting to clients",
        "AI-assisted development: Claude Code in my daily workflow, extended with MCP servers and custom skills, slash commands and hooks",
      ],
    },
    {
      type: "p",
      text: "Fully remote since 2022, working with distributed teams across time zones. Open to remote Senior Frontend and Full Stack roles (full-time or contract).",
    },
  ],
  es: [
    {
      type: "p",
      text: "Desarrollador Full Stack con más de 7 años de experiencia, principalmente en el frontend con React y TypeScript.",
    },
    {
      type: "p",
      text: "Hace 4 años trabajo en software crítico de seguridad pública para Seguritech (México): una plataforma de tickets usada por ~1.000 usuarios, el rediseño completo de la UI de una aplicación legacy en AngularJS y el trabajo continuo sobre sistemas de despacho y operaciones en producción. Un logro: rediseñé un pipeline de exportación de reportes (Spring Boot, SQL Server, JasperReports) para pasar de 2.000 a más de 120.000 filas (60x) con el mismo resultado.",
    },
    { type: "h", text: "Qué aporto" },
    {
      type: "ul",
      items: [
        "Arquitectura de componentes con Atomic Design y librerías de UI (Material UI, Ant Design, Tailwind CSS)",
        "Decisiones técnicas y code reviews con foco en performance",
        "Testing con Jest, Vitest, React Testing Library y Cypress",
        "Perfil full stack: Next.js, Node.js / Express, Spring Boot, Django y SQL",
        "Mentoría a desarrolladores junior y presentaciones a clientes",
        "Desarrollo asistido por IA: Claude Code en mi día a día, con servidores MCP y skills, slash commands y hooks propios",
      ],
    },
    {
      type: "p",
      text: "Trabajo 100% remoto desde 2022, con equipos distribuidos en distintas zonas horarias. Busco roles remotos Senior Frontend o Full Stack (relación de dependencia o contrato).",
    },
  ],
};

export type Experience = {
  id: string;
  company: string;
  role: Localized;
  start: string; // YYYY-MM
  end: string | null; // null = present
  employment: "fullTime" | "partTime";
  workplace: "remote" | "onSite";
  location: string;
  /** Weight used by the career activity graph (1-4). */
  intensity: 1 | 2 | 3 | 4;
  summary: Localized;
  bullets: Localized<string[]>;
  topics: string[];
};

export const experience: Experience[] = [
  {
    id: "exo-mindset",
    company: "Exo Mindset",
    role: { en: "Senior Frontend Engineer", es: "Senior Frontend Engineer" },
    start: "2022-11",
    end: null,
    employment: "fullTime",
    workplace: "remote",
    location: "La Calera, Córdoba, Argentina",
    intensity: 4,
    summary: {
      en: "Senior Frontend Engineer on public safety software for Seguritech (Mexico), working across several production systems.",
      es: "Senior Frontend Engineer en software de seguridad pública para Seguritech (México), trabajando en varios sistemas en producción.",
    },
    bullets: {
      en: [
        "Built and continuously extended the frontend of a ticketing platform used by ~1,000 users: authentication, roles and permissions, multi-catalog CRUD, multilingual support, geolocation, activity logging, inventory control and Excel/PDF import/export.",
        "Implemented the full UI redesign of a legacy AngularJS (1.x) detainee management application from Figma designs, rebuilding the interface, streamlining workflows and resolving client-reported issues.",
        "Re-engineered a report export pipeline (Spring Boot, SQL Server, JasperReports), scaling exports from 2,000 to 120,000+ rows (60x) with identical output. Also improved file export in a second system.",
        "Maintain and evolve three production systems for emergency dispatch and public safety operations.",
        "Drove frontend decisions on performance and architecture, reviewed code and mentored junior developers.",
        "Led client reviews and demos, wrote unit tests with Jest, and worked in Scrum with Jira and GitLab.",
        "Brought AI-assisted development into my daily work with Claude Code: connected MCP servers to the tools we use and wrote custom skills, slash commands and hooks to automate repetitive development tasks.",
      ],
      es: [
        "Construí y sigo extendiendo el frontend de una plataforma de tickets usada por ~1.000 usuarios: autenticación, roles y permisos, CRUD de múltiples catálogos, soporte multilenguaje, geolocalización, registro de actividad, control de inventario e importación/exportación a Excel/PDF.",
        "Implementé el rediseño completo de la UI de una aplicación legacy en AngularJS (1.x) de gestión de detenidos a partir de diseños en Figma: reconstruí la interfaz, simplifiqué flujos y resolví problemas reportados por el cliente.",
        "Rediseñé un pipeline de exportación de reportes (Spring Boot, SQL Server, JasperReports) para pasar de 2.000 a más de 120.000 filas (60x) con el mismo resultado. También mejoré la exportación de archivos en un segundo sistema.",
        "Mantengo y evoluciono tres sistemas en producción de despacho de emergencias y operaciones de seguridad pública.",
        "Impulsé decisiones de frontend sobre performance y arquitectura, hice code reviews y mentoreé a desarrolladores junior.",
        "Lideré revisiones y demos con el cliente, escribí tests unitarios con Jest y trabajé con Scrum, Jira y GitLab.",
        "Incorporé el desarrollo asistido por IA a mi trabajo diario con Claude Code: conecté servidores MCP a nuestras herramientas y escribí skills, slash commands y hooks propios para automatizar tareas repetitivas.",
      ],
    },
    topics: ["react", "typescript", "react-query", "material-ui", "angularjs", "jest", "spring-boot", "sql-server", "jasperreports", "figma", "claude-code"],
  },
  {
    id: "inidep",
    company: "INIDEP",
    role: { en: "Full Stack Developer", es: "Full Stack Developer" },
    start: "2021-10",
    end: "2022-10",
    employment: "fullTime",
    workplace: "onSite",
    location: "Mar del Plata, Argentina",
    intensity: 3,
    summary: {
      en: "Full Stack Developer at Argentina's National Institute for Fisheries Research and Development, on systems that process research vessel data (catches and environmental measurements).",
      es: "Full Stack Developer en el Instituto Nacional de Investigación y Desarrollo Pesquero, en sistemas que procesan datos de buques de investigación (capturas y mediciones ambientales).",
    },
    bullets: {
      en: [
        "Maintained and refactored modules of a Django / Python 2.7 system, improving code quality and performance.",
        "Wrote SQL stored procedures to keep vessel monitoring data up to date.",
        "Collaborated with the backend team on the replacement system built with React, Tailwind CSS and Django REST Framework.",
      ],
      es: [
        "Mantuve y refactoricé módulos de un sistema en Django / Python 2.7, mejorando la calidad del código y la performance.",
        "Escribí stored procedures en SQL para mantener actualizados los datos de monitoreo de buques.",
        "Colaboré con el equipo de backend en el sistema de reemplazo, hecho con React, Tailwind CSS y Django REST Framework.",
      ],
    },
    topics: ["react", "tailwindcss", "django", "django-rest-framework", "python", "sql"],
  },
  {
    id: "g4",
    company: "G4 Soluciones IT",
    role: { en: "Software Developer", es: "Software Developer" },
    start: "2019-02",
    end: "2021-10",
    employment: "partTime",
    workplace: "onSite",
    location: "Mar del Plata, Argentina",
    intensity: 2,
    summary: {
      en: "Part-time Software Developer at an IT services company in Mar del Plata.",
      es: "Software Developer a media jornada en una empresa de servicios de IT de Mar del Plata.",
    },
    bullets: {
      en: [
        "Built a picking system for a laboratory with React and Redux.",
        "Monitored and backed up server instances on AWS EC2.",
        "Supported production systems in Spring Boot and VBScript.",
        "Created and maintained SQL stored procedures handling sensitive data.",
      ],
      es: [
        "Construí un sistema de picking para un laboratorio con React y Redux.",
        "Monitoreé y respaldé instancias de servidores en AWS EC2.",
        "Di soporte a sistemas en producción en Spring Boot y VBScript.",
        "Creé y mantuve stored procedures en SQL que manejaban datos sensibles.",
      ],
    },
    topics: ["react", "redux", "aws-ec2", "spring-boot", "sql"],
  },
];

export type SkillGroup = { title: Localized; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Frontend", es: "Frontend" },
    skills: ["React", "TypeScript", "JavaScript", "Next.js", "React Query", "Redux", "AngularJS", "HTML5", "CSS", "Tailwind CSS", "Material UI", "Ant Design", "Atomic Design", "Responsive design", "Figma"],
  },
  {
    title: { en: "Testing & quality", es: "Testing y calidad" },
    skills: ["Jest", "Vitest", "React Testing Library", "Cypress", "Code review", "Web performance"],
  },
  {
    title: { en: "Backend & data", es: "Backend y datos" },
    skills: ["Node.js", "Express", "Prisma", "PostgreSQL", "Spring Boot", "Django / DRF", "Python", "SQL Server", "SQL", "REST APIs", "JasperReports", "AWS EC2"],
  },
  {
    title: { en: "AI-assisted development", es: "Desarrollo asistido por IA" },
    skills: ["Claude Code", "MCP servers", "Custom skills, commands & hooks", "Cursor", "GitHub Copilot", "ChatGPT / Codex"],
  },
  {
    title: { en: "Ways of working", es: "Forma de trabajo" },
    skills: ["Scrum", "Jira", "GitLab", "Git", "Mentoring", "Client demos", "Remote, distributed teams"],
  },
];
