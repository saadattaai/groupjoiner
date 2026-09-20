import { useState } from "react";
import JoinRoom from "./components/JoinRoom";
import ChatRoom from "./components/ChatRoom";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const joinGroup = (username, roomId) => {
    setUser({
      username,
      roomId,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="app">
      {user ? (
        <ChatRoom
          username={user.username}
          roomId={user.roomId}
          onLogout={logout}
        />
      ) : (
        <JoinRoom onJoin={joinGroup} />
      )}
    </div>
  );
}

export default App;