import React, { useEffect, useState } from "react";
import { Marker } from "react-map-gl/maplibre";

import { socketPrimary } from "~/socket";
import type { TCourier, TCourierState } from "./types";
import { DeliveryMarkers } from "./DeliveryMarkers";
import { StyledMarker } from "./styled";

const Overlay: React.FC = () => {
  const [courierState, setCourierState] = useState<TCourierState>({
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
  }: TCourier): void => {
    setCourierState(
      (prevState: TCourierState): TCourierState => ({
        ...prevState,
        [`courier-${currentCourier}`]: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ...prevState[`courier-${currentCourier}`],
          latitude,
          longitude,
        },
      })
    );
  };

  useEffect((): void => {
    socketPrimary.on("change-location", handleLocationChange);
  }, []);

  return (
    <React.Fragment>
      <DeliveryMarkers />

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
