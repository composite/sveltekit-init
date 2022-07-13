module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ["plugin:svelte/prettier", "plugin:prettier/recommended"],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['*.cjs', 'node_modules', 'dist', 'build'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: {
          ts: "@typescript-eslint/parser",
          js: "espree",
          typescript: "@typescript-eslint/parser",
        },
      },
    }
  ],
  // settings: {
  // 	'svelte3/typescript': () => require('typescript')
  // },
  parserOptions: {
    extraFileExtensions: [".svelte"],
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {},
};
