import { useState } from "react";
import pageBg from "../WebPage/background-image.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    console.log({ email, password, remember });
    alert("Login Successful");
  };

  return (
    <div
      style={{
        ...styles.page,
        backgroundImage: `url(${pageBg})`,
      }}
    >
      <div style={styles.box}>
        <h2>Login</h2>

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

        <label style={styles.remember}>
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          Remember me
        </label>

        {error && <p style={styles.error}>{error}</p>}

        <button style={styles.btn} onClick={handleLogin}>
          SIGN IN
        </button>
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const styles = {
  page: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: "360px",
    padding: "30px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    color: "#fff",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "none",
  },

  remember: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "10px",
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
