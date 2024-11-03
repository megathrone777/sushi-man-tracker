import React, { useEffect, useState } from "react";
import { useMap, Marker } from "react-map-gl/maplibre";

import { socket } from "~/socket";
import { TLocation } from "./types";
import { StyledMarker } from "./styled";

const Content: React.FC = () => {
  const { current: map } = useMap();
  const [{ latitude, longitude }, setPosition] = useState<TLocation>({
    latitude: 0,
    longitude: 0,
  });

  const handleLocationChange = ({ latitude, longitude }: TLocation): void => {
    console.log(latitude);

    setPosition(
      (prevPosition: TLocation): TLocation => ({
        ...prevPosition,
        latitude,
        longitude,
      })
    );

    if (map) {
      map.setCenter({
        lat: latitude,
        lon: longitude,
      });
      map.setZoom(16);
    }
  };

  useEffect((): void => {
    socket.on("change-location", handleLocationChange);
  }, []);

  return (
    <React.Fragment>
      <Marker {...{ latitude, longitude }} anchor="center">
        <StyledMarker />
      </Marker>
    </React.Fragment>
  );
};

export { Content };
