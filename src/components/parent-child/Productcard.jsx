import { useState } from "react";

export default function ProductCard({ product, increaseCart, decreaseCart }) {
  const [qty, setQty] = useState(0);
  const [hover, setHover] = useState(false);

  const add = () => {
    setQty(qty + 1);
    increaseCart();
  };

  const remove = () => {
    if (qty > 0) {
      setQty(qty - 1);
      decreaseCart();
    }
  };

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
      />

      <h4 style={styles.title}>{product.name}</h4>
      <p style={styles.desc}>{product.desc}</p>

      <div style={styles.footer}>
        <strong>₹{product.price}</strong>

        <div style={styles.controls}>
          <button onClick={remove} style={styles.btn}>
            −
          </button>
          <span>{qty}</span>
          <button onClick={add} style={styles.btn}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "210px",
    background: "#ffffff",
    color: "#111827",
    borderRadius: "12px",
    padding: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.22)",
    alignSelf: "flex-start",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  cardHover: {
    transform: "translateY(-10px) scale(1.05)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
  },

  image: {
    width: "100%",
    height: "105px",
    objectFit: "contain",
    borderRadius: "8px",
    marginBottom: "4px",
    transition: "transform 0.3s ease",
  },

  title: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "2px",
  },

  desc: {
    fontSize: "12px",
    color: "#374151",
    lineHeight: "1.2",
    marginBottom: "4px",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  controls: {
    display: "flex",
    gap: "6px",
    alignItems: "center",
  },

  btn: {
    width: "22px",
    height: "22px",
    borderRadius: "4px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    fontSize: "13px",
  },
};
