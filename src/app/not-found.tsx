import Link from "next/link";
import { Shell } from "@/components/Shell";
import { ui } from "@/lib/i18n";

export default function NotFound() {
  const t = ui.en;
  return (
    <Shell locale="en" path="/" sidebar={false}>
      <div className="py-24 text-center">
        <p className="font-mono text-5xl text-muted">404</p>
        <h1 className="mt-4 text-2xl font-semibold">{t.notFoundTitle}</h1>
        <Link href="/" className="mt-6 inline-block">
          {t.notFoundBack}
        </Link>
      </div>
    </Shell>
  );
}
