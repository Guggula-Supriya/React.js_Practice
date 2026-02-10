import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pageBg from "./background-image.jpg";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [hover, setHover] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isStrongPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(password);

  const validate = () => {
    if (!form.name) return "Name is required";
    if (!isValidEmail(form.email)) return "Invalid email";
    if (!isStrongPassword(form.password)) return "Weak password";
    if (form.password !== form.confirmPassword)
      return "Passwords do not match";
    return "";
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);
    setSuccess(true);
  };

  return (
    <div style={{ ...styles.page, backgroundImage: `url(${pageBg})` }}>
      <div style={{ ...styles.container,
          transform: hover ? "scale(1.04)" : "scale(1)",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div style={styles.left}>
          <h1>Join Us</h1>
        </div>

        <div style={styles.formOnly}>
          {!success ? (
            <form onSubmit={handleRegister}>
              <h2 style={styles.heading}>Register</h2>

              <input name="name" placeholder="Full Name" style={styles.input} onChange={handleChange} />
              <input name="email" placeholder="Email" style={styles.input} onChange={handleChange} />

              <div style={styles.passwordBox}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  style={styles.passwordInput}
                  onChange={handleChange}
                />
                <span style={styles.toggle} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>

              <div style={styles.passwordBox}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  style={styles.passwordInput}
                  onChange={handleChange}
                />
                <span style={styles.toggle} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? "Hide" : "Show"}
                </span>
              </div>

              {error && <p style={styles.error}>{error}</p>}

              <button
                style={{
                  ...styles.btn,
                  background: btnHover ? "linear-gradient(135deg, #2f3032, #2e302f)" : "#48494c",
                  transform: btnHover ? "scale(1.06)" : "scale(1)",
                  boxShadow: btnHover ? "0 12px 30px rgba(84, 85, 87, 0.45)" : "none",
                }}
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
              >
                SIGN UP
              </button>

              <p style={styles.bottomText}>
                Already have an account?{" "}
                <span style={styles.link} onClick={() => navigate("/")}>
                  Login here
                </span>
              </p>
            </form>
          ) : (
            <>
              <h2 style={{ color: "lightgreen" }}>Signup Successful ✅</h2>
              <button style={styles.btn} onClick={() => navigate("/")}>
                Go to Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* Inline Styling */const styles = {
  page: {
    minHeight: "100vh",
    position: "fixed",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    transition: "all 0.4s ease",
  },

  left: {
    flex: 1,
    background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  heading: {
    textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "26px",
    fontWeight: "700",
    background: "linear-gradient(135deg,#60a5fa,#34d399)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "25px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },

  passwordBox: {
    position: "relative",
    marginBottom: "10px",
  },

  passwordInput: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },

  toggle: {
    position: "absolute",
    right: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    fontSize: "13px",
    color: "#2563eb",
    fontWeight: "bold",
  },

  btn: {
    width: "100%",
    padding: "12px",
    borderRadius: "30px",
    border: "none",
    background: "rgba(180, 188, 183, 0.25)",
    cursor: "pointer",
    marginTop: "12px",
    fontWeight: "bold",
  },

  error: {
    color: "#2dd213",
    fontSize: "13px",
    marginBottom: "8px",
  },

  bottomText: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "14px",
    color: "#e5e7eb",
  },

  link: {
    cursor: "pointer",
    color: "#2563eb",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};



