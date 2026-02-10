import { useState } from "react";

export default function MessageForm({ addNotification }) {
  const [text, setText] = useState("");   //Local State
  const [hover, setHover] = useState(false);

  const send = () => {
    if (!text.trim()) return;
    addNotification(text); //Key Interaction
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter message..."
        style={{
          flex: 1,
          padding: "12px 14px",
          borderRadius: "10px",
          border: "none",
          outline: "none",
          fontSize: "14px",
        }}
      />

      <button
        onClick={send}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          background: hover ? "#1e90ff" : "#007bff",
          color: "#fff",
          fontWeight: "600",
          boxShadow: hover ? "0 8px 20px rgba(30,144,255,0.6)" : "none",
          transform: hover ? "translateY(-2px)" : "translateY(0)",
          transition: "all 0.3s ease",
        }}
      >
        Send
      </button>
    </div>
  );
}
