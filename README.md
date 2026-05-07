# my-project

Minimal Node.js project using native npm scripts and the built-in Node.js test
runner.

## Requirements

- Node.js >=24
- npm

## Commands

- `npm.cmd install` - install dependencies and create/update the lockfile
- `npm.cmd start` - run `src/index.js`
- `npm.cmd test` - run tests with `node --test`
- `npm.cmd run lint` - recursively syntax-check `.js` files under `src` and
  `tests` with `node scripts/check.js`
- `npm.cmd run format` - format project files with Prettier
- `npm.cmd run format:check` - check formatting with Prettier

## Layout

- `src/`
- `tests/`
- `docs/`
- `scripts/`
- `.github/workflows/`
- `.vscode/`
