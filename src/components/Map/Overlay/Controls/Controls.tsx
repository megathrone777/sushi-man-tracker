import React from "react";

import type { TProps } from "./types";
import { StyledWrapper, StyledButton } from "./styled";

const Controls: React.FC<TProps> = ({ id, onToggle }) => {
  const handleCourierToggle = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLButtonElement>): void => {
    const id = +currentTarget.id!;

    onToggle(id);
  };

  return (
    <StyledWrapper>
      <StyledButton
        className={id === 1 ? "active" : ""}
        id="1"
        onClick={handleCourierToggle}
        type="button"
      >
        Courier 1
      </StyledButton>

      <StyledButton
        className={id === 2 ? "active" : ""}
        id="2"
        onClick={handleCourierToggle}
        type="button"
      >
        Courier 2
      </StyledButton>
    </StyledWrapper>
  );
};

export { Controls };
