import styled, { type DefaultTheme } from "styled-components";

import { Icon } from "./components";
import { colors, fonts } from "./variables";

const theme: DefaultTheme = {
  colors,
  // devices,
  fonts,

  hover: (css) => ({
    "@media (hover: hover) and (pointer: fine)": {
      "&:hover": {
        ...css,
      },
    },
  }),

  placeholder: (css) => ({
    "&::-webkit-input-placeholder": {
      ...css,
    },

    "&:-moz-placeholder": {
      ...css,
    },

    "&::-moz-placeholder": {
      ...css,
    },

    "&:-ms-input-placeholder": {
      ...css,
    },
  }),
};

export const ThemeComponent = { Icon };
export { styled, theme };
export { css, keyframes, useTheme } from "styled-components";
