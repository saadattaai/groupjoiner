import { useEffect, useState } from "react";
import Message from "./Message";
import UsersList from "./UsersList";

function ChatRoom({ username, roomId, onLogout }) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [users, setUsers] = useState([
    {
      id: 1,
      username,
    },
  ]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      username,
      message: message.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((previous) => [
      ...previous,
      newMessage,
    ]);

    setMessage("");
  };

  useEffect(() => {
    return () => {
      setMessages([]);
    };
  }, []);

  return (
    <div className="chat-page">

      <header className="chat-header">
        <div>
          <h2>Group Chat</h2>
          <span>Room: {roomId}</span>
        </div>

        <button
          className="leave-button"
          onClick={onLogout}
        >
          Leave
        </button>
      </header>

      <div className="chat-container">

        <section className="chat-section">

          <div className="messages">

            {messages.length === 0 ? (
              <div className="empty">
                <h3>No messages yet</h3>

                <p>
                  Start the conversation.
                </p>
              </div>
            ) : (
              messages.map((item) => (
                <Message
                  key={item.id}
                  item={item}
                  currentUsername={username}
                />
              ))
            )}

          </div>

          <form
            className="message-form"
            onSubmit={sendMessage}
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">
              Send
            </button>
          </form>

        </section>

        <UsersList
          users={users}
          currentUsername={username}
        />

      </div>
    </div>
  );
}

export default ChatRoom;