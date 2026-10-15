import type { ReactNode } from "react";
import { MarkGithubIcon } from "@primer/octicons-react";
import { profile } from "@/content/profile";
import { ui, type Locale } from "@/lib/i18n";
import { Header } from "./Header";
import { ProfileSidebar } from "./ProfileSidebar";
import { TabNav, type TabKey } from "./TabNav";

type ShellProps = {
  locale: Locale;
  /** Route path without the locale prefix, used by the language switch. */
  path: string;
  active?: TabKey;
  counts?: Partial<Record<TabKey, number>>;
  /** Repo-style pages (project details) hide the profile sidebar. */
  sidebar?: boolean;
  children: ReactNode;
};

export function Shell({ locale, path, active, counts, sidebar = true, children }: ShellProps) {
  const t = ui[locale];
  return (
    <div lang={locale} className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-canvas px-3 py-2 text-sm font-semibold focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {t.skipToContent}
      </a>
      <Header locale={locale} path={path} />
      {sidebar && <TabNav locale={locale} active={active} counts={counts} />}
      <div className="mx-auto w-full max-w-[1280px] flex-1 px-4 py-6 md:flex md:gap-6 md:px-6 lg:px-8">
        {sidebar && <ProfileSidebar locale={locale} />}
        <main id="main" className="min-w-0 flex-1">
          {children}
        </main>
      </div>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between md:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <MarkGithubIcon size={16} />© {new Date().getFullYear()} {profile.name}. {t.footerBuilt}
          </p>
          <a href={`${profile.links.github}/MarianoConte.github.io`} className="text-muted hover:text-accent">
            {t.footerSource}
          </a>
        </div>
      </footer>
    </div>
  );
}
