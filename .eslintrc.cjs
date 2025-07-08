/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'unused-imports'],
  rules: {
    'no-unused-vars': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['api/**/*.js', 'tailwind.config.cjs'],
      env: {
        node: true,
        browser: false,
      },
    },
  ],
};
