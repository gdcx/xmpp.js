"use strict";

module.exports = {
  root: true,

  plugins: ["node", "promise", "unicorn"],

  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:node/recommended",
    "xo/esnext",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
  ],

  env: {
    es6: true,
  },

  parserOptions: {
    sourceType: "script",
    ecmaVersion: 2018,
  },

  rules: {
    strict: ["error", "global"],
    // "no-multi-assign": 0,
    "func-names": ["error", "as-needed"],
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "before", ":": "before" } },
    ],
    "capitalized-comments": [
      "warn",
      "always",
      { ignorePattern: "prettier-ignore", ignoreConsecutiveComments: true },
    ],
    // ES2015 http://eslint.org/docs/rules/#ecmascript-6
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-destructuring": ["error"],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    // node https://github.com/mysticatea/eslint-plugin-node
    "node/no-unpublished-require": 0, // doesn't play nice with monorepo
    "node/no-extraneous-require": [
      "error",
      { allowModules: ["ava", "sinon", "@xmpp/test"] },
    ],
    // promise https://github.com/xjamundx/eslint-plugin-promise
    // promise/prefer-await-to-then: [error]
    // promise/prefer-await-to-callbacks: [error]
    // unicorn https://github.com/sindresorhus/eslint-plugin-unicorn
    "unicorn/filename-case": 0,
    "unicorn/catch-error-name": ["error", { name: "err" }],
    "unicorn/prevent-abbreviations": 0,
    "unicorn/prefer-number-properties": 0,
  },
};
