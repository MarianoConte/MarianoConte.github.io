"use client";

import { MoonIcon, SunIcon } from "@primer/octicons-react";

export const THEME_STORAGE_KEY = "theme";

/** Runs before paint (inlined in <head>) so the saved theme never flashes. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})();`;

export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const current = root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line bg-btn text-muted transition-colors hover:bg-btn-hover hover:text-fg"
    >
      <span className="hidden dark:inline-flex">
        <SunIcon size={16} />
      </span>
      <span className="inline-flex dark:hidden">
        <MoonIcon size={16} />
      </span>
    </button>
  );
}
