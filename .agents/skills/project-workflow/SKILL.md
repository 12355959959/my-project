---
name: project-workflow
description: "Repository workflow for my-project: use when Codex needs to understand this repo, modify TypeScript in src/tests, modify Python helpers in python_src/python_tests, run npm/pytest/Ruff/ESLint/Prettier/TypeScript checks, debug test or CI failures, or prepare a pre-commit check."
---

# Project Workflow

Use this skill as the operating manual for this repository's TypeScript and Python workflows.

## When to Use This Skill

Trigger this skill when any of these applies:

- Work happens inside this repository and touches TypeScript, Python, tests, tooling, CI, or contributor workflow.
- A task requires understanding the repo layout, local commands, package configuration, or GitHub Actions checks.
- Codex needs to modify or inspect `src/`, `tests/`, `python_src/`, or `python_tests/`.
- Codex needs to run, debug, or explain `npm.cmd`, `node --test`, `tsx`, `tsc`, ESLint, Prettier, `pytest`, or Ruff.
- A user asks for a pre-commit, PR-readiness, CI, test-failure, lint-failure, formatting, or typecheck workflow.

## Not For / Boundaries

- Do not use this skill as a general TypeScript, Python, npm, pytest, or GitHub Actions reference outside this repository.
- Do not replace specialized skills for OpenAI APIs, browser automation, documents, presentations, spreadsheets, image generation, or plugin/skill authoring.
- Do not introduce a new framework, build system, package manager, test runner, formatter, or CI policy unless the user explicitly asks.
- Do not assume undocumented commands exist. If a command is missing or stale, first check `package.json`, `README.md`, `COMMANDS.md`, `pyproject.toml`, and `.github/workflows/ci.yml`.
- Do not revert unrelated user changes. Inspect the worktree first and keep edits focused on the requested files.
- Do not commit dependency caches, build outputs, coverage reports, temporary files, or generated artifacts unless the user explicitly requests them.

## Quick Reference

Use Windows commands by default in this workspace. Prefer `npm.cmd` for npm scripts.

```powershell
git status --short
npm.cmd install
npm.cmd start
npm.cmd test
node --test --test-isolation=none --import tsx tests/index.test.ts
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run format:check
npm.cmd run format
python -m venv .venv
.venv\Scripts\python.exe -m pip install -e ".[dev]"
.venv\Scripts\python.exe -m pytest
.venv\Scripts\python.exe -m pytest python_tests\test_greeter.py -q
.venv\Scripts\python.exe -m ruff check python_src python_tests
.venv\Scripts\python.exe -m ruff format --check python_src python_tests
git diff
```

## Project Shape

- Treat this as a small dual-stack repository: Node.js TypeScript plus a Python helper package.
- Use Windows commands by default in this workspace. Prefer `npm.cmd` for npm scripts.
- Expect Node.js >=24 and Python 3.12+.
- TypeScript is ESM with `module`/`moduleResolution` set to `NodeNext`, strict mode, and no emitted build output.
- Python packaging uses `setuptools` with source under `python_src/` and pytest tests under `python_tests/`.

## Main Directories

- `src/`: TypeScript source.
- `tests/`: TypeScript tests using Node's built-in `node:test`.
- `python_src/my_project/`: Python package source.
- `python_tests/`: Python tests using `pytest`.
- `.github/workflows/ci.yml`: Windows CI definition and source of truth for required checks.
- `COMMANDS.md`, `README.md`, and `CONTRIBUTING.md`: command and workflow references; check these when commands appear stale.
- `scripts/` and `docs/`: inspect before assuming workflow-specific helpers or documentation exist.

## Before Editing

- Inspect `git status --short` first and preserve unrelated user changes.
- Read the nearest source, tests, and config before changing behavior.
- Keep changes focused; avoid unrelated refactors, generated artifacts, dependency caches, and broad formatting churn.
- If a command is not documented here or appears missing, first check `package.json`, `README.md`, `COMMANDS.md`, `pyproject.toml`, and relevant config files before deciding.

## TypeScript Workflow

- Run the app with `npm.cmd start`.
- Run TypeScript tests with `npm.cmd test`.
- Typecheck with `npm.cmd run typecheck`.
- Lint with `npm.cmd run lint`.
- Check formatting with `npm.cmd run format:check`; apply formatting with `npm.cmd run format` only when needed.
- For focused TypeScript debugging, prefer the underlying test shape with a specific test file:

```powershell
node --test --test-isolation=none --import tsx tests/index.test.ts
```

- Keep test imports compatible with NodeNext/tsx conventions; existing tests import TypeScript modules through `.js` specifiers.

## Python Workflow

- If the Python environment is not ready, create and install it with:

```powershell
python -m venv .venv
.venv\Scripts\python.exe -m pip install -e ".[dev]"
```

- Run Python tests with:

```powershell
.venv\Scripts\python.exe -m pytest
```

- Run focused Python tests with a path, for example:

```powershell
.venv\Scripts\python.exe -m pytest python_tests\test_greeter.py -q
```

- Lint Python code with:

```powershell
.venv\Scripts\python.exe -m ruff check python_src python_tests
```

- Check Python formatting with:

```powershell
.venv\Scripts\python.exe -m ruff format --check python_src python_tests
```

## Debugging

- Reproduce failures with the narrowest relevant command first, then run the broader check suite.
- For TypeScript failures, inspect `src/`, `tests/`, `tsconfig.json`, `eslint.config.js`, and `package.json`.
- For Python failures, inspect `python_src/`, `python_tests/`, and `pyproject.toml`.
- If a build command is requested, note that no build script is currently configured; first check `package.json`, `README.md`, `COMMANDS.md`, and CI before choosing an alternative.
- If dependencies or tool versions look inconsistent, compare `package.json`, `package-lock.json`, `pyproject.toml`, and `.github/workflows/ci.yml`.

## Examples

### Example 1: Modify TypeScript Behavior

- Input: "Change the TypeScript greeting behavior and update tests."
- Steps: inspect `src/index.ts`, inspect `tests/index.test.ts`, make the smallest behavior and test changes, then run the relevant TypeScript checks.
- Acceptance: `npm.cmd run typecheck`, `npm.cmd test`, and `npm.cmd run lint` pass; formatting is checked with `npm.cmd run format:check` or fixed intentionally with `npm.cmd run format`.

### Example 2: Modify Python Helper Behavior

- Input: "Change the Python greeter and keep Python tests green."
- Steps: inspect `python_src/my_project/greeter.py` and `python_tests/test_greeter.py`, update source and tests together, ensure the venv has dev dependencies, then run focused and broad Python checks.
- Acceptance: `.venv\Scripts\python.exe -m pytest`, `.venv\Scripts\python.exe -m ruff check python_src python_tests`, and `.venv\Scripts\python.exe -m ruff format --check python_src python_tests` pass.

### Example 3: Debug a TypeScript Test Failure

- Input: "`npm.cmd test` fails."
- Steps: rerun the smallest failing command, inspect the failing test and imported source, check NodeNext import conventions, fix the source or test, then rerun `npm.cmd test`.
- Acceptance: the focused `node --test --test-isolation=none --import tsx ...` command passes before the full `npm.cmd test` command is trusted.

### Example 4: Prepare a Change for Commit

- Input: "Check whether this change is ready to commit."
- Steps: run `git status --short`, choose checks based on changed files, run the matching pre-commit commands, then inspect `git diff`.
- Acceptance: relevant checks pass, unrelated changes are left alone, and any commit message requested by the user follows Conventional Commits.

## Pre-Commit Checks

Run the checks that match the files changed.

For TypeScript-only changes:

```powershell
npm.cmd run format:check
npm.cmd run typecheck
npm.cmd test
npm.cmd run lint
```

For Python-only changes:

```powershell
.venv\Scripts\python.exe -m pytest
.venv\Scripts\python.exe -m ruff check python_src python_tests
.venv\Scripts\python.exe -m ruff format --check python_src python_tests
```

For cross-stack, workflow, configuration, documentation, or uncertain changes, run the full local suite:

```powershell
npm.cmd run format:check
npm.cmd run typecheck
npm.cmd test
npm.cmd run lint
.venv\Scripts\python.exe -m pytest
.venv\Scripts\python.exe -m ruff check python_src python_tests
.venv\Scripts\python.exe -m ruff format --check python_src python_tests
```

- CI runs the same checks on Windows after `npm.cmd ci` and `python -m pip install -e ".[dev]"`.
- Before committing, review `git status --short` and `git diff`.
- Follow Conventional Commits when asked to commit, and do not push directly to `main`.

## Maintenance

- Treat `README.md`, `COMMANDS.md`, `CONTRIBUTING.md`, `package.json`, `pyproject.toml`, and `.github/workflows/ci.yml` as the canonical sources for this skill.
- Update this skill whenever scripts, CI steps, supported Node/Python versions, directory layout, or contributor rules change.
- Keep this file concise and operational. If future guidance becomes long-form, move details into a `references/` directory with a `references/index.md` and leave only navigation plus core commands here.
- Last reviewed: 2026-05-08.
