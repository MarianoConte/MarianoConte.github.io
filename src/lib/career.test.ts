import { buildCareerYear, careerYears, countActiveDays, levelFor, type CareerRole } from "./career";

const roles: CareerRole[] = [
  { start: "2019-02", end: "2021-10", intensity: 2 },
  { start: "2021-10", end: "2022-10", intensity: 3 },
  { start: "2022-11", end: null, intensity: 4 },
];
const today = new Date("2026-10-15T12:00:00Z");

describe("levelFor", () => {
  it("returns 0 on weekends", () => {
    expect(levelFor(new Date("2024-06-08T00:00:00Z"), roles, today)).toEqual({ date: "2024-06-08", level: 0 });
  });

  it("uses the highest intensity when roles overlap", () => {
    // October 2021 is covered by both the part-time and the full-time role.
    expect(levelFor(new Date("2021-10-13T00:00:00Z"), roles, today)?.level).toBe(3);
  });

  it("returns 0 before the first role and null in the future", () => {
    expect(levelFor(new Date("2019-01-15T00:00:00Z"), roles, today)?.level).toBe(0);
    expect(levelFor(new Date("2026-12-01T00:00:00Z"), roles, today)).toBeNull();
  });
});

describe("buildCareerYear", () => {
  it("lays out weeks Sunday-first with seven rows each", () => {
    const weeks = buildCareerYear(2024, roles, today);
    expect(weeks.every((w) => w.length === 7)).toBe(true);
    // 2024-01-01 was a Monday, so the first Sunday cell belongs to 2023 and is empty.
    expect(weeks[0][0]).toBeNull();
    expect(weeks[0][1]?.date).toBe("2024-01-01");
  });

  it("counts only weekdays inside active roles", () => {
    // 2024 has 262 weekdays and the current role covers all of them.
    expect(countActiveDays(buildCareerYear(2024, roles, today))).toBe(262);
    // Nothing active before February 2019.
    const jan2019 = buildCareerYear(2019, roles, today).flat().filter((d) => d?.date.startsWith("2019-01"));
    expect(jan2019.every((d) => d?.level === 0)).toBe(true);
  });
});

describe("careerYears", () => {
  it("lists years from today back to the first role", () => {
    expect(careerYears(roles, today)).toEqual([2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019]);
  });
});
