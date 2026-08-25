import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**', 'coverage/**'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },

    rules: {
      ...js.configs.recommended.rules,

      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always']
    }
  }
];