import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#eee", height: "100vh" }}>
      <h3>Admin</h3>
      <Link to="/">Dashboard</Link><br/>
      <Link to="/posts">Posts</Link>
    </div>
  );
}

export default Sidebar;
