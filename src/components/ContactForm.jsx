import { useState } from "react";
import bgImage from "../assets/background-image.jpg";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [cardHover, setCardHover] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = () => { if (!form.name || !form.email || !form.message) { // Show Content 
      setError(true); // Show
      return;
    }
    setError(false); // Hide 
    setSubmitted(true); // hide form, Show success
  };
  const reset = () => {
    setForm({ name: "", email: "", message: "" });
    setError(false); // Hide
    setSubmitted(false); // show form again
  };

  return (
    <div style={styles.page}>
      {/* BACKGROUND IMAGE */}
      <img src={bgImage} alt="" style={styles.bgImg} />

      {/* FORM CARD */}
      <div style={{...styles.container,
          transform: cardHover ? "scale(1.05) translateY(-6px)" : "scale(1)", 
          boxShadow: cardHover ? "0 16px 40px rgba(0,0,0,0.35)" : styles.container.boxShadow, 
          transition: "all 0.4s ease",
        }}
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}>
        {!submitted ? ( // conditional rendering using the ternary operator
          <>
            <h2>Contact Us</h2>

            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={onChange}
              style={styles.input}
            />

            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={onChange}
              style={styles.input}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={onChange}
              style={styles.textarea}
            />

            {error && (  // Conditional Rendering with Logical And
              <div style={styles.error}>
                Please add details
              </div>
            )}

            <button
              onClick={onSubmit}
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              style={{...styles.btn,
                background: btnHover ? "#1d4ed8" : "#007bff", 
                transform: btnHover ? "scale(1.07) translateY(-2px)" : "scale(1)",
                boxShadow: btnHover ? "0 8px 20px rgba(0,0,0,0.3)" : "0 4px 10px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease", }} >
              Submit
            </button>
          </>
        ) : (
          <>
            <h2 style={styles.successTitle}>
              Contact Details Submitted
            </h2>

            <div style={styles.another}
              onClick={reset} >
              Add another response
            </div>
          </>)}
      </div>
    </div>
  );
}

/* 🔹 INLINE OBJECT STYLES */
const styles = {
  page: {
    position: "fixed",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  bgImg: {
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },

  container: {
    width: "320px",
    padding: "25px",
    background: "rgba(184,170,240,0.9)",
    borderRadius: "12px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    textAlign: "center",
  },

  input: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },

  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    height: "80px",
    resize: "none",
  },

  btn: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },

  error: {
    color: "#b91c1c",
    fontSize: "14px",
    textAlign: "left",
  },

  successTitle: {
    color: "#111827",
    fontSize: "18px",
  },

  another: {
    color: "#1e40af",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "14px",
    marginTop: "6px",
  },
};
