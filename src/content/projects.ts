import type { Localized } from "@/lib/i18n";

export type ProjectKind = "repo" | "caseStudy";

export type ProjectSection = { title: Localized; body?: Localized; bullets?: Localized<string[]> };

export type Project = {
  slug: string;
  kind: ProjectKind;
  name: string;
  tagline: Localized;
  /** Primary language shown on the pinned card, GitHub style. */
  language: string;
  topics: string[];
  repoUrl?: string;
  demoUrl?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    kind: "repo",
    name: "MarianoConte.github.io",
    tagline: {
      en: "This site: a GitHub-style portfolio built with Next.js, TypeScript and Tailwind CSS, tested with Vitest and Cypress.",
      es: "Este sitio: un portfolio estilo GitHub hecho con Next.js, TypeScript y Tailwind CSS, testeado con Vitest y Cypress.",
    },
    language: "TypeScript",
    topics: ["nextjs", "typescript", "tailwindcss", "vitest", "cypress", "github-actions", "github-pages"],
    repoUrl: "https://github.com/MarianoConte/MarianoConte.github.io",
    demoUrl: "https://marianoconte.github.io/",
    sections: [
      {
        title: { en: "Overview", es: "Resumen" },
        body: {
          en: "A static Next.js site exported for GitHub Pages, bilingual (English and Spanish), with light and dark themes and a GitHub-inspired interface.",
          es: "Un sitio estático en Next.js exportado para GitHub Pages, bilingüe (inglés y español), con tema claro y oscuro y una interfaz inspirada en GitHub.",
        },
      },
      {
        title: { en: "Engineering", es: "Ingeniería" },
        bullets: {
          en: [
            "Next.js App Router with static export and typed content in TypeScript",
            "Repository data pulled from the GitHub API at build time, filtered through an allowlist so private or unrelated repos never show up",
            "Unit and component tests with Vitest and React Testing Library, plus a Cypress smoke test",
            "GitHub Actions pipeline: lint, type check, tests and build before every deploy",
            "Accessible markup, keyboard navigation and no layout shift on theme switch",
          ],
          es: [
            "Next.js App Router con export estático y contenido tipado en TypeScript",
            "Datos de repos obtenidos de la API de GitHub al compilar, filtrados por una lista permitida para que nunca aparezcan repos privados o ajenos",
            "Tests unitarios y de componentes con Vitest y React Testing Library, más un smoke test con Cypress",
            "Pipeline en GitHub Actions: lint, chequeo de tipos, tests y build antes de cada deploy",
            "Marcado accesible, navegación por teclado y sin saltos de layout al cambiar de tema",
          ],
        },
      },
    ],
  },
  {
    slug: "report-export-pipeline",
    kind: "caseStudy",
    name: "report-export-pipeline",
    tagline: {
      en: "Re-engineered a report export pipeline to go from 2,000 to 120,000+ rows (60x) with identical output.",
      es: "Rediseñé un pipeline de exportación de reportes para pasar de 2.000 a más de 120.000 filas (60x) con el mismo resultado.",
    },
    language: "Java",
    topics: ["spring-boot", "sql-server", "jasperreports", "performance"],
    sections: [
      {
        title: { en: "Context", es: "Contexto" },
        body: {
          en: "Public safety software for Seguritech (Mexico). Report exports in a production system topped out at about 2,000 rows.",
          es: "Software de seguridad pública para Seguritech (México). Las exportaciones de reportes de un sistema en producción llegaban como máximo a unas 2.000 filas.",
        },
      },
      {
        title: { en: "What I did", es: "Qué hice" },
        body: {
          en: "Re-engineered the export pipeline across Spring Boot, SQL Server and JasperReports, keeping the generated reports identical to the previous output.",
          es: "Rediseñé el pipeline de exportación en Spring Boot, SQL Server y JasperReports, manteniendo los reportes idénticos a los anteriores.",
        },
      },
      {
        title: { en: "Result", es: "Resultado" },
        bullets: {
          en: ["Exports scale from 2,000 to 120,000+ rows (60x)", "Identical output to the original reports", "Also improved file export in a second system"],
          es: ["Las exportaciones pasan de 2.000 a más de 120.000 filas (60x)", "El resultado es idéntico al de los reportes originales", "También mejoré la exportación de archivos en un segundo sistema"],
        },
      },
    ],
  },
  {
    slug: "angularjs-ui-redesign",
    kind: "caseStudy",
    name: "angularjs-ui-redesign",
    tagline: {
      en: "Full UI redesign of a legacy AngularJS (1.x) detainee management application, implemented from Figma designs.",
      es: "Rediseño completo de la UI de una aplicación legacy en AngularJS (1.x) de gestión de detenidos, implementado a partir de diseños en Figma.",
    },
    language: "JavaScript",
    topics: ["angularjs", "figma", "ui-redesign", "legacy"],
    sections: [
      {
        title: { en: "Context", es: "Contexto" },
        body: {
          en: "A production AngularJS (1.x) detainee management application used in Seguritech's (Mexico) operations, due for a full interface redesign.",
          es: "Una aplicación en producción en AngularJS (1.x) de gestión de detenidos, usada en las operaciones de Seguritech (México), que necesitaba un rediseño completo de la interfaz.",
        },
      },
      {
        title: { en: "What I did", es: "Qué hice" },
        bullets: {
          en: ["Implemented the full redesign from Figma designs", "Rebuilt the interface inside the existing AngularJS codebase", "Streamlined workflows and resolved client-reported issues"],
          es: ["Implementé el rediseño completo a partir de los diseños en Figma", "Reconstruí la interfaz dentro del código existente en AngularJS", "Simplifiqué flujos y resolví problemas reportados por el cliente"],
        },
      },
    ],
  },
  {
    slug: "ticketing-platform",
    kind: "caseStudy",
    name: "ticketing-platform",
    tagline: {
      en: "Frontend of a ticketing platform used by ~1,000 users, built and extended over several years.",
      es: "Frontend de una plataforma de tickets usada por ~1.000 usuarios, construido y extendido durante varios años.",
    },
    language: "TypeScript",
    topics: ["react", "typescript", "react-query", "material-ui", "jest"],
    sections: [
      {
        title: { en: "Context", es: "Contexto" },
        body: {
          en: "A ticketing platform for Seguritech (Mexico), used by around 1,000 people across public safety operations.",
          es: "Una plataforma de tickets para Seguritech (México), usada por unas 1.000 personas en operaciones de seguridad pública.",
        },
      },
      {
        title: { en: "What I built", es: "Qué construí" },
        bullets: {
          en: [
            "Authentication, roles and permissions",
            "CRUD for multiple catalogs",
            "Multilingual support and geolocation",
            "Activity logging and inventory control",
            "Excel and PDF import and export",
            "Unit tests with Jest, plus code reviews and client demos",
          ],
          es: [
            "Autenticación, roles y permisos",
            "CRUD de múltiples catálogos",
            "Soporte multilenguaje y geolocalización",
            "Registro de actividad y control de inventario",
            "Importación y exportación a Excel y PDF",
            "Tests unitarios con Jest, code reviews y demos con el cliente",
          ],
        },
      },
    ],
  },
  {
    slug: "ai-assisted-workflow",
    kind: "caseStudy",
    name: "ai-assisted-workflow",
    tagline: {
      en: "Claude Code in my daily workflow, extended with MCP servers and custom skills, slash commands and hooks.",
      es: "Claude Code en mi trabajo diario, con servidores MCP y skills, slash commands y hooks propios.",
    },
    language: "Markdown",
    topics: ["claude-code", "mcp", "ai-assisted-development", "cursor", "github-copilot"],
    sections: [
      {
        title: { en: "How I use it", es: "Cómo lo uso" },
        bullets: {
          en: [
            "Claude Code every day for implementation, refactoring, testing and code review",
            "MCP servers connected to the tools the team already uses",
            "Custom skills, slash commands and hooks to automate repetitive development tasks",
            "Cursor, GitHub Copilot and ChatGPT / Codex alongside it",
          ],
          es: [
            "Claude Code todos los días para implementar, refactorizar, testear y revisar código",
            "Servidores MCP conectados a las herramientas que el equipo ya usa",
            "Skills, slash commands y hooks propios para automatizar tareas repetitivas",
            "Cursor, GitHub Copilot y ChatGPT / Codex como complemento",
          ],
        },
      },
      {
        title: { en: "This site", es: "Este sitio" },
        body: {
          en: "This portfolio was built with Claude Code: Next.js, TypeScript, Tailwind CSS, Vitest, React Testing Library and Cypress, deployed to GitHub Pages with GitHub Actions.",
          es: "Este portfolio se hizo con Claude Code: Next.js, TypeScript, Tailwind CSS, Vitest, React Testing Library y Cypress, publicado en GitHub Pages con GitHub Actions.",
        },
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
