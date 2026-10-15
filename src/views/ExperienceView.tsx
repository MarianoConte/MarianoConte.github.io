import { Shell } from "@/components/Shell";
import { Timeline } from "@/components/Timeline";
import { experience } from "@/content/profile";
import { projects } from "@/content/projects";
import { getRepos } from "@/lib/github";
import { ui, type Locale } from "@/lib/i18n";

export async function ExperienceView({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const repos = await getRepos();
  return (
    <Shell locale={locale} path="/experience" active="experience" counts={{ repositories: repos.length, projects: projects.length }}>
      <h2 className="mb-4 text-xl font-semibold">{t.tabs.experience}</h2>
      <Timeline items={experience} locale={locale} />
    </Shell>
  );
}
