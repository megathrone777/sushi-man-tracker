import { styled } from "styled-components";

export const StyledWrapper = styled.div({
  alignItems: "center",
  columnGap: 5,
  display: "flex",
  left: 5,
  position: "absolute",
  top: 5,
  zIndex: 2,
});

export const StyledButton = styled.button({
  appearance: "none",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
  fontSize: 17,
  height: 32,
  paddingInline: 7,

  "&.active": {
    backgroundColor: "orange",
    color: "white",
  },
});
