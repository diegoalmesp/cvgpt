module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "plugin:cypress/recommended",
    "eslint:recommended",
  ],
  plugins: ["react-refresh"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  env: {
    jest: true,
    es2020: true,
    browser: true,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@assets", "./src/assets"],
          ["@components", "./src/components"],
          ["@constants", "./src/constants"],
          ["@contexts", "./src/contexts"],
          ["@hooks", "./src/hooks"],
          ["@pages", "./src/pages"],
          ["@utils", "./src/utils"],
        ],
        extensions: [".js", ".jsx", ".json"],
      },
    },
  },
  rules: {
    "cypress/no-unnecessary-waiting": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/no-unresolved": ["error", { ignore: ["\\.svg\\?react$"] }],
  },
  overrides: [
    {
      files: [
        "test-utils.js",
        "setup-tests.js",
        "vite.config.js",
        "cypress.config.js",
        "cypress/**",
      ],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
