import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContributionGraph } from "./ContributionGraph";

const roles = [
  { start: "2019-02", end: "2021-10", intensity: 2 as const },
  { start: "2022-11", end: null, intensity: 4 as const },
];

describe("ContributionGraph", () => {
  it("starts on the current year and switches years", async () => {
    render(<ContributionGraph roles={roles} locale="en" today="2026-10-15T12:00:00Z" />);
    expect(screen.getByRole("button", { name: "2026" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("in 2026");

    await userEvent.click(screen.getByRole("button", { name: "2022" }));
    expect(screen.getByRole("button", { name: "2022" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("in 2022");
  });

  it("explains that the graph comes from employment dates", () => {
    render(<ContributionGraph roles={roles} locale="es" today="2026-10-15T12:00:00Z" />);
    expect(screen.getByText("Basado en fechas de empleo, no en commits.")).toBeInTheDocument();
  });
});
