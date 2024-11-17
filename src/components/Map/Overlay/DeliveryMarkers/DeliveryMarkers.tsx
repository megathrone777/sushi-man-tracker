import React, { useEffect, useState } from "react";
import moment from "moment";
import { Marker } from "react-map-gl/maplibre";

import { socketPrimary, socketSecondary } from "~/socket";
import { StyledMarker } from "./styled";

const headers = {
  authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const headers2 = {
  authorization: `Bearer ${import.meta.env.VITE_API_TOKEN2}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const DeliveryMarkers: React.FC = () => {
  const [orders, setOrders] = useState([]);

  useEffect((): void => {
    const getOrders = async (): Promise<void> => {
      const date = moment().format("YYYY-MM-DD");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/orders?${new URLSearchParams({
          "populate[items][populate]": "product",
          "populate[items][populate][0]": "modification",
          "populate[items][populate][1]": "modification.modifier",
          "populate[items][populate][2]": "modification.submodifier",
          "populate[client][populate][0]": "orders",
          "populate[timeReports]": "*",
          "populate[additionals][populate]": "*",
          "sort[0]": "createdAt:desc",
          "filters[createdAt][$containsi]": date,
          "filters[$or][1][deliveryType][$contains]": "delivery",
          "filters[$and][0][status][$nei]": "done",
          "filters[$and][1][status][$nei]": "placed",
        })}`,
        {
          headers,
        }
      );

      const response2 = await fetch(
        `${import.meta.env.VITE_API_URL2}/api/orders?${new URLSearchParams({
          "populate[items][populate]": "product",
          "populate[items][populate][0]": "modification",
          "populate[items][populate][1]": "modification.modifier",
          "populate[items][populate][2]": "modification.submodifier",
          "populate[client][populate][0]": "orders",
          "populate[timeReports]": "*",
          "populate[additionals][populate]": "*",
          "sort[0]": "createdAt:desc",
          "filters[createdAt][$containsi]": date,
          "filters[$or][1][deliveryType][$contains]": "delivery",
          "filters[$and][0][status][$nei]": "done",
          "filters[$and][1][status][$nei]": "placed",
        })}`,
        {
          headers: headers2,
        }
      );

      if (response && response.ok) {
        const items = await response.json();

        if (items && items.data) {
          const orders = items.data.map(
            ({
              attributes: { deliveryCoordinates, deliveryTime, status },
              id,
            }: TOrder) => ({
              deliveryTime,
              id,
              key: "sushi",
              position: deliveryCoordinates.split(","),
              status,
            })
          );

          setOrders(orders);
        }
      }

      if (response2 && response2.ok) {
        const items = await response2.json();

        if (items && items.data) {
          const orders = items.data.map(
            ({
              attributes: { deliveryCoordinates, deliveryTime, status },
              id,
            }: TOrder) => ({
              deliveryTime,
              id,
              key: "wings",
              position: deliveryCoordinates.split(","),
              status,
            })
          );

          if (orders && !!orders.length) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setOrders((prevOrders) => [...prevOrders, ...orders]);
          }
        }
      }
    };

    socketPrimary.on("order:update", getOrders);
    socketSecondary.on("order:update", getOrders);
    getOrders();
  }, []);

  return (
    <React.Fragment>
      {orders &&
        !!orders.length &&
        orders.map(
          ({ deliveryTime, id, key, position, status }): React.ReactElement => {
            return (
              <Marker
                key={`delivery-marker-${id}`}
                latitude={+position[0]}
                longitude={+position[1]}
              >
                <StyledMarker
                  className={
                    status === "new" && deliveryTime ? "new time" : status
                  }
                  style={{ borderRadius: key === "wings" ? 0 : "50%" }}
                >
                  {id}
                </StyledMarker>
              </Marker>
            );
          }
        )}
    </React.Fragment>
  );
};

export { DeliveryMarkers };
