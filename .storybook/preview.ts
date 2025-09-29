import type { Parameters } from "@storybook/marko";
import "../src/pages/+layout.style.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
} satisfies Parameters;
