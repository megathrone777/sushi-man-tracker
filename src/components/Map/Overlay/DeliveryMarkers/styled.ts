import { styled } from "styled-components";

export const StyledMarker = styled.i({
  color: "white",
  display: "inline-block",
  height: 25,
  fontSize: 17,
  fontStyle: "normal",
  fontWeight: "bold",
  lineHeight: "25px",
  paddingInline: 6,
  textAlign: "center",

  "&.new": {
    backgroundColor: "red",
  },

  "&.new.time": {
    backgroundColor: "darkviolet",
  },

  "&.started": {
    backgroundColor: "blue",
  },

  "&.ready": {
    backgroundColor: "green",
  },

  "&.took": {
    backgroundColor: "yellowgreen",
  },

  "&.placed, &.done": {
    backgroundColor: "gray",
  },
});
