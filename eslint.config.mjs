import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

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
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: "module",
    },
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "prettier",
    ],
    plugins: ["@typescript-eslint", "react", "filenames"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-trailing-spaces": "warn",
      "no-multi-spaces": "warn",
      "unicode-bom": "error",
      "no-duplicate-imports": "error",
      "no-alert": "warn",
      "no-console": "warn",
      "no-debugger": "error",
      "no-unused-vars": "warn",
      "no-throw-literal": "error",
      "no-irregular-whitespace": [
        "error",
        {
          skipStrings: true,
          skipComments: true,
          skipRegExps: true,
          skipTemplates: true,
          skipJSXText: true,
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
    // overrides: [
    //   // For all files with ts, tsx file extension
    //   {
    //     files: ["src/app/**/*.{ts,tsx}"],
    //     excludedFiles: ["src/app/**/components/**/*.{ts,tsx}"],
    //     rules: {
    //       "filenames/match-regex": [
    //         "error",
    //         "^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*(.d)?$",
    //         { "match": true }
    //       ],
    //       "filenames/match-exported": "off",
    //     },
    //   },
    //   // For all files with ts, tsx file extension in store folder
    //   {
    //     files: ["src/store/**/*.{ts,tsx}"],
    //     rules: {},
    //   },
    //   // For all files with stories.ts, stories.tsx file extension
    //   {
    //     files: ["**/*.stories.{ts,tsx}"],
    //     rules: {
    //       "filenames/match-regex": ["error", "^([A-Z][a-z0-9]+)+.stories$"],
    //       "filenames/match-exported": "off",
    //     },
    //   },
    //   // For all files with spec.ts, spec.tsx file extension in tests folder
    //   {
    //     files: ["tests/**/*.spec.{ts,tsx}"],
    //     env: {
    //       jest: true,
    //     },
    //     rules: {
    //       strict: "off",
    //       "filenames/match-regex": ["error", "^([a-zA-Z][a-z0-9]+)+.spec$"],
    //       "filenames/match-exported": "off",
    //     },
    //   },
    //   // For all files with json, mjs file extension
    //   {
    //     files: [
    //       ".eslintrc.json",
    //       "next.config.mjs",
    //       "jest.config.js",
    //       "src/types/*.d.ts",
    //     ],
    //     rules: {
    //       "@typescript-eslint/no-var-requires": "off",
    //       "filenames/match-regex": "off",
    //     },
    //   },
    //   // For all files with type.ts file extension
    //   {
    //     files: ["**/type.ts"],
    //     rules: {
    //       "no-unused-vars": "off",
    //     },
    //   },
    // ],
  }),
];

export default eslintConfig;
