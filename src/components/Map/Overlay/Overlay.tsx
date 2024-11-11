// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useMap, Marker } from "react-map-gl/maplibre";

import { socket } from "~/socket";
// import { Controls } from "./Controls";
// import type { TCourierState } from "./types";
import { StyledMarker } from "./styled";

const Overlay: React.FC = () => {
  const { current: map } = useMap();
  const [courierState, setCourierState] = useState({
    "courier-1": {
      latitude: 0,
      longitude: 0,
    },
    "courier-2": {
      latitude: 0,
      longitude: 0,
    },
  });

  const handleLocationChange = ({
    courier: currentCourier,
    latitude,
    longitude,
  }): void => {
    if (map) {
      setCourierState((prevState) => ({
        ...prevState,
        [`courier-${currentCourier}`]: {
          ...prevState[`courier-${currentCourier}`],
          latitude,
          longitude,
        },
      }));
    }
  };

  // const handleCourierToggle = (id: number): void => {
  //   setCourierState(
  //     (prevState: TCourier): TCourier => ({
  //       ...prevState,
  //       courier: id,
  //     })
  //   );
  // };

  useEffect((): void => {
    // socket.off("change-location");
    socket.on("change-location", handleLocationChange);
  }, []);

  // <StyledMarker className={courier === 2 ? "secondary" : ""} />

  return (
    <React.Fragment>
      {/* <Controls id={courier} onToggle={handleCourierToggle} /> */}

      <Marker
        anchor="center"
        latitude={courierState["courier-1"].latitude}
        longitude={courierState["courier-1"].longitude}
      >
        <StyledMarker>1</StyledMarker>
      </Marker>

      <Marker
        anchor="center"
        latitude={courierState["courier-2"].latitude}
        longitude={courierState["courier-2"].longitude}
      >
        <StyledMarker className="secondary">2</StyledMarker>
      </Marker>

      <Marker latitude={50.0861328} longitude={14.4518119} />
      <Marker latitude={50.0993822} longitude={14.4309572} />
    </React.Fragment>
  );
};

export { Overlay };
