import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { themeInitScript } from "@/components/ThemeToggle";
import { pageMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = pageMetadata("en", "/");

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#010409" },
  ],
};

// Spanish pages set lang="es" on their own wrapper (see Shell), so one root layout serves both.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
