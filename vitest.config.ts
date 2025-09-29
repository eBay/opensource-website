import marko from "@marko/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [marko()],
  test: {
    globals: true,
    coverage: {
      include: ["src/**/*"],
      reporter: ["text", "html", "cobertura"],
    },
    ...(process.env.CI && {
      outputFile: "test-results.xml",
      reporters: ["default", "junit"],
    }),
  },
});
