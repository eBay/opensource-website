import type { Meta, Story } from "@storybook/marko";
import Template, { type Input } from "./+page.marko";

export default {
  component: Template,
} as Meta<Input>;

export const Default = {} as Story<Input>;
