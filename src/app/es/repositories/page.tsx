import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { RepositoriesView } from "@/views/RepositoriesView";

export const metadata: Metadata = pageMetadata("es", "/repositories", "Repositorios");

export default function Page() {
  return <RepositoriesView locale="es" />;
}
