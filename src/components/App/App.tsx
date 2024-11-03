import React from "react";
import { ThemeProvider } from "styled-components";
import "maplibre-gl/dist/maplibre-gl.css";

import { Map } from "~/components";
import { theme } from "~/theme";

const App: React.FC = () => (
  <ThemeProvider {...{ theme }}>
    <Map />
  </ThemeProvider>
);

export { App };
