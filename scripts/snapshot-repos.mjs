// Refreshes src/content/repos.snapshot.json from the GitHub API.
// The snapshot is the fallback used when the build can't reach the API.
import { readFile, writeFile } from "node:fs/promises";

const USER = "MarianoConte";
const root = new URL("../src/content/", import.meta.url);
const allowlist = JSON.parse(await readFile(new URL("repo-allowlist.json", root), "utf8"));

const headers = { Accept: "application/vnd.github+json" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100`, { headers });
if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);

const repos = (await res.json())
  .filter((r) => !r.fork && allowlist.includes(r.name))
  .map((r) => ({
    name: r.name,
    description: r.description,
    language: r.language,
    html_url: r.html_url,
    homepage: r.homepage,
    topics: r.topics,
    stargazers_count: r.stargazers_count,
    forks_count: r.forks_count,
    pushed_at: r.pushed_at,
    created_at: r.created_at,
  }))
  .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at));

await writeFile(new URL("repos.snapshot.json", root), JSON.stringify(repos, null, 2) + "\n");
console.log(`Saved ${repos.length} repositories.`);
