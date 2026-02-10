import { useEffect, useState } from "react";
import pageBg from "../assets/image-3.jpg";
import mobileBg from "../assets/whats app image.jpg";

export default function AppPage() {
  const [messages, setMessages] = useState([]);
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");

  // 🟢 componentDidMount
  useEffect(() => {
    console.log("Component Mounted");

    // simulate API call after page load
    setTimeout(() => {
      setMessages([
        { text: "Hi 👋", sender: "A" },
        { text: "Hello! How are you?", sender: "B" },
      ]);
      console.log("Data loaded after page load");
    }, 1000);

    // 🔴 componentWillUnmount
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // 🟡 componentDidUpdate (when messages change)
  useEffect(() => {
    if (messages.length > 0) {
      console.log("Component Updated: New message added", messages);
    }
  }, [messages]);

  function sendMessage(text, sender) {
    if (!text.trim()) return;
    setMessages([...messages, { text, sender }]);
    sender === "A" ? setTextA("") : setTextB("");
  }

  function renderMessages(currentUser) {
    return messages.map((msg, index) => (
      <div
        key={index}
        style={{ ...styles.message,
          alignSelf: msg.sender === currentUser ? "flex-end" : "flex-start",
          background: msg.sender === currentUser ? "#dcf8c6" : "#fff",
        }}
      >
        {msg.text}
      </div>
    ));
  }

  return (
    <div
      style={{
        ...styles.page,
        backgroundImage: `url(${pageBg})`,
      }}>

      {/* MOBILE A */}
      <div
        style={{ ...styles.mobile,
          backgroundImage: `url(${mobileBg})`,
        }}
      >
        <div style={styles.header}>
          <span>Supriya</span>
          <span>📞  📹 ⋮</span>
        </div>

        <div style={styles.chatBox}>{renderMessages("A")}</div>

        <div style={styles.messageBar}>
          <input
            style={styles.messageInput}
            placeholder="Message here…"
            value={textA}
            onChange={(e) => setTextA(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(textA, "A")}
          />
          <span
            style={styles.sendIcon}
            onClick={() => sendMessage(textA, "A")} >
            ▶
          </span>
        </div>
      </div>

      {/* MOBILE B */}
      <div
        style={{ ...styles.mobile,
          backgroundImage: `url(${mobileBg})`,
        }}
      >
        <div style={styles.header}>
          <span>Namdhitha</span>
          <span>📞 📹 ⋮</span>
        </div>

        <div style={styles.chatBox}>{renderMessages("B")}</div>

        <div style={styles.messageBar}>
          <input
            style={styles.messageInput}
            placeholder="Message here…"
            value={textB}
            onChange={(e) => setTextB(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(textB, "B")}
          />
          <span
            style={styles.sendIcon}
            onClick={() => sendMessage(textB, "B")}
          >
            ▶
          </span>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    position: "fixed",
    inset: 0,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "100px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  mobile: {
    width: "280px",
    height: "520px",
    borderRadius: "22px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
  },

  header: {
    height: "50px",
    background: "rgba(7,94,84,0.9)",
    color: "#fff",
    padding: "0 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "600",
  },

  chatBox: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    overflowY: "auto",
  },

  message: {
    maxWidth: "70%",
    padding: "8px 12px",
    borderRadius: "14px",
    fontSize: "14px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },

  messageBar: {
    margin: "8px",
    padding: "6px 12px",
    borderRadius: "22px",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },

  messageInput: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    padding: "6px",
    background: "transparent",
  },

  sendIcon: {
    color: "#2563eb",
    fontSize: "18px",
    cursor: "pointer",
    marginLeft: "8px",
    userSelect: "none",
  },
};
