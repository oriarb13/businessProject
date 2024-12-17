import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import ChatPage from "./components/ChatPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatRoom />} /> {/* מסך בחירת חדר */}
        <Route path="/chat/:roomName" element={<ChatPage />} /> {/* עמוד הצ'אט */}
      </Routes>
    </Router>
  );
};

export default App;
