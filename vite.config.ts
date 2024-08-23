/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
    },
  },
  test: {
    globals: true,
    css: true,
    environment: "happy-dom",
    setupFiles: "./src/setupTest.ts",
  },
  base: "/FM-FAQ/",
});
