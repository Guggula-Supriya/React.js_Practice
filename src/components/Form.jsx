import { useState } from 'react';
import bgImage from "../assets/background-image.jpg";

function Forms() {
  const [show, setShow] = useState(false);  // Show / Hide Logic
  const [hover, setHover] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div style={styles.page}>

      <div style={{...styles.container,
          transform: hover ? "scale(1.05)" : "scale(1)",
          boxShadow: hover ? "0 20px 40px rgba(0,0,0,0.5)" : "0 10px 20px rgba(0,0,0,0.3)",
          // background: hover ? "#6b21a8" : "purple",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <h2>Forms</h2>
        {/* PASSWORD INPUT WITH EYE */}
        <div style={styles.passwordWrapper}>
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Enter password"
            style={styles.input}
          />

          <span
            style={styles.eye}
            onClick={() => setShowPwd(!showPwd)}
          >
            {showPwd ? "🙈" : "👁️"}
          </span>
        </div>
      {/* Button to show/hide */}
      <button style={styles.button} onClick={() => setShow(!show)}>
        {show ? "Hide message" : "Show message"} 
      </button>

      {/*Conditional rendering*/}
      {show && ( <div style={styles.message}> Welcome to React. </div>)}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh", 
    backgroundImage: `url(${bgImage})`,         
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",   
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",    
    alignItems: "center",  
    position: "fixed",
    inset: 0,
  },
  passwordWrapper: {
  position: "relative",   // 👈 REQUIRED
  width: "100%",
},

  container: {
    background: "purple",
    padding: "25px",
    width: "300px",
    borderRadius: "18px",
    display: "flex",
    gap: "20px",
    flexDirection: "column",
    textAlign: "center",
    cursor: "pointer",             
    transition: "all 0.3s ease", 
  },
  input: {
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize:"16px",
  },
  button: {
    padding: "20px 40px",
    fontSize: "18px",
    borderRadius: "12px",
    backgroundColor: "#06f47dff",
    border: "none",
    cursor: "pointer",
    color: "navy",
    transition: "all 0.3s ease",
  },
  message: {
    marginTop: "20px",
    color: "blue",
    fontSize: "20px",
  }
};

export default Forms;