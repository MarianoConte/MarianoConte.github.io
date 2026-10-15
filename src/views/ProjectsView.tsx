import { PinnedCard } from "@/components/PinnedCard";
import { Shell } from "@/components/Shell";
import { projects } from "@/content/projects";
import { getRepos } from "@/lib/github";
import { ui, type Locale } from "@/lib/i18n";

export async function ProjectsView({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const repos = await getRepos();
  return (
    <Shell locale={locale} path="/projects" active="projects" counts={{ repositories: repos.length, projects: projects.length }}>
      <h2 className="mb-4 text-xl font-semibold">{t.tabs.projects}</h2>
      <ol className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <PinnedCard project={project} locale={locale} />
          </li>
        ))}
      </ol>
    </Shell>
  );
}
