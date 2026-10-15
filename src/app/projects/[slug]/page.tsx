import type { Metadata } from "next";
import { getProject, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";
import { ProjectDetailView } from "@/views/ProjectDetailView";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata("en", `/projects/${slug}`, getProject(slug)?.name);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProjectDetailView locale="en" slug={slug} />;
}
