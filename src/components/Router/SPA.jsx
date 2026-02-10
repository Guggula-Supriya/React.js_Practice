import { Link, Outlet } from "react-router-dom";
import bgImage from "../../images/back.jpg";

export default function Layout() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h3 style={styles.title}>Menu</h3>

        <div style={styles.grid}>
          <Link to="/signup" style={styles.link}>Signup</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/forgotpassword" style={styles.link}>Forgot Password</Link>
          <Link to="profiles" style={styles.link}>Profiles</Link>
          <Link to="dashboard" style={styles.link}>Dashboard</Link>
          <Link to="products" style={styles.link}>Products</Link>
          <Link to="Notificationpage" style={styles.link}>NotificationPage</Link>
          <Link to="paymentform" style={styles.link}>PaymentForm</Link>
          <Link to="app" style={styles.link}>AppPage</Link>
          <Link to="contactform" style={styles.link}>Contact Form</Link>
          <Link to="feedback" style={styles.link}>Feedback</Link>
          <Link to="form" style={styles.link}>Forms</Link>
          <Link to="Inputbuttom" style={styles.link}>InputButtonExample</Link>
          <Link to="likebuttom" style={styles.link}>LikeButton</Link>
        </div>
        <div style={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    position: "fixed",
    inset: 0,
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  container: {
    width: "100vw",
    minHeight: "75vh",
    padding: "30px",
  },

  title: {
    textAlign: "center",
    color: "white",
    marginBottom: "50px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "15px",
    marginBottom: "25px",
  },

  link: {
    color: "#1e90ff",
    textDecoration: "underline",
    fontWeight: "900",
    textAlign: "center",
    padding: "6px",
  },

  content: {
    marginTop: "20px",
    color: "#da2323",
  },
};
