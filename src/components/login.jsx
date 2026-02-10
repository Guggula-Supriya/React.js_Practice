import { useState } from "react";
import bgImage from "../assets/wide-angle.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Show / Hide Logic
  const [hover, setHover] = useState(false); 

  const handleLogin = () => {    // Show / Hide Logic
    if (!email || !password) {
      {/* Show content */}
      setMessage("❌ Please enter email and password");
      return;
    }
    {/* Show content */}
    setMessage("✅ Login successful");
    setEmail("");
    setPassword("");
  };

  return (
    <div
    /* inline JSX styling*/
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "--scale": hover ? 1.05 : 1,
        "--lift": hover ? "-8px" : "0px",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: "360px",
          padding: "30px",
          textAlign: "center",
          background: "rgba(34, 161, 142, 0.9)",
          borderRadius: "14px",
          boxShadow: hover ? "0 18px 40px rgba(0,0,0,0.45)" : "0 8px 18px rgba(0,0,0,0.25)",
          transform: "scale(var(--scale)) translateY(var(--lift))",
          transition: "all 0.4s ease",
        }}>
        <h2 style={{ color: "#fff", marginBottom: "10px" }}>LOGIN</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            border: "none",
            outline: "none",
          }}/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            border: "none",
            outline: "none",
          }}/>
        {/* Conditional Rendering */}
        {message && (
          <p
            style={{
              fontSize: "14px",
              marginTop: "6px",
              color: message.includes("❌") ? "#fff" : "#22c55e", 
            }}> {message} </p> )}
        <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "12px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.06) translateY(-2px)";
          e.currentTarget.style.background = "#1e40af";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.35)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background = "#2563eb";
          e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.25)";
        }}
      >
        Login
      </button>
      </div>
    </div>
  );
}
