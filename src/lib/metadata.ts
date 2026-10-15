import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { localePath, type Locale } from "./i18n";

export const SITE_URL = "https://marianoconte.github.io";

const descriptions = {
  en: "Mariano Conte, Senior Full Stack Developer (React, TypeScript, Next.js, Node.js). Experience, case studies, repositories and skills.",
  es: "Mariano Conte, Senior Full Stack Developer (React, TypeScript, Next.js, Node.js). Experiencia, casos de estudio, repositorios y aptitudes.",
};

export function pageMetadata(locale: Locale, path: string, title?: string): Metadata {
  const fullTitle = title ? `${title} · ${profile.name}` : `${profile.name} · Senior Full Stack Developer`;
  const url = `${SITE_URL}${localePath(locale, path)}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description: descriptions[locale],
    alternates: {
      canonical: url,
      languages: { en: localePath("en", path), es: localePath("es", path), "x-default": localePath("en", path) },
    },
    openGraph: {
      type: "profile",
      title: fullTitle,
      description: descriptions[locale],
      url,
      locale: locale === "en" ? "en_US" : "es_AR",
      images: [{ url: profile.avatarUrl, width: 460, height: 460, alt: profile.name }],
    },
    twitter: { card: "summary", title: fullTitle, description: descriptions[locale] },
  };
}
