module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["eslint:recommended", "standard"],
  env: {
    browser: true,
    es2020: true,
    jest: true,
    mocha: true,
    node: true,
  },
  rules: {
    // override eslint-config-standard and follow prettier default options
    "comma-dangle": ["error", "always-multiline"],
    // for projects developing
    "no-console":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    // for projects developing
    "no-debugger":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    // for projects developing
    "no-unused-vars":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    // override eslint-config-standard and follow prettier default options
    quotes: ["error", "double", { allowTemplateLiterals: false }],
    // override eslint-config-standard and follow prettier default options
    semi: ["error", "always"],
    // override eslint-config-standard and follow prettier default options
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
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
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      rules: {
        // for projects developing
        "@typescript-eslint/explicit-function-return-type": "off",
        // for projects developing
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars":
          process.env.NODE_ENV === "production" ||
          process.env.NODE_ENV === "pre-production" ||
          process.env.NODE_ENV === "staging"
            ? "warn"
            : "off",
        // override eslint-config-standard and follow prettier default options
        quotes: "off",
        "@typescript-eslint/quotes": [
          "error",
          "double",
          { allowTemplateLiterals: false },
        ],
        // override eslint-config-standard and follow prettier default options
        semi: "off",
        "@typescript-eslint/semi": ["error", "always"],
        // override eslint-config-standard and follow prettier default options
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": [
          "error",
          {
            anonymous: "always",
            named: "never",
            asyncArrow: "always",
          },
        ],
      },
    },
  ],
};
