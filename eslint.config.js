import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const nodeLanguageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  globals: {
    ...globals.node,
  },
};

export default tseslint.config(
  {
    ignores: ['**/node_modules/**'],
  },
  {
    files: ['eslint.config.js', 'scripts/**/*.js'],
    extends: [js.configs.recommended],
    languageOptions: nodeLanguageOptions,
  },
  {
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: nodeLanguageOptions,
  }
);
