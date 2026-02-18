import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import json from "@eslint/json";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["**/node_modules/", "**/public/", "**/resources/"]), {
    extends: compat.extends("eslint:recommended"),

    plugins: {
        json,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.commonjs,
        },

        ecmaVersion: "latest",
        sourceType: "script",
    },

    rules: {
        "no-trailing-spaces": "error",

        "comma-dangle": ["error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "never",
        }],

        "function-paren-newline": "off",
        "global-require": "error",
        "import/no-dynamic-require": "off",
        "no-inner-declarations": "off",
        "class-methods-use-this": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "no-multiple-empty-lines": ["error"],
    },
}]);