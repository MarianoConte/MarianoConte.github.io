import snapshot from "@/content/repos.snapshot.json";
import { filterAllowlisted } from "./github";

const base = {
  description: null,
  language: "JavaScript",
  html_url: "https://github.com/MarianoConte/x",
  homepage: null,
  topics: [],
  stargazers_count: 0,
  forks_count: 0,
};

describe("filterAllowlisted", () => {
  it("drops repos outside the allowlist and forks", () => {
    const repos = [
      { ...base, name: "react-adv", pushed_at: "2024-01-01T00:00:00Z" },
      { ...base, name: "private-client-project", pushed_at: "2026-01-01T00:00:00Z" },
      { ...base, name: "pokedux", pushed_at: "2023-01-01T00:00:00Z", fork: true },
    ];
    expect(filterAllowlisted(repos, ["react-adv", "pokedux"]).map((r) => r.name)).toEqual(["react-adv"]);
  });

  it("puts featured repos first, then sorts by last push", () => {
    const repos = [
      { ...base, name: "old", pushed_at: "2020-01-01T00:00:00Z" },
      { ...base, name: "MarianoConte.github.io", pushed_at: "2019-01-01T00:00:00Z" },
      { ...base, name: "new", pushed_at: "2025-01-01T00:00:00Z" },
    ];
    const result = filterAllowlisted(repos, ["old", "new", "MarianoConte.github.io"]);
    expect(result.map((r) => r.name)).toEqual(["MarianoConte.github.io", "new", "old"]);
    expect(result[0].featured).toBe(true);
  });

  it("never lets client or private projects into the committed snapshot", () => {
    const names = filterAllowlisted(snapshot).map((r) => r.name);
    expect(names.length).toBeGreaterThan(0);
    expect(names.some((n) => /congre|xertux|tuturno/i.test(n))).toBe(false);
  });
});
