import { GitCommitIcon } from "@primer/octicons-react";
import type { Experience } from "@/content/profile";
import { formatMonth, ui, type Locale } from "@/lib/i18n";
import { Box, Label, Topic } from "./Primitives";

export function Timeline({ items, locale }: { items: Experience[]; locale: Locale }) {
  const t = ui[locale];
  return (
    <ol className="relative ml-2 border-l-2 border-line pl-6">
      {items.map((item) => (
        <li key={item.id} className="relative pb-8 last:pb-0">
          <span className="absolute -left-[33px] top-3 bg-canvas text-muted">
            <GitCommitIcon size={16} />
          </span>
          <p className="mb-2 text-sm text-muted">
            <time dateTime={item.start}>{formatMonth(item.start, locale)}</time> –{" "}
            {item.end ? <time dateTime={item.end}>{formatMonth(item.end, locale)}</time> : t.present}
          </p>
          <Box>
            <div className="flex flex-wrap items-center gap-2 border-b border-line bg-subtle px-4 py-3">
              <h3 className="text-base font-semibold">
                {item.role[locale]} <span className="font-normal text-muted">@ {item.company}</span>
              </h3>
              <span className="flex gap-1">
                <Label>{item.employment === "fullTime" ? t.fullTime : t.partTime}</Label>
                <Label>{item.workplace === "remote" ? t.remote : t.onSite}</Label>
              </span>
            </div>
            <div className="px-4 py-3">
              <p className="mb-2">{item.summary[locale]}</p>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                {item.bullets[locale].map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1">
                {item.topics.map((topic) => (
                  <Topic key={topic} name={topic} />
                ))}
              </div>
            </div>
          </Box>
        </li>
      ))}
    </ol>
  );
}
