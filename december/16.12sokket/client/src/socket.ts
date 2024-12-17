import { io } from "socket.io-client";

// Connect to the server
const socket = io("http://localhost:3000", {
  transports: ["websocket"], // Specify the transport method
});

export default socket;
