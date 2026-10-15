import { ContributionGraph } from "@/components/ContributionGraph";
import { PinnedCard } from "@/components/PinnedCard";
import { SectionTitle } from "@/components/Primitives";
import { Readme } from "@/components/Readme";
import { Shell } from "@/components/Shell";
import { experience, readme } from "@/content/profile";
import { projects } from "@/content/projects";
import { getRepos } from "@/lib/github";
import { ui, type Locale } from "@/lib/i18n";

export async function OverviewView({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const repos = await getRepos();
  const roles = experience.map(({ start, end, intensity }) => ({ start, end, intensity }));
  const greeting = locale === "en" ? "Hi, I'm Mariano 👋" : "Hola, soy Mariano 👋";

  return (
    <Shell locale={locale} path="/" active="overview" counts={{ repositories: repos.length, projects: projects.length }}>
      <Readme blocks={readme[locale]} greeting={greeting} />

      <section aria-labelledby="pinned-heading" className="mt-6">
        <SectionTitle id="pinned-heading">{t.pinned}</SectionTitle>
        <ol className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 6).map((project) => (
            <li key={project.slug}>
              <PinnedCard project={project} locale={locale} />
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-8">
        <ContributionGraph roles={roles} locale={locale} today={new Date().toISOString()} />
      </div>
    </Shell>
  );
}
