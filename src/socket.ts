import { io } from "socket.io-client";

const socket = io("https://develop.sushiman-office.cz", {
  auth: {
    strategy: "apiToken",
    token:
      "3dcf4f07d9792827a8ac843a0f9dfabe40e28d2acb7ef72432622cb86faca66c4926e94240e37229897bca1f2a2bf92ad5975c592e91061aa776fc5c7ff63265e0f46b53c02b9ad5ed2f57aff26d5cfa59cd39226a8ea711aed5fdc3db86e7731b5320916bbccd4414b774be732afb931713a358cbd2da473a63292b18dffda2",
  },
  transports: ["websocket"],
});

export { socket };
