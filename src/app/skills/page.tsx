import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { SkillsView } from "@/views/SkillsView";

export const metadata: Metadata = pageMetadata("en", "/skills", "Skills");

export default function Page() {
  return <SkillsView locale="en" />;
}
