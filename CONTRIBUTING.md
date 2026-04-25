# Contributing to the Ordo documentation

Thanks for considering a contribution. This repository holds the source for the Ordo documentation site at `docs.ordo.ephyrasoftware.com`. The site itself is built with [Astro](https://astro.build/) and the [Starlight](https://starlight.astro.build/) docs theme.

## What kinds of contributions are welcome

- Typo and grammar fixes
- Clarifications where a page is confusing or ambiguous
- Missing details (a flag, an option, an edge case) that would have saved you time
- New examples or recipes for things Ordo supports
- New pages that fit the existing information architecture (see below)

For larger changes — new sections, restructured navigation, significant rewrites — please open an issue first so the direction can be agreed before you invest the time. Small fixes can go straight to a pull request.

If something on the docs site is wrong because Ordo itself behaves differently than documented, that is a bug worth filing against [`EphyraSoftware/ordo`](https://github.com/EphyraSoftware/ordo) rather than a docs change. Use your judgement; if you are unsure, file the issue here and we will route it.

## Local development

```sh
git clone https://github.com/EphyraSoftware/ordo-docs
cd ordo-docs
npm install
npm run dev
```

The dev server runs at `http://localhost:4321` with hot reload. To produce a production build:

```sh
npm run build
```

The output is written to `dist/`. CI runs the same build on every pull request.

## Information architecture

The site has four top-level sections:

| Section | Audience and intent |
|---|---|
| Getting Started | A first-time operator following a guided walkthrough |
| Concepts | Short prose pages tying terminology to behaviour |
| Reference | CLI, API, state file format, and configuration — exhaustive, lookup-oriented |
| Architecture | Operator-facing explanation of how the orchestrator and agents fit together |

When adding a page, decide which section it belongs in based on intent:

- **Walkthrough or worked example** → Getting Started
- **"What does X mean?"** → Concepts
- **"What flags does this command accept?"** → Reference
- **"How does this fit together?"** → Architecture

If a page does not fit any section, that is a signal to discuss the structure in an issue rather than to add a new section directly.

## Voice and style

Documentation in this repository aims to be:

- **Concise.** Short paragraphs. One idea per paragraph. Cut words that do not change the meaning.
- **Direct.** Tell the reader what to do or what something means. Avoid hedging like "you might want to consider".
- **Present tense, second person.** "Run `ordo init`." rather than "You will need to run `ordo init`."
- **Scannable.** Use headings, lists, and tables when they help. Do not use them for decoration.
- **British English** for original prose. American English from upstream sources (error messages, third-party tool names) stays as it appears in those sources.

Code samples should be runnable as written, with placeholders clearly marked (`<orchestrator-host>`, `<agent-name>`).

## Sidebar configuration

The sidebar is configured in [`astro.config.mjs`](./astro.config.mjs). Each top-level section is currently a single page; as subpages are added, convert the section's entry from a single link into a group with `autogenerate: { directory: '<section>' }` (Starlight will pick up files automatically) or hand-listed `items` (when ordering matters).

## Pull request conventions

- Branch names use kebab-case and reflect the change: `fix/typo-in-tags-page`, `docs/add-drift-recipe`.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/): `docs:`, `fix:`, `chore:`, `refactor:`, etc. The PR title should also follow this convention.
- For amendments after review, use fixup commits (`git commit --fixup=<sha>`) and autosquash before merge rather than amending in place.
- Do not add `Co-Authored-By` lines to commits.

## What CI checks

Every pull request runs `npm ci` followed by `npm run build`. The build must pass before a PR can merge. Broken internal links, invalid frontmatter, and missing referenced content all fail the build.

## License

By contributing, you agree that your contributions are licensed under the same terms as this repository.
