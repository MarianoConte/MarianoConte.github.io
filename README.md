# MarianoConte.github.io

GitHub-style portfolio of **Mariano Conte**, Senior Full Stack Developer (React, TypeScript, Next.js, Node.js).

Live site: https://marianoconte.github.io

## Stack

- [Next.js](https://nextjs.org) App Router with static export, deployed to GitHub Pages
- TypeScript and Tailwind CSS v4, with colors from GitHub's Primer palette (light and dark themes)
- [Octicons](https://primer.style/octicons) for icons
- Vitest and React Testing Library for unit and component tests, Cypress for a smoke test
- GitHub Actions: lint, type check, tests and build on every push, then deploy from `main`

The site is bilingual: English at `/` and Spanish at `/es/`.

## Content

Everything you read on the site lives in typed files under `src/content/`:

| File | What it holds |
| --- | --- |
| `profile.ts` | Headline, README text, experience timeline and skills |
| `projects.ts` | Pinned projects and case studies |
| `repo-allowlist.json` | The only repositories the site may show |
| `repos.snapshot.json` | Fallback repo data for builds without network access |

Repository data comes from the GitHub API at build time and is always filtered through the allowlist, so private or unrelated repositories never show up. To refresh the snapshot:

```bash
npm run repos:snapshot
```

## Scripts

```bash
npm install
npm run dev        # local dev server
npm run lint
npm run typecheck
npm test           # Vitest
npm run build      # static export to out/
npm run e2e        # serves out/ and runs the Cypress smoke test
```

`npm run e2e` needs the Cypress binary. If it was skipped during install, run `npx cypress install` once.

---

Built with [Claude Code](https://claude.com/claude-code).
