import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <h1>Dashboard</h1>

      <h3>Task-01</h3>
      <p>HTML Login page</p>
      <p>Difference Between Java, .NET and JavaScript</p>

      <h3>Task-02</h3>
      <p>What is React?</p>
      <p>SPA Concept, Virtual DOM</p>
      <p>HTML vs SPA</p>
      <p>Virtual DOM vs Real DOM</p>

      <h3>Task-03</h3>
      <p>VS Code, Node.js, npm</p>
      <p>Create React Project</p>

      <h3>Task-04</h3>
      <p>JSX Basics</p>
      <p>Components</p>
      <p>JS vs JSX</p>

      <h3>Task-05 to Task-22</h3>
      <p>State, Props, Styling, Forms, Lists, Lifting State Up</p>

      <h3>Task-23</h3>
      <p>React Router: Routes, Links, 3-page Navigation</p>

      <button onClick={() => navigate("/login")}>Logout</button>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    lineHeight: "1.8",
  },
};
