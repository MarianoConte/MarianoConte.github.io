import Link from "next/link";
import { MarkGithubIcon } from "@primer/octicons-react";
import { profile } from "@/content/profile";
import { localePath, ui, type Locale } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ locale, path }: { locale: Locale; path: string }) {
  const t = ui[locale];
  const other: Locale = locale === "en" ? "es" : "en";

  return (
    <header className="border-b border-line bg-header">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-3 px-4 md:px-6 lg:px-8">
        <Link href={localePath(locale)} className="flex min-w-0 items-center gap-2 text-fg hover:no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export serves the GitHub avatar as is */}
          <img src={profile.avatarUrl} alt="" width={32} height={32} className="h-8 w-8 rounded-full border border-line" />
          <span className="truncate text-base font-semibold">{profile.login}</span>
          <span className="hidden text-muted sm:inline">/</span>
          <span className="hidden truncate text-muted sm:inline">portfolio</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Link
            href={localePath(other, path)}
            hrefLang={other}
            lang={other}
            title={t.switchLanguage}
            aria-label={t.switchLanguage}
            className="inline-flex h-8 items-center rounded-md border border-line bg-btn px-3 text-xs font-semibold text-fg transition-colors hover:bg-btn-hover hover:no-underline"
          >
            {t.switchLanguageShort}
          </Link>
          <ThemeToggle label={t.themeToggle} />
          <a
            href={profile.links.github}
            aria-label="GitHub"
            title="GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line bg-btn text-muted transition-colors hover:bg-btn-hover hover:text-fg"
          >
            <MarkGithubIcon size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
