import Link from "next/link";
import { ArrowLeftIcon, BookIcon, LinkExternalIcon, MarkGithubIcon, NoteIcon, RepoIcon } from "@primer/octicons-react";
import { notFound } from "next/navigation";
import { Box, Label, LanguageDot, Topic } from "@/components/Primitives";
import { Shell } from "@/components/Shell";
import { profile } from "@/content/profile";
import { getProject } from "@/content/projects";
import { localePath, ui, type Locale } from "@/lib/i18n";

export function ProjectDetailView({ locale, slug }: { locale: Locale; slug: string }) {
  const project = getProject(slug);
  if (!project) notFound();
  const t = ui[locale];
  const TitleIcon = project.kind === "repo" ? RepoIcon : NoteIcon;

  return (
    <Shell locale={locale} path={`/projects/${slug}`} sidebar={false}>
      <Link href={localePath(locale, "/projects")} className="mb-4 inline-flex items-center gap-1 text-sm">
        <ArrowLeftIcon size={16} />
        {t.backToProjects}
      </Link>

      <div className="flex flex-wrap items-center gap-2 border-b border-line pb-4">
        <span className="text-muted">
          <TitleIcon size={16} />
        </span>
        <h1 className="text-xl">
          <Link href={localePath(locale)} className="font-normal">
            {profile.login}
          </Link>
          <span className="mx-1 text-muted">/</span>
          <span className="font-semibold">{project.name}</span>
        </h1>
        <Label>{project.kind === "repo" ? t.public : t.caseStudy}</Label>
      </div>

      <div className="mt-6 gap-6 lg:flex">
        <article className="min-w-0 flex-1">
          <Box>
            <div className="flex items-center gap-2 border-b border-line px-4 py-3 text-sm font-semibold">
              <BookIcon size={16} />
              README
            </div>
            <div className="space-y-6 px-6 py-6 text-base leading-relaxed">
              <p className="text-lg">{project.tagline[locale]}</p>
              {project.sections.map((section) => (
                <section key={section.title.en}>
                  <h2 className="mb-2 border-b border-line pb-1 text-xl font-semibold">{section.title[locale]}</h2>
                  {section.body && <p>{section.body[locale]}</p>}
                  {section.bullets && (
                    <ul className="list-disc space-y-1 pl-6">
                      {section.bullets[locale].map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </Box>
        </article>

        <aside className="mt-6 lg:mt-0 lg:w-[296px] lg:shrink-0">
          <h2 className="mb-3 text-base font-semibold">{t.about}</h2>
          <p className="mb-3 text-sm">{project.tagline[locale]}</p>
          <ul className="mb-4 space-y-2 text-sm">
            {project.demoUrl && (
              <li className="flex items-center gap-2">
                <LinkExternalIcon size={16} />
                <a href={project.demoUrl}>{t.liveDemo}</a>
              </li>
            )}
            {project.repoUrl && (
              <li className="flex items-center gap-2">
                <MarkGithubIcon size={16} />
                <a href={project.repoUrl}>{t.viewOnGitHub}</a>
              </li>
            )}
          </ul>
          <div className="mb-4 flex flex-wrap gap-1">
            {project.topics.map((topic) => (
              <Topic key={topic} name={topic} />
            ))}
          </div>
          <div className="border-t border-line pt-4">
            <h2 className="mb-2 text-base font-semibold">{t.stack}</h2>
            <LanguageDot language={project.language} />
          </div>
        </aside>
      </div>
    </Shell>
  );
}
