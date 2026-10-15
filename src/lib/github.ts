import { featuredRepos, repoAllowlist } from "@/content/repos";
import snapshot from "@/content/repos.snapshot.json";

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  featured: boolean;
};

type ApiRepo = Omit<Repo, "featured"> & { fork?: boolean };

const USER = "MarianoConte";

/** Keeps only allowlisted, non-fork repositories and sorts them by last push. */
export function filterAllowlisted(repos: ApiRepo[], allowlist: string[] = repoAllowlist): Repo[] {
  return repos
    .filter((r) => !r.fork && allowlist.includes(r.name))
    .map((r) => ({
      name: r.name,
      description: r.description,
      language: r.language,
      html_url: r.html_url,
      homepage: r.homepage || null,
      topics: r.topics ?? [],
      stargazers_count: r.stargazers_count ?? 0,
      forks_count: r.forks_count ?? 0,
      pushed_at: r.pushed_at,
      featured: featuredRepos.includes(r.name),
    }))
    .sort((a, b) => Number(b.featured) - Number(a.featured) || b.pushed_at.localeCompare(a.pushed_at));
}

/**
 * Repositories shown on the site. Fetched from the GitHub API at build time,
 * falling back to the committed snapshot when the API is unreachable.
 */
export async function getRepos(): Promise<Repo[]> {
  try {
    const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100`, {
      headers,
      cache: "force-cache",
    });
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
    const repos = filterAllowlisted((await res.json()) as ApiRepo[]);
    if (repos.length > 0) return repos;
  } catch {
    // Offline or rate limited: use the snapshot below.
  }
  return filterAllowlisted(snapshot as ApiRepo[]);
}
