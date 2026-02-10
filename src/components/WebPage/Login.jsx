import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pageBg from "./background-image.jpg";

export default function Login() {
  const navigate = useNavigate();
  // Controlled Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  // UI & UX State
  const [hover, setHover] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  // Error & Success State
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState("");
  // Validation Functions(Regex)
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isStrongPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(password);

  const clearError = () => {
    setFormError("");
    setSuccess("");
  };
  // Login Logic
  const handleLogin = () => {
    setFormError("");
    setSuccess("");
    // Event Handling 
    if (!email) return setFormError("Email is required");
    if (!isValidEmail(email))
      return setFormError("Email must contain @ and be valid");

    if (!password)
      return setFormError(
        "Password must contain uppercase, lowercase, number and special symbol"
      );

    if (!isStrongPassword(password))
      return setFormError(
        "Password must contain uppercase, lowercase, number and special symbol"
      );

    if (!remember) return setFormError("Please select Remember me");
    localStorage.setItem("isLoggedIn", "true");
    navigate("/products"); 
  };

  return (
    <div style={{ ...styles.page, backgroundImage: `url(${pageBg})` }}>
      <div
        style={{...styles.container,
          transform: hover ? "scale(1.04)" : "scale(1)",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div style={styles.left}>
          <h1 style={styles.leftText}>Welcome Back</h1>
        </div>

        <div style={styles.formOnly}>
          <h2 style={styles.heading}>Login</h2>

          <input
            style={styles.input}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError();
            }}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearError();
            }}
          />

          <div style={styles.options}>
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={() => {
                  setRemember(!remember);
                  clearError();
                }}
              />
              Remember me
            </label>

            <span
              style={styles.link}
              onClick={() => navigate("/forgot-password")} // Navigate to Forgot Password
            >
              Forgot password?
            </span>
          </div>

          {formError && <p style={styles.formError}>{formError}</p>}
          {success && <p style={styles.success}>{success}</p>}

          <button
            style={{ ...styles.btn,
              background: btnHover ? "linear-gradient(135deg, #2f3032, #2e302f)" : "#48494c",
              transform: btnHover ? "scale(1.06)" : "scale(1)",
              boxShadow: btnHover ? "0 12px 30px rgba(84, 85, 87, 0.45)" : "none",
            }}
            onClick={handleLogin}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            SIGN IN
          </button>

          <p style={styles.bottomText}>
            Don’t have an account?{" "}
            <span
              style={styles.link}
              onClick={() => navigate("/signup")}  // Navigate to Sign Up
            >
              SIGN UP HERE
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* inline styles */

const styles = {
  page: {
    minHeight: "100vh",
    position: "fixed",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
  },

  container: {
    width: "720px",
    height: "460px",
    display: "flex",
    borderRadius: "22px",
    overflow: "hidden",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
  },

  left: {
    flex: 1,
    background: "linear-gradient(135deg,#2563eb,#1e3a8a)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  leftText: {
    fontSize: "34px",
    fontWeight: "bold",
  },

  formOnly: {
    flex: 1.3,
    padding: "40px",
    color: "#fff",
  },

  heading: {
    textAlign: "center",
    fontSize: "26px",
    fontWeight: "700",
    background: "linear-gradient(135deg,#2563eb,#22c55e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },

  options: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "14px",
    fontSize: "14px",
  },

  remember: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  forgot: {
    cursor: "pointer",
    textDecoration: "underline",
  },

  formError: {
    color: "#74f351",
    fontSize: "13px",
    marginBottom: "8px",
  },

  success: {
    color: "#22c55e",
    fontSize: "14px",
    textAlign: "center",
    marginBottom: "8px",
  },

  btn: {
    width: "100%",
    padding: "12px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    letterSpacing: "1px",
  },

  bottomText: {
    marginTop: "26px",
    textAlign: "center",
    fontSize: "14px",
  },

  link: {
    cursor: "pointer",
    color: "#2563eb",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};
