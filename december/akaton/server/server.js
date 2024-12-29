import dotenv from 'dotenv';
dotenv.config(); // load .env first

import http from 'http';
import { Server } from 'socket.io';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

// If you plan to use Socket.IO:
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

// Here you would set up socket logic if needed
// io.on('connection', (socket) => { /* ... */ });

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


