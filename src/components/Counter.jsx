import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h2>Count: {count}</h2>

      <div style={styles.btnGroup}>
        <button
          style={{ ...styles.btn, backgroundColor: "green" }}
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>

        <button
          style={{ ...styles.btn, backgroundColor: "red" }}
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>

        <button
          style={{ ...styles.btn, backgroundColor: "blue" }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "10px",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
    marginBottom: "25px",
  },
  btn: {
    padding: "10px 18px",
    border: "none",
    color: "white",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Counter;
