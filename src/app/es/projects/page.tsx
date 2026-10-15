import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ProjectsView } from "@/views/ProjectsView";

export const metadata: Metadata = pageMetadata("es", "/projects", "Proyectos");

export default function Page() {
  return <ProjectsView locale="es" />;
}
