import { useState } from "react";
import ProductCard from "./ProductCard";

import headphones from "../../images/p1.jpg";
import wallet from "../../images/p2.jpg";
import lamp from "../../images/p3.jpg";
import dress from "../../images/dress.jpg";
import chain from "../../images/chain.jpg";
import jeans from "../../images/jeans.jpg";
import bgImage from "../../images/back.jpg";

export default function Products() {
  // 🔹 LIFTED STATE
  const [cartCount, setCartCount] = useState(0);

  // 🔹 SIDEBAR STATE
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 🔹 PRODUCTS DATA (normalized categories)
  const products = [
    {
      id: 1,
      name: "Bluetooth Headphones",
      desc: "Noise cancelling • 30hr battery",
      price: 2499,
      image: headphones,
      category: "electronics",
    },
    {
      id: 2,
      name: "Classic Leather Wallet",
      desc: "Slim • RFID safe",
      price: 799,
      image: wallet,
      category: "womens-fashion",
    },
    {
      id: 3,
      name: "LED Desk Lamp",
      desc: "Adjustable brightness • USB",
      price: 1799,
      image: lamp,
      category: "home",
    },
    {
      id: 4,
      name: "Women's Georgette Solid Anarkali Dress",
      desc:
        "Material: Georgette • Occasion: Wedding • Sleeve: Full Sleeve • Style: Fit & Flare",
      price: 1477,
      image: dress,
      category: "womens-fashion",
    },
    {
      id: 5,
      name: "Gold Plated Chain",
      desc: "Pink & Green Beads Design Chain",
      price: 850,
      image: chain,
      category: "womens-fashion",
    },
    {
      id: 6,
      name: "Women Washed Skinny Fit Jeans",
      desc: "Model wears size 28 • Height 5'7\"",
      price: 499,
      image: jeans,
      category: "womens-fashion",
    },
  ];

  // 🔹 FILTER LOGIC
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (item) => item.category === selectedCategory
        );

  // 🔹 CART FUNCTIONS
  const increaseCart = () => setCartCount(cartCount + 1);
  const decreaseCart = () =>
    cartCount > 0 && setCartCount(cartCount - 1);

  return (
    <div style={styles.page}>
      {/* 🔹 TOP NAVBAR */}
      <div style={styles.navbar}>
        <h2>MyStore</h2>
        <span>Cart: {cartCount}</span>
      </div>

      <div style={styles.main}>
        {/* 🔹 SIDEBAR */}
        <div style={styles.sidebar}>
          <h3>Categories</h3>

          <button
            style={styles.button}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>

          <button
            style={styles.button}
            onClick={() => setSelectedCategory("electronics")}
          >
            Electronics
          </button>

          <button
            style={styles.button}
            onClick={() => setSelectedCategory("womens-fashion")}
          >
            Women’s Fashion
          </button>

          <button
            style={styles.button}
            onClick={() => setSelectedCategory("home")}
          >
            Home Decor
          </button>
        </div>

        {/* 🔹 PRODUCTS AREA */}
        <div style={styles.products}>
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              increaseCart={increaseCart}
              decreaseCart={decreaseCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    overflow: "hidden",
    color: "#fff",
    position: "fixed",
    inset: 0,
  },

  navbar: {
    height: "60px",
    padding: "0 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#0f172a",
    fontWeight: "bold",
  },

  main: {
    display: "flex",
    height: "calc(100vh - 60px)",
  },

  sidebar: {
    width: "260px",
    padding: "20px",
    background: "#020617",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    flexShrink: 0,
    overflow: "hidden",
  },

  button: {
    padding: "8px 4px",
    background: "transparent",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "15px",
  },

  products: {
    flex: 1,
    padding: "30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "32px",
    height: "calc(100vh - 60px)",
    overflowY: "auto",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
};
