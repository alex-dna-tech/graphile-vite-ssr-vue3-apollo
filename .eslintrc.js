const { readFileSync } = require("fs");
const schemaString = readFileSync(`${__dirname}/data/schema.graphql`, "utf8");

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:import/errors",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: [
    "jest",
    "@typescript-eslint",
    "graphql",
    "simple-import-sort",
    "import",
  ],
  overrides: [
    {
      files: ["@app/e2e/cypress/**"],
      plugins: ["cypress"],
      env: {
        "cypress/globals": true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        args: "after-used",
        ignoreRestSiblings: true,
      },
    ],
    "no-unused-expressions": [
      "error",
      {
        allowTernary: true,
      },
    ],
    "no-console": 0,
    "no-confusing-arrow": 0,
    "no-else-return": 0,
    "no-return-assign": [2, "except-parens"],
    "no-underscore-dangle": 0,
    "jest/no-focused-tests": 2,
    "jest/no-identical-title": 2,
    camelcase: 0,
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: true,
      },
    ],
    "class-methods-use-this": 0,
    "no-restricted-syntax": 0,
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],

    "import/no-extraneous-dependencies": 0,

    "graphql/template-strings": [
      "error",
      {
        env: "literal",
        schemaString,
        validators: [
          "ExecutableDefinitionsRule",
          "FieldsOnCorrectTypeRule",
          "FragmentsOnCompositeTypesRule",
          "KnownArgumentNamesRule",
          "KnownDirectivesRule", // disabled by default in relay
          // "KnownFragmentNamesRule", // disabled by default in all envs
          "KnownTypeNamesRule",
          "LoneAnonymousOperationRule",
          "NoFragmentCyclesRule",
          "NoUndefinedVariablesRule", //disabled by default in relay
          // "NoUnusedFragmentsRule" // disabled by default in all envs
          // "NoUnusedVariablesRule" throws even when fragments use the variable
          "OverlappingFieldsCanBeMergedRule",
          "PossibleFragmentSpreadsRule",
          "ProvidedRequiredArgumentsRule", // disabled by default in relay
          "ScalarLeafsRule", // disabled by default in relay
          "SingleFieldSubscriptionsRule",
          "UniqueArgumentNamesRule",
          "UniqueDirectivesPerLocationRule",
          "UniqueFragmentNamesRule",
          "UniqueInputFieldNamesRule",
          "UniqueOperationNamesRule",
          "UniqueVariableNamesRule",
          "ValuesOfCorrectTypeRule",
          "VariablesAreInputTypesRule",
          // "VariablesDefaultValueAllowedRule",
          "VariablesInAllowedPositionRule",
        ],
      },
    ],
    "graphql/named-operations": [
      "error",
      {
        schemaString,
      },
    ],
    "graphql/required-fields": [
      "error",
      {
        env: "literal",
        schemaString,
        requiredFields: ["nodeId", "id"],
      },
    ],

    "arrow-body-style": 0,
    "no-nested-ternary": 0,

    /*
     * simple-import-sort seems to be the most stable import sorting currently,
     * disable others
     */
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-imports": "off",
    "import/order": "off",

    "import/no-deprecated": "warn",
    "import/no-duplicates": "error",
  },
};
