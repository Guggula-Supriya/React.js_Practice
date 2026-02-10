import { useState } from "react";

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const addProduct = () => {
    if (!name || !price) return;
    const newProduct = {
      id: Date.now(),
      name: name,
      price: price,
    };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  };
  const removeProduct = (id) => {
    const updatedList = products.filter( (product) => product.id !== id);
    setProducts(updatedList);
  };

  return (
    <>
      {/* ========== INTERNAL CSS ========== */}
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #0f172a;
          }

          .cart-container {
            width: 400px;
            margin: 60px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          }

          .cart-title {
            text-align: center;
            margin-bottom: 20px;
          }

          input {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
          }

          .add-btn {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 8px;
            background: #2563eb;
            color: white;
            font-size: 16px;
            cursor: pointer;
            margin-bottom: 15px;
          }

          .add-btn:hover {
            background: #1d4ed8;
          }

          ul {
            list-style: none;
            padding: 0;
          }

          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            margin-bottom: 10px;
            background: #f1f5f9;
            border-radius: 6px;
          }

          .delete-btn {
            border: none;
            background: transparent;
            cursor: pointer;
            font-size: 18px;
          }

          .empty {
            text-align: center;
            color: gray;
          }
        `}
      </style>

      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>

        {/* MANUAL INPUTS */}
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="add-btn" onClick={addProduct}>
          Add Product
        </button>

        {/* CONDITIONAL RENDERING */}
        {products.length === 0 ? (
          <p className="empty">No items in cart</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <span>
                  {product.name} – ₹{product.price}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => removeProduct(product.id)}>
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
