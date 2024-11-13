// eslint.config.js
export default [
  {
    ignores: ['node_modules/**'], // Ignore node_modules
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',  // Latest ECMAScript version
      sourceType: 'module',
    },
    rules: {
      indent: ['error', 2],       // Enforces 2 spaces for indentation
      quotes: ['error', 'single'], // Requires single quotes
      semi: ['error', 'always'],   // Requires semicolons
    },
  },
];

