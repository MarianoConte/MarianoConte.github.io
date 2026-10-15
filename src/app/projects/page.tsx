import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ProjectsView } from "@/views/ProjectsView";

export const metadata: Metadata = pageMetadata("en", "/projects", "Projects");

export default function Page() {
  return <ProjectsView locale="en" />;
}
