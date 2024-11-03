import React from "react";
import ReactMap from "react-map-gl/maplibre";

import { Content } from "./Content";

const Map: React.FC = () => (
  <ReactMap
    attributionControl={false}
    interactive={false}
    initialViewState={{
      latitude: 50.073658,
      longitude: 14.41854,
      zoom: 16,
    }}
    mapStyle="/map.json"
    maplibreLogo={false}
  >
    <Content />
  </ReactMap>
);

export { Map };
