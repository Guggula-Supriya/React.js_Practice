import { useState } from "react";

export default function InputButtonExample() {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    console.log(text);
    setText("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.center}>
        <input
          type="text"
          placeholder="Type here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.input}
        />

        <button style={styles.btn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    position: "fixed",
    backgroundColor: "#565050",
    inset: 0,
    margin: 0,
    overflow: "hidden",     
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  center: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    transform: "scale(1.2)", 
  },

  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },

  btn: {
    padding: "10px 20px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
};
