export default function NotificationBell({ count }) {
  const NOTIFICATION_GRADIENT =
  "linear-gradient(90deg,  #00c6ff, #7f00ff, #ff4ecd)";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        marginBottom: "20px",
        fontSize: "22px",
        fontWeight: "700",
      }}
    >
      {/* Bell Icon */}
      <span style={{ fontSize: "24px" }}>🔔</span>

      {/* MULTI-COLOR HEADING */}
      <span
        style={{
          background: NOTIFICATION_GRADIENT,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Notifications
      </span>

      {/* COUNT — LOGIC NOT CHANGED */}
      {count > 0 && (
        <span
          style={{
            color: "#ff4d4f",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          ({count})
        </span>
      )}
    </div>
  );
}
