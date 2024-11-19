import React, { useEffect, useState } from "react";
import moment from "moment";
import { CapacitorHttp, type HttpHeaders } from "@capacitor/core";
import { Marker } from "react-map-gl/maplibre";

import { socketPrimary, socketSecondary } from "~/socket";
import { StyledMarker } from "./styled";

const headers: HttpHeaders = {
  authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const headers2: HttpHeaders = {
  authorization: `Bearer ${import.meta.env.VITE_API_TOKEN2}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const DeliveryMarkers: React.FC = () => {
  const [orders, setOrders] = useState([]);

  useEffect((): void => {
    const getOrders = async (): Promise<void> => {
      const date = moment().format("YYYY-MM-DD");

      const response = await CapacitorHttp.get({
        headers,
        url: `${import.meta.env.VITE_API_URL}/api/orders?${new URLSearchParams({
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
      });

      const response2 = await CapacitorHttp.get({
        headers: headers2,
        url: `${import.meta.env.VITE_API_URL2}/api/orders?${new URLSearchParams(
          {
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
          }
        )}`,
      });

      if (response && response.data && response.data.data) {
        const items = response.data.data;

        console.log(items);

        if (items && !!items.length) {
          const orders = items.map(
            ({
              attributes: {
                deliveryCoordinates,
                deliveryTime,
                onlinePaymentStatus,
                paymentType,
                status,
              },
              id,
            }: TOrder) => ({
              deliveryTime,
              id,
              key: "sushi",
              onlinePaymentStatus,
              paymentType,
              position: deliveryCoordinates.split(","),
              status,
            })
          );

          setOrders(orders);
        }
      }

      if (response2 && response2.data && response2.data.data) {
        const items = response2.data.data;

        if (items && !!items.length) {
          const orders = items.map(
            ({
              attributes: {
                deliveryCoordinates,
                deliveryTime,
                status,
                onlinePaymentStatus,
                paymentType,
              },
              id,
            }: TOrder) => ({
              deliveryTime,
              id,
              key: "wings",
              onlinePaymentStatus,
              paymentType,
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
        orders
          .filter(
            ({ onlinePaymentStatus, paymentType }) =>
              (paymentType === "card" && onlinePaymentStatus === "PAID") ||
              paymentType === "cardAfterDelivery" ||
              paymentType === "cash"
          )
          .map(
            ({
              deliveryTime,
              id,
              key,
              position,
              status,
            }): React.ReactElement => {
              return (
                <Marker
                  key={`delivery-marker-${Math.random()}`}
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
