import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    root: true,
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
    ],
    plugins: ['@typescript-eslint', 'react', 'filenames', 'import'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-trailing-spaces': 'warn',
      'no-multi-spaces': 'warn',
      'unicode-bom': 'error',
      'no-duplicate-imports': 'error',
      'no-alert': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'warn',
      'no-throw-literal': 'error',
      'no-irregular-whitespace': [
        'error',
        {
          skipStrings: true,
          skipComments: true,
          skipRegExps: true,
          skipTemplates: true,
          skipJSXText: true,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'import/named': 'error',
      'import/default': 'error',
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  }),
];

export default eslintConfig;
