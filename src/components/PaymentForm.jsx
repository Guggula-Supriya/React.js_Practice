import { useState } from "react";

export default function PaymentForm() {
  const [form, setForm] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const [paid, setPaid] = useState(false);
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverCard, setHoverCard] = useState(false);
  const onChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value });};
  const isValid = form.number && form.name && form.expiry && form.cvc;

  return (
    <div style={styles.page}>
      <div style={{...styles.form,
          transform: hoverCard ? "scale(1.03)" : "scale(1)",
          boxShadow: hoverCard ? "0 25px 50px rgba(0,0,0,.35)" : "0 20px 40px rgba(0,0,0,.25)",
        }}
        onMouseEnter={() => setHoverCard(true)}
        onMouseLeave={() => setHoverCard(false)}
      >
        {/* CONDITIONAL RENDERING */}
        {!paid ? (
          <>
            <h2 style={styles.heading}>Payment Details</h2>

            <input
              type="text"
              autoComplete="off"
              inputMode="numeric"
              style={styles.input}
              name="number"
              placeholder="Card Number"
              value={form.number}
              onChange={onChange}
            />

            <input
              type="text"
              autoComplete="off"
              inputMode="numeric"
              style={styles.input}
              name="name"
              placeholder="Card Holder Name"
              value={form.name}
              onChange={onChange}
            />

            <div style={styles.row}>
              <input
                type="text"
                autoComplete="off"
                inputMode="numeric"
                style={{ ...styles.input,  width: "50px", flex: 2 }}
                name="expiry"
                placeholder="MM / YY"
                value={form.expiry}
                onChange={onChange}
              />

              <input
                type="text"
                autoComplete="off"
                inputMode="numeric"
                style={{ ...styles.input,  width: "50px", flex: 1 }}
                name="cvc"
                placeholder="CVC"
                value={form.cvc}
                onChange={onChange}
              />
            </div>
            <button
              style={{...styles.button,
                opacity: isValid ? 1 : 0.6,
                cursor: isValid ? "pointer" : "not-allowed",
                transform: hoverBtn ? "scale(1.06)" : "scale(1)",
                background: hoverBtn ? "#1f2937" : "#111827",
              }}
              disabled={!isValid}
              onClick={() => setPaid(true)}
              onMouseEnter={() => setHoverBtn(true)}
              onMouseLeave={() => setHoverBtn(false)}
            >
              Pay Now
            </button>
          </>
        ) : (
          <h2 style={styles.success}>✅ Payment Successful</h2>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "fixed",
    inset: 0,
    background: "#76a337ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },

  form: {
    width: "360px",
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    transition: "0.3s ease",
  },

  heading: {
    textAlign: "center",
    marginBottom: "10px",
    color: "black",
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
  },

  row: {
    display: "flex",
    gap: "12px",
    width: "100%",
  },

  button: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    transition: "0.3s ease",
  },

  success: {
    color: "#16a34a",
    fontSize: "24px",
    textAlign: "center",
  },
};
