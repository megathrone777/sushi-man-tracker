import { styled } from "~/theme";

export const StyledWrapper = styled.svg<{ fill: string; maxHeight: number }>(
  ({ maxHeight }) => ({
    fill: "red",
    maxHeight,
  })
);
