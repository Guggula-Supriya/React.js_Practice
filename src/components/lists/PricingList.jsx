import { useState } from "react";

export default function PricingTable() {
  const [hovered, setHovered] = useState(null);
  const plans = [
    { id: 1, name: "STARTER", price: "$9.99", color: "#60a5fa" },
    { id: 2, name: "BUSINESS", price: "$21.99", color: "#6366f1", featured: true },
    { id: 3, name: "PREMIUM", price: "$41.99", color: "#a855f7" },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Flexible Pricing Plans</h1>     {/* ===== Heading ===== */}
      <p style={styles.subtitle}> Choose the perfect plan designed for your business growth </p>
      <div style={styles.container}> {plans.map((plan) => (
          <div key={plan.id} style={{ ...styles.card,
              transform: hovered === plan.id ? "scale(1.08)" : plan.featured ? "scale(1.04)" : "scale(1)",
              boxShadow: hovered === plan.id ? "0 28px 55px rgba(0,0,0,0.25)" : "0 16px 35px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={() => setHovered(plan.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* ===== Plan Name (Different Font) ===== */}
            <span style={{ ...styles.badge,backgroundColor: plan.color, }}> {plan.name} </span>

            {/* ===== Price ===== */}
            <h2 style={styles.price}>{plan.price}</h2>
            <p style={styles.perMonth}>per month</p>

            {/* ===== Features ===== */}
            <ul style={styles.list}>
              <li>✔ Secure storage</li>
              <li>✔ Unlimited access</li>
              <li>✔ Priority support</li>
              <li>✔ Cloud backup</li>
              <li>✔ High performance</li>
            </ul>

            {/* ===== Button ===== */}
            <button
              style={{ ...styles.button,
                backgroundColor: hovered === plan.id ? "#1e40af" : plan.color,
                transform: hovered === plan.id ? "scale(1.06)" : "scale(1)",
              }} >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "fixed",
    inset: 0,
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0f172a, #000000)",
    textAlign: "center",
    padding: "40px 10px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "800",
    background: "linear-gradient(90deg, #6366f1, #22c55e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    letterSpacing: "2px",
    marginBottom: "20px",
  },
  subtitle: {
    fontFamily: "'Inter', 'Roboto', calibiri",
    fontSize: "16px",
    color: "#607ba1",
    marginBottom: "50px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "72px",
    flexWrap: "wrap",
  },
  card: {
    width: "270px",
    background: "#ffffff",
    borderRadius: "20px",
    padding: "34px 24px",
    transition: "all 0.35s ease",
    cursor: "pointer",
  },
  badge: {
    fontFamily: "'Montserrat', 'Arial', sans-serif",
    color: "#ffffff",
    padding: "6px 18px",
    borderRadius: "20px",
    fontSize: "12px",
    letterSpacing: "1.5px",
    fontWeight: "600",
    display: "inline-block",
    marginBottom: "18px",
  },
  price: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "38px",
    fontWeight: "700",
    margin: "10px 0 0",
    color: "#0f172a",
  },

  perMonth: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "24px",
  },
  list: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: "1.9",
    fontSize: "14px",
    color: "#334155",
  },
  button: {
    fontFamily: "'Montserrat', sans-serif",
    marginTop: "26px",
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
