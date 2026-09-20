import { useState } from "react";

function JoinRoom({ onJoin }) {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !roomId.trim()) {
      alert("Please enter your name and group ID");
      return;
    }

    onJoin(username.trim(), roomId.trim());
  };

  return (
    <div className="join-page">
      <div className="join-card">
        <div className="logo">GC</div>

        <h1>Group Chat</h1>

        <p>
          Enter your name and group ID to join a group.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Your Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Group ID</label>

          <input
            type="text"
            placeholder="Example: group123"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />

          <button type="submit">
            Join Group
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinRoom;