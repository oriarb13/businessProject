import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../socket";

const ChatRoom: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const navigate = useNavigate();

  const joinRoom = () => {
    if (username && selectedRoom) {
      socket.emit("joinRoom", selectedRoom, username); // חיבור לחדר
      navigate(`/chat/${selectedRoom}`); // מעבר לעמוד הצ'אט
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-xl font-bold">Choose a Chat Room</h1>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={selectedRoom}
        onChange={(e) => setSelectedRoom(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Select Room</option>
        <option value="sports">Sports</option>
        <option value="art">Art</option>
        <option value="politics">Politics</option>
      </select>
      <button
        onClick={joinRoom}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Enter Chat
      </button>
    </div>
  );
};

export default ChatRoom;
