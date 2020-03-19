module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    camelcase: "off",
    "@typescript-eslint/camelcase": ["error", { properties: "never" }],
    "react/prop-types": "off",
  },
  plugins: ["@typescript-eslint", "prettier", "react", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    // Jest for jest files
    {
      files: ["__tests__/**/*.test.{js,ts}"],
      extends: "plugin:jest/recommended",
    },
    // Cypress for cypress files
    {
      files: ["cypress/**/*.test.{js,ts}"],
      extends: "plugin:cypress/recommended",
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    // Aliases
    "import/resolver": {
      alias: [
        ["~fixtures", "./__fixtures__"],
        ["~", "./src/"],
      ],
    },
  },
};
