import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <button
          style={{ ...styles.btn, ...styles.like }}
          onClick={() => setCount(count + 1)}
        >
          ❤️ Like
        </button>

        <button
          style={{ ...styles.btn, ...styles.unlike }}
          onClick={() => count > 0 && setCount(count - 1)}
        >
          💔 Unlike
        </button>

        <p style={styles.count}>{count} Likes</p>
      </div>
    </div>
  );
}

const styles = {
  // ✅ FULL SCREEN BLACK BACKGROUND
  page: {
    minHeight: "100vh",
    position: "fixed",
    inset: 0,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    textAlign: "center",
  },

  btn: {
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    margin: "20px",
    color: "white",
  },

  like: {
    backgroundColor: "blue",
  },

  unlike: {
    backgroundColor: "gray",
  },

  count: {
    marginTop: "20px",
    fontSize: "18px",
    color: "white", // ✅ visible on black
  },
};
