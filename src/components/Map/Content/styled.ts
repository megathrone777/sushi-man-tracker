import { styled } from "~/theme";

export const StyledMarker = styled.i(({ theme: { colors } }) => ({
  backgroundColor: colors.orange,
  borderRadius: "50%",
  display: "block",
  height: 30,
  width: 30,
}));

export const StyledCenter = styled.button({
  appearance: "none",
  left: 5,
  position: "absolute",
  top: 5,
  zIndex: 20,
});
