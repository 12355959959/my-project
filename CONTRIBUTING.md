# Contributing

## Branch Names

Use short, descriptive branch names:

- `feature/<short-name>`
- `fix/<short-name>`
- `chore/<short-name>`
- `docs/<short-name>`
- `test/<short-name>`

Keep names lowercase and avoid spaces.

## Commit Messages

Follow Conventional Commits:

- `feat: add new capability`
- `fix: correct bug`
- `docs: update documentation`
- `chore: maintenance task`
- `refactor: restructure code`
- `test: add or update tests`

Use the optional scope when it helps:

- `feat(api): add health endpoint`

Keep the subject line short and imperative.

## Local Checks

Before opening a pull request, run the project checks available in the repository:

- format or formatting check
- lint or static analysis
- tests

Do not submit changes that fail local checks.

## Pull Request Flow

1. Create a branch from `main`.
2. Make focused commits.
3. Run the required local checks.
4. Open a pull request with a clear summary.
5. Wait for review and required checks to pass.
6. Merge only after approval.

## Required Rules

- Do not push directly to `main`.
- Do not commit dependency caches.
- Do not commit build outputs or other generated artifacts.
- Keep pull requests small and reviewable when possible.

Examples of files and folders that should stay uncommitted unless explicitly needed:

- dependency caches
- build directories
- coverage reports
- temporary files

