import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pageBg from "./background-image.jpg";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState("");

  // 🔹 BUTTON HOVER STATE
  const [btnHover, setBtnHover] = useState(false);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isStrongPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(password);

  const handleReset = () => {
    setFormError("");
    setSuccess("");

    if (!email) return setFormError("Email required");
    if (!isValidEmail(email)) return setFormError("Invalid email");
    if (!isStrongPassword(newPass))
      return setFormError(
        "Password must contain uppercase, lowercase, number & special character"
      );
    if (newPass !== confirmPass)
      return setFormError("Passwords do not match");

    setSuccess("Password reset successful ✅");
  };

  return (
    <div style={{ ...styles.page, backgroundImage: `url(${pageBg})` }}>
      <div style={styles.container}>
        {/* LEFT */}
        <div style={styles.left}>
          <h1 style={styles.leftText}>Reset Access</h1>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <h2 style={styles.heading}>Forgot Password</h2>

          <input
            style={styles.input}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="New Password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />

          {formError && <p style={styles.formError}>{formError}</p>}
          {success && <p style={styles.success}>{success}</p>}

          {/* ✅ BUTTON WITH BACKGROUND COLOR CHANGE */}
          <button
            style={{
              ...styles.btn,
              background: btnHover ? "linear-gradient(135deg, #2f3032, #2e302f)" : "#48494c",
              transform: btnHover ? "scale(1.06)" : "scale(1)",
              boxShadow: btnHover ? "0 12px 30px rgba(84, 85, 87, 0.45)" : "none",
            }}
            onClick={handleReset}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            RESET PASSWORD
          </button>

          <p style={styles.bottomText}>
            Back to{" "}
            <span
              style={styles.link}
              onClick={() => navigate("/")}
            >
              LOGIN
            </span>
          </p>
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
    fontSize: "32px",
    fontWeight: "700",
  },

  right: {
    flex: 1.3,
    padding: "40px",
    color: "#fff",
  },

  heading: {
    textAlign: "center",
    fontSize: "26px",
    fontWeight: "700",
    background: "linear-gradient(135deg,#60a5fa,#34d399)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    marginBottom: "14px",
  },

  btn: {
    width: "100%",
    padding: "12px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    marginTop: "8px",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },

  formError: {
    color: "#54e359",
    fontSize: "13px",
    marginBottom: "8px",
  },

  success: {
    color: "#22c55e",
    fontSize: "14px",
    textAlign: "center",
    marginBottom: "8px",
  },

  bottomText: {
    marginTop: "18px",
    textAlign: "center",
    fontSize: "14px",
  },

  link: {
    cursor: "pointer",
    color: "#2563eb",
    textDecoration: "underline",
    fontWeight: "bold",
  },
};
