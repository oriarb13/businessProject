import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../socket";

interface Message {
  by: string; // שם המשתמש ששלח את ההודעה
  text: string; // תוכן ההודעה
}

const ChatPage: React.FC = () => {
  const { roomName } = useParams<{ roomName: string }>(); // שם החדר מתוך הנתיב
  const [messages, setMessages] = useState<Message[]>([]); // כל ההודעות בחדר
  const [newMessage, setNewMessage] = useState<string>(""); // תוכן ההודעה החדשה
  const [username] = useState<string>(socket.username || ""); // שם המשתמש הנוכחי

  // מאזינים לאירועים של הודעות והיסטוריית צ'אט
  useEffect(() => {
    socket.on("message", (message: Message) => {
      setMessages((prev) => [...prev, message]); // הוספת ההודעה החדשה לרשימה
    });

    socket.on("chatHistory", (history: Message[]) => {
      setMessages(history); // רינדור היסטוריית ההודעות (10 אחרונות)
    });

    // שליחת אירוע הצטרפות לחדר (מקרה של רענון העמוד)
    socket.emit("joinRoom", roomName, username);

    // ניקוי מאזינים כשהקומפוננטה מוסרת
    return () => {
      socket.off("message");
      socket.off("chatHistory");
    };
  }, [roomName, username]);

  // שליחת הודעה
  const sendMessage = () => {
    if (newMessage) {
      // שליחת ההודעה לסרבר דרך WebSocket
      socket.emit("sendMessage", roomName, newMessage);

      // הוספת ההודעה לרשימה באופן מיידי (לוקאלי)
      setMessages((prev) => [
        ...prev,
        { by: username, text: newMessage }, // רינדור ההודעה עם שם המשתמש
      ]);

      setNewMessage(""); // ניקוי שדה הקלט לאחר שליחה
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-xl font-bold">Room: {roomName}</h1>
      {/* רשימת ההודעות */}
      <div className="w-96 h-64 border p-2 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="border-b py-1">
            <strong>{msg.by}:</strong> {msg.text}
          </div>
        ))}
      </div>
      {/* קלט להודעה חדשה */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
