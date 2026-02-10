  import { useState } from "react";

  export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");

    const handleRegister = () => {
      if (!name || !email || !password || !confirm) {
        setError("All fields are required");
        return;
      }

      if (!email.includes("@")) {
        setError("Invalid email");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      if (password !== confirm) {
        setError("Passwords do not match");
        return;
      }

      setError("");
      alert("Registration Successful");
    };

    return (
      <div style={styles.page}>
        <div style={styles.box}>
          <h2>Register</h2>

          <input
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button style={styles.btn} onClick={handleRegister}>
            SIGN UP
          </button>
        </div>
      </div>
    );
  }

  /* ===== STYLES ===== */

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a",
    },

    box: {
      width: "360px",
      padding: "30px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(10px)",
      color: "#fff",
    },

    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "12px",
      borderRadius: "10px",
      border: "none",
    },

    btn: {
      width: "100%",
      padding: "12px",
      borderRadius: "25px",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer",
    },

    error: {
      color: "#ff4d4d",
      marginBottom: "10px",
    },
  };
