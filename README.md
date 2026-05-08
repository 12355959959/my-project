# my-project

Minimal Node.js TypeScript project using native npm scripts, ESLint, Prettier,
and GitHub Actions CI, plus a small Python package under `python_src/` with
`pytest` and `ruff`.

## Requirements

- Node.js >=24
- Python 3.12+
- npm on Windows, use `npm.cmd`

## Commands

- `npm.cmd install` - install dependencies and create or update the lockfile
- `npm.cmd start` - run `src/index.ts` with `tsx`
- `npm.cmd test` - run TypeScript tests with
  `node --test --test-isolation=none --import tsx tests/**/*.test.ts`
- `npm.cmd run lint` - run ESLint over TypeScript source and test files plus
  project JavaScript config files
- `npm.cmd run typecheck` - run `tsc --noEmit`
- `npm.cmd run format` - format project files with Prettier
- `npm.cmd run format:check` - check formatting with Prettier
- `python -m venv .venv` - create a local Python virtual environment
- `.venv\Scripts\python.exe -m pip install -e ".[dev]"` - install Python test
  and lint tools
- `.venv\Scripts\python.exe -m pytest` - run Python tests
- `.venv\Scripts\python.exe -m ruff check python_src python_tests` - lint
  Python code
- `.venv\Scripts\python.exe -m ruff format --check python_src python_tests` -
  check Python code formatting

## Workflow

Before committing, run:

- `npm.cmd run format:check`
- `npm.cmd run typecheck`
- `npm.cmd test`
- `npm.cmd run lint`
- `.venv\Scripts\python.exe -m pytest`
- `.venv\Scripts\python.exe -m ruff check python_src python_tests`
- `.venv\Scripts\python.exe -m ruff format --check python_src python_tests`

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
installs Node dependencies with `npm.cmd ci`, installs Python dev dependencies
with `python -m pip install -e ".[dev]"`, and then runs:

- `npm.cmd run format:check`
- `npm.cmd run typecheck`
- `npm.cmd test`
- `npm.cmd run lint`
- `python -m pytest`
- `python -m ruff check python_src python_tests`
- `python -m ruff format --check python_src python_tests`

## Layout

- `src/`
- `tests/`
- `python_src/`
- `python_tests/`
- `docs/`
- `scripts/`
- `.github/workflows/`
- `.vscode/`
