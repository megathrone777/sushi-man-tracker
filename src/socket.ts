import { io } from "socket.io-client";

const socketPrimary = io(import.meta.env.VITE_API_URL, {
  auth: {
    strategy: "apiToken",
    token: import.meta.env.VITE_API_TOKEN,
  },
  reconnectionDelayMax: 1000,
  transports: ["websocket"],
});

const socketSecondary = io(import.meta.env.VITE_API_URL2, {
  auth: {
    strategy: "apiToken",
    token: import.meta.env.VITE_API_TOKEN2,
  },
  reconnectionDelayMax: 1000,
  transports: ["websocket"],
});

export { socketPrimary, socketSecondary };
