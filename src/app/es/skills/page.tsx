import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { SkillsView } from "@/views/SkillsView";

export const metadata: Metadata = pageMetadata("es", "/skills", "Aptitudes");

export default function Page() {
  return <SkillsView locale="es" />;
}
