/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem("cart")) || {}
  );

  // 🔹 Fetch product
  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`http://localhost:3000/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(() => setError("Network error. Tap to retry"))
      .finally(() => setLoading(false));
  }, [id]);

  // 🔹 Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const retryFetch = () => {
    setProduct(null);
    setError("");
    setLoading(true);

    fetch(`http://localhost:3000/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(() => setError("Network error. Tap to retry"))
      .finally(() => setLoading(false));
  };

  if (loading)
    return (
      <div style={styles.loaderStyle}>
        <img src="/images/loading.gif" alt="Loading..." width="50%" />
        <p>Loading product...</p>
      </div>
    );

  if (error && !product)
    return (
      <div style={styles.loaderStyle}>
        <h2>{error}</h2>
        <button onClick={retryFetch}>Tap to Retry</button>
      </div>
    );

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const add = () => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const remove = () => {
    setCart(prev => {
      const qty = prev[id] || 0;
      if (qty <= 1) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: qty - 1 };
    });
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <div style={styles.navbar}>
        <h2>MyStore</h2>
        <span>🛒 Cart ({totalItems})</span>
      </div>

      {/* MAIN SECTION */}
      <div style={styles.main}>

        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          <h3>Categories</h3>
          <Link to="/" style={styles.button}>All</Link>
          <Link to="/" style={styles.button}>Electronics</Link>
          <Link to="/" style={styles.button}>Women’s Fashion</Link>
          <Link to="/" style={styles.button}>Home Decor</Link>
        </div>

        {/* RIGHT CONTENT */}
        <div style={styles.detailWrapper}>

          <button 
            onClick={() => navigate("/")} 
            style={styles.backBtn}
          >
            ← Back
          </button>

          <div style={styles.products}>
            <div style={styles.detailCard}>
              <img src={product.image} alt={product.name} style={styles.img} />
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
              <p><b>Category:</b> {product.category}</p>

              <div style={styles.priceRow}>
                <h3>₹{product.price}</h3>
                <div style={styles.controls}>
                  <button onClick={remove} style={styles.btn}>−</button>
                  <span>{cart[id] || 0}</span>
                  <button onClick={add} style={styles.btn}>+</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

/* ================= STYLES ================= */

const styles = {
  loaderStyle: {
    position: "fixed",
    inset: 0,
    background: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  page: {
    minHeight: "100vh",
    color: "#fff",
    position: "fixed",
    inset: 0
  },

  navbar: {
    height: "60px",
    padding: "0 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#0f172a"
  },

  main: {
    display: "flex",
    height: "calc(100vh - 60px)"
  },

  sidebar: {
    width: "260px",
    padding: "20px",
    background: "#020617",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  button: {
    background: "transparent",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    textDecoration: "none"
  },

  detailWrapper: {
    flex: 1,
    padding: "30px",
    backgroundImage: "url('/images/back.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column"
  },

  backBtn: {
    alignSelf: "flex-start",
    marginBottom: "20px",
    background: "#1e293b",
    color: "#fff",
    border: "none",
    padding: "6px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  products: {
    display: "flex",
    justifyContent: "center"
  },

  detailCard: {
    width: "400px",
    background: "white",
    color: "black",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center"
  },

  img: {
    width: "100%",
    height: "220px",
    objectFit: "contain"
  },

  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px"
  },

  controls: {
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },

  btn: {
    width: "28px",
    height: "28px",
    borderRadius: "5px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px"
  }
};
