import React from "react";
import ReactMap from "react-map-gl/maplibre";

import { Overlay } from "./Overlay";

const Map: React.FC = () => (
  <ReactMap
    attributionControl={false}
    keyboard={false}
    initialViewState={{
      latitude: 50.0938417,
      longitude: 14.4424,
      zoom: window.innerWidth > 1000 ? 14 : 12,
    }}
    mapStyle="/map.json"
    maplibreLogo={false}
  >
    <Overlay />
  </ReactMap>
);

export { Map };
