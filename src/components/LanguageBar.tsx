import type { LanguageShare } from "@/lib/languages";

export function LanguageBar({ shares, label }: { shares: LanguageShare[]; label: string }) {
  if (shares.length === 0) return null;
  return (
    <figure>
      <figcaption className="mb-2 text-base font-semibold">{label}</figcaption>
      <div className="flex h-2 overflow-hidden rounded-md" aria-hidden>
        {shares.map((s) => (
          <span key={s.name} style={{ width: `${s.percent}%`, backgroundColor: s.color }} className="h-full outline outline-2 outline-canvas" />
        ))}
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
        {shares.map((s) => (
          <li key={s.name} className="inline-flex items-center gap-1">
            <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
            <span className="font-semibold text-fg">{s.name}</span>
            <span className="text-muted">{s.percent}%</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
