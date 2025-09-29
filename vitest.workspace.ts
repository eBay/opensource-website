import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "vitest.config.ts",
    test: {
      name: "server",
      environment: "node",
      include: ["src/**/{,*.}server.test.ts"],
      setupFiles: ["src/test/setup/server.ts"],
    },
  },
  {
    extends: "vitest.config.ts",
    test: {
      name: "browser",
      environment: "jsdom",
      include: ["src/**/{,*.}browser.test.ts"],
      setupFiles: ["src/test/setup/browser.ts"],
      environmentOptions: {
        jsdom: { url: "https://local.ebay.com:8082" },
      },
    },
  },
]);
