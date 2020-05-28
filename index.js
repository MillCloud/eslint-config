module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["eslint:recommended", "airbnb-base"],
  env: {
    browser: true,
    es2020: true,
    jest: true,
    jquery: true,
    mocha: true,
    node: true,
  },
  rules: {
    "no-console":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    "no-debugger":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    "no-unused-vars":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
  },
  overrides: [
    // for typescript
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "airbnb-typescript/base",
      ],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-unused-vars": "off",
      },
    },
  ],
};
