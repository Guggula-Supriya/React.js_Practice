import { useState, useEffect } from "react";
import bg from "../../images/images-1.jpeg";

function BankApp() {
  const [balance, setBalance] = useState(0);

  // ✅ MOUNTING (Show data after page load)
  useEffect(() => {
    console.log("Page Loaded - Fetching Balance");

    setTimeout(() => {
      setBalance(5000);
    }, 1000);

    // ✅ UNMOUNTING (Cleanup)
    return () => {
      console.log("Leaving Bank Page - Cleanup");
    };
  }, []); 

  // ✅ UPDATING (When balance changes)
  useEffect(() => {
    console.log("Balance Updated:", balance);
  }, [balance]);

  const pageStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const containerStyle = {
    width: "350px",
    padding: "25px",
    border: "2px solid black",
    textAlign: "center",
    backgroundColor: "white",
    transition: "0.3s",
  };

  const buttonStyle = {
    padding: "8px 15px",
    margin: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 15px black")}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none") }>
        <h2>🏦 My Bank</h2>
        <h3>Account Balance: ₹{balance}</h3>

        <button
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "green") }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "blue") }
          onClick={() => setBalance(balance + 1000)} >
          Deposit ₹1000
        </button>

        <button style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "red") }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "blue") }
          onClick={() => setBalance(balance - 500)} >
          Withdraw ₹500
        </button>
      </div>
    </div>
  );
}

export default BankApp;
