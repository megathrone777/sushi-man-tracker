import React from "react";

import type { TProps } from "./Icon.types";
import { StyledWrapper } from "./Icon.styled";

const Icon: React.FC<TProps> = ({ fill, id, maxHeight }) => (
  <StyledWrapper {...{ fill, maxHeight }}>
    <use xlinkHref={`/images/sprite.svg#${id}Icon`} />
  </StyledWrapper>
);

export { Icon };
