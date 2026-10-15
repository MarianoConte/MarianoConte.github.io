import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { RepositoriesView } from "@/views/RepositoriesView";

export const metadata: Metadata = pageMetadata("en", "/repositories", "Repositories");

export default function Page() {
  return <RepositoriesView locale="en" />;
}
