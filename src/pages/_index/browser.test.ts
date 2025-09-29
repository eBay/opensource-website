import { render, screen } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "./stories";

const { Default } = composeStories(stories);

describe("Index Page", () => {
  describe("Default fixture", () => {
    it("has welcome heading", async () => {
      await render(Default);

      // expect to find preamble text on page: Enabled by people.    <br>    Powered by technology.   <br>    Open to everyone.
      expect(screen.getByText(/Enabled by people/)).toBeInTheDocument();
    });
  });
});
