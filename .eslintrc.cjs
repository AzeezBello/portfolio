module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    __BUILD_YEAR__: "readonly",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-hooks", "react-refresh"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-refresh/only-export-components": "off",
    "no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^React$" },
    ],
  },
  overrides: [
    {
      files: ["scripts/**/*.mjs", "vite.config.js", "src/entry-server.jsx"],
      env: { node: true },
    },
    {
      files: ["src/components/canvas/**/*.{js,jsx}"],
      rules: {
        "react/no-unknown-property": "off",
      },
    },
  ],
};
