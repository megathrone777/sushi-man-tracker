import React, { useEffect, useState } from "react";
import { useMap, Marker } from "react-map-gl/maplibre";

import { socket } from "~/socket";
import { Controls } from "./Controls";
import type { TCourier } from "./types";
import { StyledMarker } from "./styled";

const Overlay: React.FC = () => {
  const { current: map } = useMap();
  const [{ courier, latitude, longitude }, setCourierState] =
    useState<TCourier>({
      courier: 1,
      latitude: 0,
      longitude: 0,
    });

  const handleLocationChange = ({
    courier: currentCourier,
    latitude,
    longitude,
  }: TCourier): void => {
    if (map && currentCourier === courier) {
      map.flyTo({
        center: {
          lat: latitude,
          lng: longitude,
        },
        curve: 0,
        essential: true,
        speed: 0.2,
      });

      setCourierState(
        (prevState: TCourier): TCourier => ({
          ...prevState,
          latitude,
          longitude,
        })
      );
    }
  };

  const handleCourierToggle = (id: number): void => {
    setCourierState(
      (prevState: TCourier): TCourier => ({
        ...prevState,
        courier: id,
      })
    );
  };

  useEffect((): void => {
    socket.off("change-location");
    socket.on("change-location", handleLocationChange);
  }, [courier]);

  return (
    <React.Fragment>
      <Controls id={courier} onToggle={handleCourierToggle} />

      <Marker {...{ latitude, longitude }} anchor="center">
        <StyledMarker />
      </Marker>
    </React.Fragment>
  );
};

export { Overlay };
