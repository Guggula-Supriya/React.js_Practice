import Counter from "./Counter";
import MyGraph from "./MyGraph";

export default function Dashboard() {
  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h1 style={styles.title}>My Project Dashboard</h1>

        <Counter />
        <MyGraph />
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#092744",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    inset: 0,
  },

  box: {
    background: "#fff",
    padding: "25px",          
    borderRadius: "16px",
    width: "480px",           
    maxHeight: "80vh",        
    overflowY: "auto",        
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",     
  },
};
