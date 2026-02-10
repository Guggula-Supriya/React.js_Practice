import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    backgroundColor: "#2f2f2f",
    padding: "20px",
    display: "flex",
    justifyContent: "flex-start", 
    gap: "35px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "underline",
    fontSize: "18px",
    fontWeight: "600",
  };

  return (
    <div style={navStyle}>
      <Link to="/withdraw" style={linkStyle}>Withdraw</Link>
      <Link to="/summary" style={linkStyle}>Summary</Link>
      <Link to="/history" style={linkStyle}>History</Link>
    </div>
  );
};
