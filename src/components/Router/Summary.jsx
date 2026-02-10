import { useState } from "react";
import bg from "../../images/image-3.avif";

export default function Summary() {
  const [total] = useState(
    Number(localStorage.getItem("total")) || 50000
  );

  const pageStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px", 
  };

  const boxStyle = {
    border: "2px solid black",
    padding: "25px",
    width: "300px",
    backgroundColor: "white",
    margin: "120px auto",
  };

  return (
    <div style={pageStyle}>
        <div style={boxStyle}>
            <h2>Account Summary</h2>
            <p><b>Name:</b> User</p>
            <p><b>Account No:</b> **** 2222</p>
            <p><b>Status:</b> Active</p>
            <p><b>Total Balance:</b> ₹ {total}</p>
        </div>
    </div>
  );
}
