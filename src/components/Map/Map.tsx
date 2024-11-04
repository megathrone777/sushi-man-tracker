import React from "react";
import ReactMap from "react-map-gl/maplibre";

import { Overlay } from "./Overlay";

const Map: React.FC = () => (
  <ReactMap
    attributionControl={false}
    dragPan={false}
    dragRotate={false}
    keyboard={false}
    initialViewState={{
      latitude: 50.073658,
      longitude: 14.41854,
      zoom: 16,
    }}
    mapStyle="/map.json"
    maplibreLogo={false}
  >
    <Overlay />
  </ReactMap>
);

export { Map };
