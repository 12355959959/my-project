# Contributing

## Branch Names

Use lowercase branch names with one of these prefixes:

- `feature/<short-name>`
- `fix/<short-name>`
- `chore/<short-name>`
- `docs/<short-name>`
- `test/<short-name>`

Keep the short name concise, use hyphens for word separation, and avoid
spaces.

Examples:

- `feature/add-health-check`
- `fix/test-isolation`

## Commit Messages

Follow Conventional Commits for every commit:

- `feat: add new capability`
- `fix: correct bug`
- `docs: update documentation`
- `chore: maintenance task`
- `refactor: restructure code`
- `test: add or update tests`

Use an optional scope when it helps:

- `feat(api): add health endpoint`

Keep the subject line short, imperative, and lowercase after the type.

## Local Checks

Before opening a pull request, run:

- `npm.cmd run format:check`
- `npm.cmd test`
- `npm.cmd run lint`

`npm.cmd run lint` runs ESLint over the JavaScript files in `src`, `tests`, and
`scripts` using the flat config in `eslint.config.js`.

`npm.cmd test` uses `node --test --test-isolation=none`.

Do not open a pull request until all three checks pass.

## Pull Request Flow

1. Create a branch from `main`.
2. Make focused commits that follow Conventional Commits.
3. Run the required local checks.
4. Open a pull request with a clear summary.
5. Wait for GitHub Actions CI to pass.
6. Merge only after approval and green CI.

## Required Rules

- Do not push directly to `main`.
- Pull requests must pass GitHub Actions CI before merge.
- Do not commit dependency caches.
- Do not commit build outputs or other generated artifacts.
- Keep pull requests small and reviewable when possible.

Examples of files and folders that should stay uncommitted unless explicitly needed:

- dependency caches
- build directories
- coverage reports
- temporary files
