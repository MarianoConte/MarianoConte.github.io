import { languageColor, languageShares, unknownLanguageColor } from "./languages";

describe("languageShares", () => {
  it("computes percentages per language, largest first", () => {
    const shares = languageShares(["JavaScript", "JavaScript", "TypeScript", null, "JavaScript"]);
    expect(shares.map((s) => [s.name, s.count, s.percent])).toEqual([
      ["JavaScript", 3, 75],
      ["TypeScript", 1, 25],
    ]);
  });

  it("returns an empty list when no repo has a language", () => {
    expect(languageShares([null, null])).toEqual([]);
  });
});

describe("languageColor", () => {
  it("uses Linguist colors and a neutral fallback", () => {
    expect(languageColor("TypeScript")).toBe("#3178c6");
    expect(languageColor("Brainfuck")).toBe(unknownLanguageColor);
    expect(languageColor(null)).toBe(unknownLanguageColor);
  });
});
