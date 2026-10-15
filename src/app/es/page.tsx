import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { OverviewView } from "@/views/OverviewView";

export const metadata: Metadata = pageMetadata("es", "/");

export default function Page() {
  return <OverviewView locale="es" />;
}
