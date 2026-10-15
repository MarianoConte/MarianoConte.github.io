"use client";

import { useMemo, useState } from "react";
import { buildCareerYear, careerYears, countActiveDays, type CareerRole } from "@/lib/career";
import { ui, type Locale } from "@/lib/i18n";
import { Box } from "./Primitives";

const CELL = 10;
const GAP = 3;

type Props = { roles: CareerRole[]; locale: Locale; today: string };

/** GitHub-style calendar that shows working days in professional roles, derived from employment dates. */
export function ContributionGraph({ roles, locale, today }: Props) {
  const t = ui[locale];
  const todayDate = useMemo(() => new Date(today), [today]);
  const years = useMemo(() => careerYears(roles, todayDate), [roles, todayDate]);
  const [year, setYear] = useState(years[0]);
  const weeks = useMemo(() => buildCareerYear(year, roles, todayDate), [year, roles, todayDate]);
  const activeDays = countActiveDays(weeks);
  const monthFormat = new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-AR", { month: "short", timeZone: "UTC" });

  const monthLabels = weeks
    .map((week, index) => {
      const firstOfMonth = week.find((d) => d && d.date.endsWith("-01"));
      return firstOfMonth ? { index, label: monthFormat.format(new Date(firstOfMonth.date)) } : null;
    })
    .filter((m): m is { index: number; label: string } => m !== null);

  return (
    <section aria-labelledby="career-heading" className="md:flex md:gap-4">
      <div className="min-w-0 flex-1">
        <h2 id="career-heading" className="mb-2 text-base font-normal">
          {t.careerHeading(activeDays, year)}
        </h2>
        <Box className="px-4 py-3">
          <div className="overflow-x-auto">
            <div role="img" aria-label={t.careerHeading(activeDays, year)} className="relative inline-block pt-5">
              <div aria-hidden className="absolute left-0 top-0 h-4 text-xs text-muted">
                {monthLabels.map((m) => (
                  <span key={m.index} className="absolute" style={{ left: m.index * (CELL + GAP) }}>
                    {m.label}
                  </span>
                ))}
              </div>
              <div aria-hidden className="flex" style={{ gap: GAP }}>
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                    {week.map((day, di) =>
                      day ? (
                        <span
                          key={di}
                          title={day.date}
                          className={`level-${day.level} block rounded-[2px] outline outline-1 -outline-offset-1 outline-line-muted`}
                          style={{ width: CELL, height: CELL }}
                        />
                      ) : (
                        <span key={di} className="block" style={{ width: CELL, height: CELL }} />
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
            <span>{t.careerNote}</span>
            <span aria-hidden className="flex items-center gap-1">
              {t.less}
              {[0, 1, 2, 3, 4].map((l) => (
                <span key={l} className={`level-${l} inline-block rounded-[2px]`} style={{ width: CELL, height: CELL }} />
              ))}
              {t.more}
            </span>
          </div>
        </Box>
      </div>
      <ul className="mt-3 flex flex-wrap gap-1 md:mt-8 md:w-24 md:flex-col md:flex-nowrap">
        {years.map((y) => (
          <li key={y}>
            <button
              type="button"
              onClick={() => setYear(y)}
              aria-pressed={y === year}
              className={`w-full rounded-md px-3 py-1.5 text-left text-xs ${
                y === year ? "bg-[#0969da] font-semibold text-white dark:bg-[#1f6feb]" : "text-muted hover:bg-btn-hover hover:text-fg"
              }`}
            >
              {y}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
