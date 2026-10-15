import { CommentDiscussionIcon, DotFillIcon, GlobeIcon, LinkIcon, LocationIcon, MarkGithubIcon } from "@primer/octicons-react";
import { profile } from "@/content/profile";
import { ui, type Locale } from "@/lib/i18n";

export function ProfileSidebar({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return (
    <aside aria-label={profile.name} className="mb-6 md:mb-0 md:w-1/4 md:shrink-0">
      <div className="flex items-center gap-4 md:block">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export serves the GitHub avatar as is */}
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          width={296}
          height={296}
          className="h-20 w-20 rounded-full border border-line md:h-auto md:w-full md:max-w-[296px]"
        />
        <div className="md:mt-4">
          <h1 className="text-2xl font-semibold leading-tight">{profile.name}</h1>
          <p className="text-xl font-light leading-snug text-muted">{profile.login}</p>
        </div>
      </div>

      <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-fg">
        <span className="text-success">
          <DotFillIcon size={16} />
        </span>
        {t.status}
      </p>

      <p className="mt-4 text-base">{profile.headline[locale]}</p>

      <a
        href={profile.links.linkedin}
        className="mt-4 flex h-8 w-full items-center justify-center gap-2 rounded-md border border-line bg-btn text-sm font-medium text-fg transition-colors hover:bg-btn-hover hover:no-underline"
      >
        <CommentDiscussionIcon size={16} />
        {locale === "en" ? "Contact on LinkedIn" : "Contactar por LinkedIn"}
      </a>

      <ul className="mt-4 space-y-1.5 text-sm">
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-muted"><LocationIcon size={16} /></span>
          {profile.location[locale]}
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-muted"><LinkIcon size={16} /></span>
          <a href={profile.links.linkedin} className="break-all text-fg">linkedin.com/in/mariano-conte</a>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-muted"><MarkGithubIcon size={16} /></span>
          <a href={profile.links.github} className="text-fg">github.com/{profile.login}</a>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-muted"><GlobeIcon size={16} /></span>
          <span>{profile.spokenLanguages.map((l) => l[locale]).join(" · ")}</span>
        </li>
      </ul>
    </aside>
  );
}
