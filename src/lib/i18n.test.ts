import { formatMonth, localePath } from "./i18n";

describe("localePath", () => {
  it("keeps English at the root", () => {
    expect(localePath("en")).toBe("/");
    expect(localePath("en", "/projects")).toBe("/projects/");
    expect(localePath("en", "projects/portfolio/")).toBe("/projects/portfolio/");
  });

  it("prefixes Spanish routes with /es", () => {
    expect(localePath("es")).toBe("/es/");
    expect(localePath("es", "/")).toBe("/es/");
    expect(localePath("es", "/skills")).toBe("/es/skills/");
  });
});

describe("formatMonth", () => {
  it("formats year-month strings per locale", () => {
    expect(formatMonth("2022-11", "en")).toBe("Nov 2022");
    expect(formatMonth("2022-11", "es")).toMatch(/nov.* 2022/i);
  });
});
