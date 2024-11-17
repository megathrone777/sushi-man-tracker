declare global {
  interface TOrder {
    attributes: {
      additionals: TOrderAdditional[];
      client: {
        data: {
          attributes: {
            email: string;
            name: string;
            orders: {
              data: object[];
            };
            phoneCountryCode: string;
            phoneNumber: string;
          };
          id: number;
        };
      };
      comment: string;
      createdAt: string;
      courierTelegramUser: string | null;
      cutleryCount: number;
      cutleryCountToPay: number;
      deliveryAddress: string;
      deliveryAddressDistrict: string;
      deliveryCoordinates: string;
      deliveryTime: string | null;
      deliveryTitle: string;
      deliveryType: TOrderDelivery;
      district: string | null;
      id: number;
      items: TOrderItem[];
      note: string;
      onlinePaymentStatus: TPaymentStatus;
      paymentType: TOrderPayment;
      promocode: string;
      promocodeDiscountAmountCZK: number;
      status: TOrderStatus;
      statusDisplay: string;
      timeReports: TOrderTimeReport[];
      totalAmountCZK: number;
      updatedAt: string;
    };
    id: number;
  }
}

export {};
