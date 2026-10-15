import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { Repo } from "@/lib/github";
import { RepoList } from "./RepoList";

const repo = (name: string, language: string | null, description: string | null = null): Repo => ({
  name,
  description,
  language,
  html_url: `https://github.com/MarianoConte/${name}`,
  homepage: null,
  topics: [],
  stargazers_count: 0,
  forks_count: 0,
  pushed_at: "2024-05-01T00:00:00Z",
  featured: name === "MarianoConte.github.io",
});

const repos = [
  repo("MarianoConte.github.io", "TypeScript", "This portfolio"),
  repo("pokedux", "JavaScript", "Pokémon app with Redux"),
  repo("react-adv", "HTML", "Repositorio de mi proyecto de react"),
];

const names = () => screen.queryAllByRole("heading", { level: 3 }).map((h) => h.textContent);

describe("RepoList", () => {
  it("lists every repository with its label", () => {
    render(<RepoList repos={repos} locale="en" />);
    expect(names()).toEqual(["MarianoConte.github.io", "pokedux", "react-adv"]);
    const first = screen.getByRole("heading", { name: "MarianoConte.github.io" }).closest("li")!;
    expect(within(first).getByText("Featured")).toBeInTheDocument();
  });

  it("filters by name or description", async () => {
    render(<RepoList repos={repos} locale="en" />);
    await userEvent.type(screen.getByLabelText("Find a repository…"), "redux");
    expect(names()).toEqual(["pokedux"]);
  });

  it("filters by language", async () => {
    render(<RepoList repos={repos} locale="en" />);
    await userEvent.selectOptions(screen.getByLabelText("Language"), "HTML");
    expect(names()).toEqual(["react-adv"]);
  });

  it("shows an empty state in Spanish", async () => {
    render(<RepoList repos={repos} locale="es" />);
    await userEvent.type(screen.getByLabelText("Buscar un repositorio…"), "nada que ver");
    expect(screen.getByText("Ningún repositorio coincide con tu búsqueda.")).toBeInTheDocument();
  });
});
