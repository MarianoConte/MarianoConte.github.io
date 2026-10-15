/** Colors from GitHub Linguist so language dots look familiar. */
export const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#663399",
  SCSS: "#c6538c",
  Java: "#b07219",
  Python: "#3572A5",
  Markdown: "#083fa1",
  "C#": "#178600",
  C: "#555555",
};

export const unknownLanguageColor = "#8b949e";

export function languageColor(language: string | null | undefined): string {
  return (language && languageColors[language]) || unknownLanguageColor;
}

export type LanguageShare = { name: string; count: number; percent: number; color: string };

/** Share of repositories per primary language, largest first. Repos without a language are ignored. */
export function languageShares(languages: (string | null)[]): LanguageShare[] {
  const counts = new Map<string, number>();
  for (const lang of languages) if (lang) counts.set(lang, (counts.get(lang) ?? 0) + 1);
  const total = [...counts.values()].reduce((a, b) => a + b, 0);
  if (total === 0) return [];
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count, percent: Math.round((count / total) * 1000) / 10, color: languageColor(name) }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
