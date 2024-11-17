import { styled } from "styled-components";

export const StyledMarker = styled.i({
  backgroundColor: "#272727",
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
    backgroundColor: "#3f5cc7",
  },

  "&.ready": {
    backgroundColor: "#21a235",
  },

  "&.took": {
    backgroundColor: "#edaa1a",
  },

  "&.placed, &.done": {
    backgroundColor: "gray",
  },
});
