import React, { memo, useCallback } from "react";
import { useGlobals, useParameter } from "@storybook/manager-api";
import { IconButton } from "@storybook/components";
import { PARAM_KEY, TOOL_ID } from "./constants";

export const Tool = memo(function TextDirectionSelector() {
  const [globals, updateGlobals] = useGlobals();
  const textDirection = useParameter(PARAM_KEY, globals[PARAM_KEY]);

  const toggleTextDirection = useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: textDirection === "ltr" ? "rtl" : "ltr",
    });
  }, [textDirection]);

  return (
    <IconButton
      key={TOOL_ID}
      active={true}
      title="Toggle text direction"
      onClick={toggleTextDirection}
    >
      {!textDirection || textDirection === "ltr" ? (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <path d="M9.885 7.936V12.2H8.797V2h2.896c.843 0 1.264.432 1.264 1.296V6.64c0 .776-.33 1.202-.992 1.279l1.504 4.28h-1.184l-1.456-4.264h-.944Zm0-4.968v4h1.488c.213 0 .347-.027.4-.081.064-.066.096-.208.096-.427V3.476c0-.219-.032-.355-.096-.41-.053-.066-.187-.098-.4-.098H9.885Z" />
          <path d="M7.832 2v.968h-1.6V12.2H5.144V2.968h-1.6V2h4.288Z" />
          <path d="M1.088 11.232h2.288v.968H0V2h1.088v9.232Z" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <path d="M11.653 11.232h2.345v.968h-3.46V2h1.115v9.232Z" />
          <path d="M9.548 2v.968h-1.64V12.2H6.793V2.968h-1.64V2h4.395Z" />
          <path d="M1.115 7.936V12.2H0V2h2.968c.864 0 1.296.432 1.296 1.296V6.64c0 .776-.34 1.202-1.017 1.279l1.541 4.28H3.575L2.083 7.936h-.968Zm0-4.968v4H2.64c.219 0 .355-.027.41-.081.066-.066.099-.208.099-.427V3.476c0-.219-.033-.355-.099-.41-.054-.066-.191-.098-.41-.098H1.115Z" />
        </svg>
      )}
    </IconButton>
  );
});
