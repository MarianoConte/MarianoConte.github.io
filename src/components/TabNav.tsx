import Link from "next/link";
import { BookIcon, BriefcaseIcon, ProjectIcon, RepoIcon, ToolsIcon, type Icon } from "@primer/octicons-react";
import { localePath, ui, type Locale } from "@/lib/i18n";

export type TabKey = "overview" | "experience" | "projects" | "repositories" | "skills";

const tabs: { key: TabKey; path: string; icon: Icon }[] = [
  { key: "overview", path: "/", icon: BookIcon },
  { key: "experience", path: "/experience", icon: BriefcaseIcon },
  { key: "projects", path: "/projects", icon: ProjectIcon },
  { key: "repositories", path: "/repositories", icon: RepoIcon },
  { key: "skills", path: "/skills", icon: ToolsIcon },
];

export function TabNav({ locale, active, counts = {} }: { locale: Locale; active?: TabKey; counts?: Partial<Record<TabKey, number>> }) {
  const t = ui[locale];
  return (
    <nav aria-label="Portfolio" className="border-b border-line">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <ul className="-mb-px flex gap-2 overflow-x-auto md:pl-[calc(25%+24px)]">
          {tabs.map(({ key, path, icon: TabIcon }) => {
            const isActive = key === active;
            return (
              <li key={key}>
                <Link
                  href={localePath(locale, path)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-2 py-3 text-sm text-fg hover:no-underline ${
                    isActive ? "border-tab-active font-semibold" : "border-transparent hover:border-line"
                  }`}
                >
                  <span className="text-muted">
                    <TabIcon size={16} />
                  </span>
                  {t.tabs[key]}
                  {counts[key] !== undefined && (
                    <span className="rounded-full bg-neutral px-1.5 text-xs font-medium leading-[18px] text-fg">{counts[key]}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
