import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

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
      ...js.configs.recommended.rules
    }
  },

  prettier
];
