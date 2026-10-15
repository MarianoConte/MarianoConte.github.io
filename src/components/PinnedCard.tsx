import Link from "next/link";
import { NoteIcon, RepoIcon } from "@primer/octicons-react";
import type { Project } from "@/content/projects";
import { localePath, ui, type Locale } from "@/lib/i18n";
import { Box, Label, LanguageDot } from "./Primitives";

export function PinnedCard({ project, locale }: { project: Project; locale: Locale }) {
  const t = ui[locale];
  const CardIcon = project.kind === "repo" ? RepoIcon : NoteIcon;
  return (
    <Box className="flex h-full flex-col p-4">
      <div className="flex items-center gap-2">
        <span className="text-muted">
          <CardIcon size={16} />
        </span>
        <Link href={localePath(locale, `/projects/${project.slug}`)} className="truncate text-sm font-semibold">
          {project.name}
        </Link>
        <span className="ml-auto shrink-0">
          <Label>{project.kind === "repo" ? t.public : t.caseStudy}</Label>
        </span>
      </div>
      <p className="mt-2 flex-1 text-xs text-muted">{project.tagline[locale]}</p>
      <div className="mt-3">
        <LanguageDot language={project.language} />
      </div>
    </Box>
  );
}
