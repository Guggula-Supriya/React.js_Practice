import { useState } from "react";
import NotificationBell from "./NotificationBell";
import MessageForm from "./MessageForm";
import NotificationList from "./NotificationList";
import bgImage from "../../images/back.jpg";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [hover, setHover] = useState(false);

  const addNotification = (text) => {
    setNotifications([{ id: Date.now(), text, read: false }, ...notifications]);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* GLASS CARD */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: "460px",
          padding: "28px",
          borderRadius: "18px",
          background: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: hover ? "0 25px 60px rgba(0,0,0,0.6)" : "0 15px 40px rgba(0,0,0,0.45)",
          transform: hover ? "scale(1.03)" : "scale(1)",
          transition: "all 0.35s ease",
          color: "#fff",
        }}
      >
        {/* Parent → Child data flow */}
        <NotificationBell count={unreadCount} />    
        {/* Child → Parent communication */}
        <MessageForm addNotification={addNotification} />

        <NotificationList
          notifications={notifications}
          markAsRead={markAsRead}
          deleteNotification={deleteNotification}
        />
      </div>
    </div>
  );
}
