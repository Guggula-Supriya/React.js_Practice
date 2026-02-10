import { useState } from "react";
import bgImage from "../assets/wide-angle.jpg";

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false); // Show/Hide
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {    // Show/Hide + validation
    if (Object.values(form).some((v) => !v)) {
      setError("❌ Please fill all fields");
      return;
    }
    setError(""); 
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ firstName: "", lastName: "", email: "", message: "" });
    setSubmitted(false); 
  };

  return (
    <>
    {/*Internal CSS inside JSX*/}
      <style>{`
        body { margin: 0; font-family: Arial; }

        .page {
          position: fixed;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url(${bgImage}) center / cover;
        }

        .card {
          width: 420px;
          padding: 40px;
          background: rgba(101,68,179,.9);
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(0,0,0,.3);
          transition: .3s;
        }

        .card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 16px 40px rgba(0,0,0,.45);
        }

        .form { display: flex; flex-direction: column; gap: 16px; }

        h2 { color: #fff; }

        input, textarea {
          padding: 14px;
          border-radius: 8px;
          border: 1px solid #fbf4f4ff;
          font-size: 16px;
          transition: .3s;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: #000;
          box-shadow: 0 0 0 2px rgba(37,99,235,.3);
        }

        textarea { height: 100px; resize: none; }

        button {
          padding: 12px;
          background: #1057f1;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: .25s;
        }

        button:hover {
          background: #1e40af;
          transform: scale(1.05);
        }

        .error { color: #ffdada; font-size: 14px; }
        .success { color: #22c55e; font-size: 22px; text-align: center; }

        .another {
          margin-top: 12px;
          color: #bfdbfe;
          cursor: pointer;
          text-decoration: underline;
        }

        .another:hover { color: #fff; }
      `}</style>

      <div className="page">
        <div className="card">
          {!submitted ? (   // CONDITIONAL RENDERING + Ternary Operator 
            <div className="form">
              <h2>Feedback</h2>
              {["firstName", "lastName", "email"].map((f) => (
                <input
                  key={f}
                  name={f}
                  placeholder={f.replace(/([A-Z])/g, " $1")}
                  value={form[f]}
                  onChange={onChange}
                />
              ))}
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={onChange}
              />
              {error && <div className="error">{error}</div>}   {/* Logical AND */}
              <button onClick={submit}>Submit</button>
            </div>
          ) : (
            <div className="success">
              ✅ Feedback Submitted
              <div className="another" onClick={reset}>
                Add another response
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
