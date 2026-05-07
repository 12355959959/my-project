import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(fileURLToPath(import.meta.url), '..', '..');
const checkDirs = ['src', 'tests'];

function collectJavaScriptFiles(dir) {
  if (!existsSync(dir)) {
    return [];
  }

  const files = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectJavaScriptFiles(entryPath));
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      files.push(entryPath);
    }
  }

  return files;
}

const files = checkDirs
  .flatMap((dir) => collectJavaScriptFiles(path.join(rootDir, dir)))
  .sort((a, b) => a.localeCompare(b));

let hasFailure = false;

for (const file of files) {
  const relativeFile = path.relative(rootDir, file);
  const result = spawnSync(process.execPath, ['--check', file], {
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    hasFailure = true;
    console.error(`Syntax check failed: ${relativeFile}`);
  }
}

process.exit(hasFailure ? 1 : 0);
