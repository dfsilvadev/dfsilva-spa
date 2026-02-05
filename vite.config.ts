/// <reference types="vitest/config" />
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// URL base para meta tags e favicons (og:image, favicon absoluto).
// Em produção: VITE_APP_URL=https://dfsilva.dev
// Preview Vercel: VITE_APP_URL=https://dfsilva-dev.vercel.app (ou use VERCEL_URL)
const BASE_URL =
  process.env.VITE_APP_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
  "https://dfsilva.dev";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    {
      name: "html-transform",
      transformIndexHtml(html) {
        return html.replace(/%BASE_URL%/g, BASE_URL);
      },
    },
    svgr(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "src/test/"],
    },
  },
});
