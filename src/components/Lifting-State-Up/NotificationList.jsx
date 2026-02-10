import { useState } from "react";

export default function NotificationList({
  notifications,
  markAsRead,
  deleteNotification,
}) {
  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {/* Dynamic List Rendering */}
      {notifications.map((n) => (
        <Item
          key={n.id}
          n={n}
          markAsRead={markAsRead}
          deleteNotification={deleteNotification}
        />
      ))}
    </ul>
  );
}

function Item({ n, markAsRead, deleteNotification }) {
  const [readHover, setReadHover] = useState(false);
  const [deleteHover, setDeleteHover] = useState(false);

  return (
    <li
      style={{
        listStyle: "none",
        padding: "10px 0",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "14px",
      }}
    >
      <span style={{ opacity: n.read ? 0.6 : 1 }}>
        {n.text}
      </span>

      <div>
        {!n.read && (
          <button
            onClick={() => markAsRead(n.id)}
            onMouseEnter={() => setReadHover(true)}
            onMouseLeave={() => setReadHover(false)}
            style={{
              marginRight: "8px",
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              background: readHover ? "#3ddc84" : "#28a745",
              color: "#fff",
              fontWeight: "600",
              transform: readHover ? "translateY(-2px)" : "translateY(0)",
              boxShadow: readHover ? "0 6px 14px rgba(40,167,69,0.6)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            Read
          </button>
        )}

        <button
          onClick={() => deleteNotification(n.id)}
          onMouseEnter={() => setDeleteHover(true)}
          onMouseLeave={() => setDeleteHover(false)}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: deleteHover ? "#ff4d4f" : "#c82333",
            color: "#fff",
            fontWeight: "600",
            transform: deleteHover ? "translateY(-2px)" : "translateY(0)",
            boxShadow: deleteHover
              ? "0 6px 14px rgba(200,35,51,0.6)"
              : "none",
            transition: "all 0.3s ease",
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
