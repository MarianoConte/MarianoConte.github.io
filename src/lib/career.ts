export type CareerRole = { start: string; end: string | null; intensity: 1 | 2 | 3 | 4 };

export type CareerDay = { date: string; level: 0 | 1 | 2 | 3 | 4 } | null;

/** First day of a YYYY-MM month, in UTC. */
function monthStart(isoMonth: string): Date {
  const [y, m] = isoMonth.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1));
}

/** Last day of a YYYY-MM month, in UTC. */
function monthEnd(isoMonth: string): Date {
  const [y, m] = isoMonth.split("-").map(Number);
  return new Date(Date.UTC(y, m, 0));
}

function toIso(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Activity level for one day: the highest intensity among roles active that weekday. */
export function levelFor(date: Date, roles: CareerRole[], today: Date): CareerDay {
  if (date > today) return null;
  const weekday = date.getUTCDay();
  if (weekday === 0 || weekday === 6) return { date: toIso(date), level: 0 };
  let level: 0 | 1 | 2 | 3 | 4 = 0;
  for (const role of roles) {
    const end = role.end ? monthEnd(role.end) : today;
    if (date >= monthStart(role.start) && date <= end && role.intensity > level) level = role.intensity;
  }
  return { date: toIso(date), level };
}

/**
 * Builds a GitHub-style calendar for one year: columns are weeks (Sunday first),
 * rows are weekdays. Days outside the year or in the future are null.
 */
export function buildCareerYear(year: number, roles: CareerRole[], today: Date = new Date()): CareerDay[][] {
  const first = new Date(Date.UTC(year, 0, 1));
  const last = new Date(Date.UTC(year, 11, 31));
  const cursor = new Date(first);
  cursor.setUTCDate(cursor.getUTCDate() - cursor.getUTCDay());

  const weeks: CareerDay[][] = [];
  while (cursor <= last) {
    const week: CareerDay[] = [];
    for (let i = 0; i < 7; i++) {
      const inYear = cursor.getUTCFullYear() === year;
      week.push(inYear ? levelFor(new Date(cursor), roles, today) : null);
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

/** Number of weekdays with any professional activity in the calendar. */
export function countActiveDays(weeks: CareerDay[][]): number {
  return weeks.flat().filter((d) => d !== null && d.level > 0).length;
}

/** Years from the first role's start until the current year, most recent first. */
export function careerYears(roles: CareerRole[], today: Date = new Date()): number[] {
  const firstYear = Math.min(...roles.map((r) => Number(r.start.slice(0, 4))));
  const years: number[] = [];
  for (let y = today.getUTCFullYear(); y >= firstYear; y--) years.push(y);
  return years;
}
