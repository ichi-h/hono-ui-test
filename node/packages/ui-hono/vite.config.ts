import path from "path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import Dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    Dts({
      entryRoot: path.resolve(__dirname, "src"),
    }),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "portfolio-ui-hono",
      fileName: (format) => `portfolio-ui-hono.${format}.js`,
    },
    rollupOptions: {
      external: ["hono"],
      output: {
        globals: {
          hono: "Hono",
        },
      },
    },
  },
});
