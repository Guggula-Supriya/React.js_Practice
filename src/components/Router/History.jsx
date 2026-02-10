import { useState } from "react";
import bg from "../../images/image-3.avif";

export default function History() {
  const [history] = useState(
    JSON.parse(localStorage.getItem("history")) || []
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
    flexDirection: "column",   
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "70px",
  };

  const tableStyle = {
    width: "80%",
    margin: "40px auto",
    borderCollapse: "collapse",
    textAlign: "center",
  };

  const cellStyle = {
    border: "1px solid white",
    padding: "8px",
    color: "white",
  };

  return (
    <div style={pageStyle}>
      <h2 style={{ textAlign: "center", color: "white", marginTop: "20px", }}>History</h2>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>#</th>
            <th style={cellStyle}>Type</th>
            <th style={cellStyle}>Amount</th>
            <th style={cellStyle}>Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td style={cellStyle}>{index + 1}</td>
              <td style={cellStyle}>{item.type}</td>
              <td style={cellStyle}>₹ {item.money}</td>
              <td style={cellStyle}>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
