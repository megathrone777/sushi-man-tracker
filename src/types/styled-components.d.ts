import type {
  CSS,
  CSSObject,
  StyledObject,
} from "styled-components/dist/types";

import type { TColors, TFonts } from "~/theme/variables/types";

declare module "styled-components" {
  interface TPlaceholder {
    (css: StyledObject<CSS.Properties>): CSSObject;
  }

  interface THover {
    (css: StyledObject<CSS.Properties>): {
      [key: CSS.AtRules]: {
        [key: CSS.SimplePseudos]: CSSObject;
      };
    };
  }

  export interface DefaultTheme {
    colors: TColors;
    // devices: TDevices;
    fonts: TFonts;
    hover: THover;
    placeholder: TPlaceholder;
  }
}
