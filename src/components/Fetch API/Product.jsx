import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hasRetried, setHasRetried] = useState(false);

  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem("cart")) || {}
  );

  // API call on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      // ❌ First time force error (to show Retry)
      if (!hasRetried) {
        setError("Network error. Tap to retry");
        setLoading(false);
        return;
      }

      axios
        .get("http://localhost:3000/products")
        .then(res => setProducts(res.data))
        .catch(() => setError("Network error. Tap to retry"))
        .finally(() => setLoading(false));
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasRetried]);

  // Retry function
  const loadProducts = () => {
    setHasRetried(true);
    setLoading(true);
    setError("");
  };

  // SAVE CART
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const increaseQty = (p) => {
    setCart(prev => ({
      ...prev,
      [p.id]: (prev[p.id] || 0) + 1
    }));
  };

  const decreaseQty = (p) => {
    setCart(prev => {
      const qty = prev[p.id] || 0;
      if (qty <= 1) {
        const copy = { ...prev };
        delete copy[p.id];
        return copy;
      }
      return { ...prev, [p.id]: qty - 1 };
    });
  };

  // define filteredProducts
  const filteredProducts =
    category === "all" ? products : products.filter(p => p.category === category);

  // LOADER UI
  if (loading)
    return (
      <div style={styles.loaderStyle}>
        <img src="/images/loading.gif" alt="Loading..." width="50%" />
        <p>Loading products...</p>
      </div>
    );

  // ERROR UI + RETRY
  if (error)
    return (
      <div style={styles.loaderStyle}>
        <h2>{error}</h2>
        <button onClick={loadProducts}>Tap to Retry</button>
      </div>
    );

  return (
    <div style={styles.page}>
      <div style={styles.navbar}>
        <h2>MyStore</h2>
        <span>🛒 Cart ({totalItems})</span>
      </div>

      <div style={styles.main}>
        <div style={styles.sidebar}>
          <h3>Categories</h3>
          <button style={styles.button} onClick={() => setCategory("all")}>All</button>
          <button style={styles.button} onClick={() => setCategory("electronics")}>Electronics</button>
          <button style={styles.button} onClick={() => setCategory("Womens Fashion")}>Women’s Fashion</button>
          <button style={styles.button} onClick={() => setCategory("Home Decor")}>Home Decor</button>
        </div>

        <div style={styles.products}>
          {filteredProducts.map(p => (
            <div key={p.id} style={styles.card}>
              <Link to={`/product/${p.id}`} style={{ textDecoration: "none", color: "black" }}>
                <img src={p.image} alt={p.name} style={styles.img} />
              </Link>

              <div style={styles.priceRow}>
                <strong>₹{p.price}</strong>
                <div style={styles.qtyBox}>
                  <button style={styles.qtyBtn} onClick={() => decreaseQty(p)}>-</button>
                  <span>{cart[p.id] || 0}</span>
                  <button style={styles.qtyBtn} onClick={() => increaseQty(p)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;

const styles = {
  loaderStyle: {
    height: "100vh",
    position: "fixed",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    background: "black"
  },

  page: { minHeight: "100vh", color: "#fff", position: "fixed", inset: 0 },

  navbar: {
    height: "60px",
    padding: "0 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#0f172a",
  },

  main: { display: "flex", height: "calc(100vh - 60px)" },

  sidebar: {
    width: "260px",
    padding: "20px",
    background: "#020617",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  button: {
    background: "transparent",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
  },

  products: {
    flex: 1,
    padding: "30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    overflowY: "auto",
    backgroundImage: "url('/images/back.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  card: {
    width: "200px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "white",
    color: "black",
    borderRadius: "10px",
    padding: "10px",
  },

  img: {
    width: "100%",
    height: "140px",
    objectFit: "contain",
  },

  priceRow: {
    display: "flex",
    justifyContent: "space-between",
  },

  qtyBox: { display: "flex", gap: "8px", alignItems: "center" },

  qtyBtn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "2px 8px",
    cursor: "pointer"
  }
};
