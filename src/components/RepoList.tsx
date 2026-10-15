"use client";

import { useId, useMemo, useState } from "react";
import { SearchIcon, StarIcon } from "@primer/octicons-react";
import type { Repo } from "@/lib/github";
import { formatDate, ui, type Locale } from "@/lib/i18n";
import { Label, LanguageDot, Topic } from "./Primitives";

export function RepoList({ repos, locale }: { repos: Repo[]; locale: Locale }) {
  const t = ui[locale];
  const searchId = useId();
  const languageId = useId();
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("");

  const languages = useMemo(
    () => [...new Set(repos.map((r) => r.language).filter((l): l is string => Boolean(l)))].sort(),
    [repos],
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return repos.filter(
      (r) =>
        (!language || r.language === language) &&
        (!q || r.name.toLowerCase().includes(q) || (r.description ?? "").toLowerCase().includes(q)),
    );
  }, [repos, query, language]);

  return (
    <div>
      <div className="flex flex-col gap-2 border-b border-line pb-4 sm:flex-row">
        <label htmlFor={searchId} className="sr-only">
          {t.findRepo}
        </label>
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-muted">
            <SearchIcon size={16} />
          </span>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.findRepo}
            className="h-8 w-full rounded-md border border-line bg-canvas pl-8 pr-3 text-sm text-fg placeholder:text-muted"
          />
        </div>
        <label htmlFor={languageId} className="sr-only">
          {t.language}
        </label>
        <select
          id={languageId}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="h-8 rounded-md border border-line bg-btn px-3 text-sm text-fg"
        >
          <option value="">
            {t.language}: {t.all}
          </option>
          {languages.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      <p className="sr-only" aria-live="polite">
        {t.reposCount(visible.length)}
      </p>

      {visible.length === 0 ? (
        <p className="py-10 text-center text-muted">{t.noRepos}</p>
      ) : (
        <ul>
          {visible.map((repo) => (
            <li key={repo.name} className="border-b border-line py-6">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold">
                  <a href={repo.html_url} className="break-all">
                    {repo.name}
                  </a>
                </h3>
                <Label>{t.public}</Label>
                <Label>{repo.featured ? t.featured : t.learning}</Label>
              </div>
              {repo.description && <p className="mt-1 text-sm text-muted">{repo.description}</p>}
              {repo.topics.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {repo.topics.map((topic) => (
                    <Topic key={topic} name={topic} />
                  ))}
                </div>
              )}
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted">
                <LanguageDot language={repo.language} />
                {repo.stargazers_count > 0 && (
                  <span className="inline-flex items-center gap-1">
                    <StarIcon size={16} />
                    {repo.stargazers_count}
                  </span>
                )}
                <span>
                  {t.updated} <time dateTime={repo.pushed_at}>{formatDate(repo.pushed_at, locale)}</time>
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
