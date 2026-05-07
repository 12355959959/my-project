# Commands

This repository uses npm scripts, ESLint, Prettier, and GitHub Actions CI.

## Repository Checks

Before opening a pull request, run:

- `npm.cmd run format:check`
- `npm.cmd test` (`node --test --test-isolation=none`)
- `npm.cmd run lint`

You can also use `git status --short` to review modified files and `git diff`
to inspect line-by-line changes before review.

### Install

```text
npm.cmd install
```

### Start

```text
npm.cmd start
```

### Test

```text
npm.cmd test
```

Runs tests with `node --test --test-isolation=none`.

### Lint

```text
npm.cmd run lint
```

Runs ESLint over the project JavaScript files in `src`, `tests`, and `scripts`
using the flat config in `eslint.config.js`.

### Format

```text
npm.cmd run format
```

### Format Check

```text
npm.cmd run format:check
```

### CI

GitHub Actions runs on `push` and `pull_request` events targeting `main`. It
installs dependencies with `npm.cmd ci` and then runs:

- `npm.cmd run format:check`
- `npm.cmd test`
- `npm.cmd run lint`

### Build

```text
No build command is configured for this minimal Node.js project.
```

## Maintenance Notes

- Keep the commands in this file aligned with the actual scripts or task
  runners in the repository.
- Update this file whenever the selected stack or tooling changes.
