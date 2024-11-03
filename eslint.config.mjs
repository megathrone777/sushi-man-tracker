// @ts-check
import jsEslint from "@eslint/js";
import globals from "globals";
import eslintPluginImport from "eslint-plugin-import-x";
import tsEslint from "typescript-eslint";
import stylisticTs from "@stylistic/eslint-plugin-ts";

export default tsEslint.config(
  { ignores: ["build"] },
  {
    extends: [jsEslint.configs.recommended, ...tsEslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      import: eslintPluginImport,
      "@stylistic/ts": stylisticTs,
    },
    rules: {
      "func-style": ["error", "expression"],
      "import/newline-after-import": "error",
      "import/order": [
        "error",
        {
          groups: [["builtin", "external"]],
          "newlines-between": "always",
        },
      ],
      "newline-after-var": "error",
      "newline-before-return": "error",
      "no-inline-comments": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-restricted-syntax": ["error", "FunctionDeclaration"],
      "no-trailing-spaces": "error",
      "no-unused-vars": "off",
      "prefer-const": "error",
      indent: ["error", 2],
      semi: "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "_" },
      ],
      "@stylistic/ts/quotes": "error",
    },
  }
);
