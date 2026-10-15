import { RepoList } from "@/components/RepoList";
import { Shell } from "@/components/Shell";
import { projects } from "@/content/projects";
import { getRepos } from "@/lib/github";
import { ui, type Locale } from "@/lib/i18n";

export async function RepositoriesView({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const repos = await getRepos();
  return (
    <Shell locale={locale} path="/repositories" active="repositories" counts={{ repositories: repos.length, projects: projects.length }}>
      <h2 className="sr-only">{t.tabs.repositories}</h2>
      <RepoList repos={repos} locale={locale} />
    </Shell>
  );
}
