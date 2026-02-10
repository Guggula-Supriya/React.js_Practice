import { useState } from "react";
import bg from "../../images/image-3.avif";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(
    Number(localStorage.getItem("total")) || 50000
  );

  const pageStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex", 
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "5px",
  };

  const boxStyle = {
    border: "2px solid black",
    padding: "30px",
    width: "300px",
    textAlign: "center",
    backgroundColor: "white",
  };

  const inputStyle = {
  width: "220px",     
  padding: "8px",   
  marginTop: "10px",
};


  const buttonStyle = {
    marginTop: "15px",
    padding: "8px 15px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
  };

  function handleWithdraw() {
    const value = Number(amount);
    if (!value) return;

    const newTotal = total - value;
    setTotal(newTotal);
    localStorage.setItem("total", newTotal);

    const oldHistory = JSON.parse(localStorage.getItem("history")) || [];
    const newHistory = [...oldHistory, { type: "Withdraw", money: value, time: new Date().toLocaleString() }, ];
    localStorage.setItem("history", JSON.stringify(newHistory));
    setAmount("");
  }

  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        <h2 style={{ textAlign: "center", color: "black", marginBottom: "20px" }}>Withdraw</h2>
        <p><b>Total:</b> ₹ {total}</p>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          style={inputStyle}
        />

        <br />
        <button style={buttonStyle} onClick={handleWithdraw}>
          Withdraw
        </button>
      </div>
    </div>
  );
}
