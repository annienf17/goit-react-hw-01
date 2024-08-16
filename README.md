This website is deployed on Vercel: https://goit-react-hw-01-ashy-beta.vercel.app

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ESLint configuration

node_modules/@eslint/dist/eslintrc.cjs

exchange with: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png)

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": 0,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
```

# Add source map generation option

vite.config.js - replace with: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png)

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// <https://vitejs.dev/config/>
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
```
