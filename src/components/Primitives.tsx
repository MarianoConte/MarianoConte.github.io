import type { ReactNode } from "react";
import { languageColor } from "@/lib/languages";

export function Box({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-md border border-line bg-canvas ${className}`}>{children}</div>;
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-[7px] text-xs font-medium leading-[18px] text-muted">
      {children}
    </span>
  );
}

export function Topic({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-subtle px-2.5 text-xs font-medium leading-[22px] text-accent">
      {name}
    </span>
  );
}

export function LanguageDot({ language }: { language: string | null }) {
  if (!language) return null;
  return (
    <span className="inline-flex items-center gap-1 text-xs text-muted">
      <span aria-hidden className="h-3 w-3 rounded-full border border-line-muted" style={{ backgroundColor: languageColor(language) }} />
      <span itemProp="programmingLanguage">{language}</span>
    </span>
  );
}

export function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="mb-2 text-base font-normal text-fg">
      {children}
    </h2>
  );
}
