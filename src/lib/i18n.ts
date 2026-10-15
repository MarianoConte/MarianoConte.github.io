export type Locale = "en" | "es";
export type Localized<T = string> = Record<Locale, T>;

export const locales: Locale[] = ["en", "es"];

/** Builds a site path for a locale. English lives at the root, Spanish under /es. */
export function localePath(locale: Locale, path = "/"): string {
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  const clean = trimmed ? `/${trimmed}/` : "/";
  if (locale === "en") return clean;
  return clean === "/" ? "/es/" : `/es${clean}`;
}

export const ui = {
  en: {
    tabs: {
      overview: "Overview",
      experience: "Experience",
      projects: "Projects",
      repositories: "Repositories",
      skills: "Skills",
    },
    skipToContent: "Skip to content",
    pinned: "Pinned",
    status: "Open to Full Stack and Frontend roles",
    links: "Links",
    languages: "Languages",
    switchLanguage: "Ver en español",
    switchLanguageShort: "ES",
    themeToggle: "Toggle color theme",
    careerHeading: (days: number, year: number) => `${days} working days in professional roles in ${year}`,
    careerNote: "Based on employment dates, not on commit data.",
    less: "Less",
    more: "More",
    findRepo: "Find a repository…",
    language: "Language",
    all: "All",
    updated: "Updated",
    learning: "Learning project",
    featured: "Featured",
    caseStudy: "Case study",
    public: "Public",
    noRepos: "No repositories match your search.",
    reposCount: (n: number) => `${n} public repositories`,
    viewOnGitHub: "View on GitHub",
    liveDemo: "Live demo",
    about: "About",
    stack: "Stack",
    backToProjects: "All projects",
    present: "Present",
    partTime: "Part-time",
    fullTime: "Full-time",
    remote: "Remote",
    onSite: "On-site",
    reposLanguages: "Languages across public repositories",
    footerBuilt: "Built with Next.js, TypeScript and Tailwind CSS. Developed with Claude Code.",
    footerSource: "Source",
    notFoundTitle: "This page doesn't exist",
    notFoundBack: "Back to the overview",
  },
  es: {
    tabs: {
      overview: "Resumen",
      experience: "Experiencia",
      projects: "Proyectos",
      repositories: "Repositorios",
      skills: "Aptitudes",
    },
    skipToContent: "Ir al contenido",
    pinned: "Fijados",
    status: "Disponible para roles Full Stack y Frontend",
    links: "Enlaces",
    languages: "Idiomas",
    switchLanguage: "View in English",
    switchLanguageShort: "EN",
    themeToggle: "Cambiar tema de color",
    careerHeading: (days: number, year: number) => `${days} días hábiles en roles profesionales en ${year}`,
    careerNote: "Basado en fechas de empleo, no en commits.",
    less: "Menos",
    more: "Más",
    findRepo: "Buscar un repositorio…",
    language: "Lenguaje",
    all: "Todos",
    updated: "Actualizado",
    learning: "Proyecto de aprendizaje",
    featured: "Destacado",
    caseStudy: "Caso de estudio",
    public: "Público",
    noRepos: "Ningún repositorio coincide con tu búsqueda.",
    reposCount: (n: number) => `${n} repositorios públicos`,
    viewOnGitHub: "Ver en GitHub",
    liveDemo: "Demo en vivo",
    about: "Acerca de",
    stack: "Stack",
    backToProjects: "Todos los proyectos",
    present: "Actualidad",
    partTime: "Media jornada",
    fullTime: "Jornada completa",
    remote: "Remoto",
    onSite: "Presencial",
    reposLanguages: "Lenguajes en los repositorios públicos",
    footerBuilt: "Hecho con Next.js, TypeScript y Tailwind CSS. Desarrollado con Claude Code.",
    footerSource: "Código",
    notFoundTitle: "Esta página no existe",
    notFoundBack: "Volver al resumen",
  },
} as const;

export type UiStrings = (typeof ui)[Locale];

export function formatMonth(isoMonth: string, locale: Locale): string {
  const [y, m] = isoMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-AR", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, 1)));
}

export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}
