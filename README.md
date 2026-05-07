# my-project

Minimal Node.js project using native npm scripts, ESLint, Prettier, and GitHub
Actions CI.

## Requirements

- Node.js >=24
- npm on Windows, use `npm.cmd`

## Commands

- `npm.cmd install` - install dependencies and create or update the lockfile
- `npm.cmd start` - run `src/index.js`
- `npm.cmd test` - run tests with `node --test --test-isolation=none`
- `npm.cmd run lint` - run ESLint over `src`, `tests`, and `scripts` with the
  flat config in `eslint.config.js`
- `npm.cmd run format` - format project files with Prettier
- `npm.cmd run format:check` - check formatting with Prettier

## Workflow

Before committing, run:

- `npm.cmd run format:check`
- `npm.cmd test`
- `npm.cmd run lint`

Branch names should follow one of these patterns:

- `feature/<short-name>`
- `fix/<short-name>`
- `chore/<short-name>`
- `docs/<short-name>`
- `test/<short-name>`

Commits should use Conventional Commits, for example `feat: add new capability`
or `fix(api): correct bug`.

Do not push directly to `main`.

Pull requests must pass GitHub Actions CI before merge.

## CI

GitHub Actions runs on `push` and `pull_request` events targeting `main`. It
installs dependencies with `npm.cmd ci` and then runs:

- `npm.cmd run format:check`
- `npm.cmd test`
- `npm.cmd run lint`

## Layout

- `src/`
- `tests/`
- `docs/`
- `scripts/`
- `.github/workflows/`
- `.vscode/`
