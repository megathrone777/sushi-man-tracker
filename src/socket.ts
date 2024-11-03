import { io } from "socket.io-client";

const socket = io("https://develop.sushiman-office.cz", {
  auth: {
    strategy: "apiToken",
    token:
      "79d8e424cce6c7221899c7ed07dd62323656162f61578c8a69ccea1f6a39b39035b3c519fc3ed4f533f7455a7f42cf93db24a7d0a36092a73917423d2985f13f445ca86e936a69f0bcffa68273d3a30486c0a987f6d5a2cf6b3c0df88065a0f340bfb5e254b872f619dc5f78d89b75ea5b591094c791e26bd935a5623ed7db2b",
  },
  transports: ["websocket"],
});

export { socket };
