import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from "@storybook/types";
import { useEffect, useGlobals } from "@storybook/preview-api";
import { PARAM_KEY } from "./constants";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>,
) => {
  const [globals] = useGlobals();
  const textDirection = context.parameters.textDirection || globals[PARAM_KEY];
  const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    const selector = isInDocs
      ? `#anchor--${context.id} .sb-story, #story--${context.id}.sb-story`
      : "#storybook-root";
    const rootElements = document.querySelectorAll<HTMLElement>(selector);
    rootElements.forEach((element) => (element.dir = textDirection));
  }, [textDirection]);

  return StoryFn();
};
