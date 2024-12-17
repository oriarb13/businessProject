import Message from "../models/message.js";

const setupChatHandlers = (io) => {
  // Store users in rooms
  let rooms = {};

  io.on("connection", (socket) => {
    console.log("A user connected: ", socket.id);

    // Handle user joining a room
    socket.on("joinRoom", (roomName, username) => {
      socket.username = username;
      socket.join(roomName);

      // If the room doesn't exist, create it
      rooms[roomName] = rooms[roomName] || [];
      rooms[roomName].push(username);

      console.log(`${username} joined room: ${roomName}`);

      // Notify the room that a user has joined
      io.to(roomName).emit("message", {
        by: "System",
        text: `${username} has joined the chat`,
      });

      // Fetch last 10 messages for the room from MongoDB
      Message.find({ room: roomName })
        .sort({ createdAt: -1 }) // Sort by newest first
        .limit(10) // Limit to last 10 messages
        .then((messages) => {
          socket.emit("chatHistory", messages.reverse()); // Send messages to user
        })
        .catch((err) => {
          console.error("Error fetching chat history:", err.message);
        });
    });

    // Handle user leaving a room
    socket.on("leaveRoom", (roomName) => {
      // Remove user from the room's user list
      if (rooms[roomName]) {
        rooms[roomName] = rooms[roomName].filter(
          (user) => user !== socket.username
        );
      }

      socket.leave(roomName);
      console.log(`${socket.username} left room: ${roomName}`);

      // Notify the room that a user has left
      io.to(roomName).emit("message", {
        by: "System",
        text: `${socket.username} has left the chat`,
      });
    });

    // Handle sending a message
    socket.on("sendMessage", (roomName, message) => {
      const username = socket.username;

      // Save the message to the database
      const newMessage = new Message({
        room: roomName,
        username: username,
        message: message,
      });

      newMessage
        .save()
        .then(() => {
          io.to(roomName).emit("message", {
            by: username,
            text: message,
          });
        })
        .catch((err) => {
          console.error("Error saving message:", err.message);
        });
    });

    // Handle fetching room list
    socket.on("getRooms", () => {
      socket.emit("rooms", Object.keys(rooms)); // Send list of room names
    });

    // Handle user disconnection
    socket.on("disconnect", () => {
      console.log(`User ${socket.username} disconnected`);

      // If the user was in a room, notify others
      for (const roomName in rooms) {
        if (rooms[roomName].includes(socket.username)) {
          rooms[roomName] = rooms[roomName].filter(
            (user) => user !== socket.username
          );
          io.to(roomName).emit("message", {
            by: "System",
            text: `${socket.username} has disconnected`,
          });
        }
      }
    });
  });
};

export default setupChatHandlers;
