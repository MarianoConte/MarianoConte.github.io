import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ExperienceView } from "@/views/ExperienceView";

export const metadata: Metadata = pageMetadata("en", "/experience", "Experience");

export default function Page() {
  return <ExperienceView locale="en" />;
}
