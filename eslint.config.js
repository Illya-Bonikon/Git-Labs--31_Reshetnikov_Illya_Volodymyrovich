// Правила стилю проєкту. vendor/ не перевіряється: це чужий код у підмодулі.
const globals = require("globals");

module.exports = [
  { ignores: ["vendor/**", "node_modules/**"] },
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "commonjs", globals: globals.node },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      eqeqeq: "error",
      "prefer-const": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
