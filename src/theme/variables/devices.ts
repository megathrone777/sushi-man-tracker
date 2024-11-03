import type { TDevices } from "./types";

const sizes: TDevices = {
  desktop: 1400,
  mobile: 767,
  tablet: 1025,
};

const devices: TDevices = {
  desktop: `@media (max-width: ${sizes.desktop}px)`,
  mobile: `@media (max-width: ${sizes.mobile}px)`,
  tablet: `@media (max-width: ${sizes.tablet}px)`,
};

export { devices };
