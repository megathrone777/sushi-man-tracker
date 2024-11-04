import React from "react";
import "maplibre-gl/dist/maplibre-gl.css";

import { Map } from "~/components";

const App: React.FC = () => (
  <React.Fragment>
    <Map />
  </React.Fragment>
);

export { App };
