import { styled } from "styled-components";

export const StyledMarker = styled.i({
  backgroundColor: "greenyellow",
  borderRadius: "50%",
  display: "block",
  height: 25,
  fontSize: 17,
  fontStyle: "normal",
  fontWeight: "bold",
  lineHeight: "25px",
  textAlign: "center",
  width: 25,

  "&.secondary": {
    backgroundColor: "orange",
  },
});
