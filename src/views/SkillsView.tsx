import { LanguageBar } from "@/components/LanguageBar";
import { Box, Topic } from "@/components/Primitives";
import { Shell } from "@/components/Shell";
import { profile, skillGroups } from "@/content/profile";
import { projects } from "@/content/projects";
import { getRepos } from "@/lib/github";
import { ui, type Locale } from "@/lib/i18n";
import { languageShares } from "@/lib/languages";

export async function SkillsView({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const repos = await getRepos();
  const shares = languageShares(repos.map((r) => r.language));

  return (
    <Shell locale={locale} path="/skills" active="skills" counts={{ repositories: repos.length, projects: projects.length }}>
      <h2 className="mb-4 text-xl font-semibold">{t.tabs.skills}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <Box key={group.title.en} className="p-4">
            <h3 className="mb-3 text-base font-semibold">{group.title[locale]}</h3>
            <ul className="flex flex-wrap gap-1">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Topic name={skill} />
                </li>
              ))}
            </ul>
          </Box>
        ))}
        <Box className="p-4">
          <h3 className="mb-3 text-base font-semibold">{t.languages}</h3>
          <ul className="space-y-1">
            {profile.spokenLanguages.map((l) => (
              <li key={l.en}>{l[locale]}</li>
            ))}
          </ul>
        </Box>
      </div>
      <Box className="mt-6 p-4">
        <LanguageBar shares={shares} label={t.reposLanguages} />
      </Box>
    </Shell>
  );
}
