import React, { useEffect, useState } from "react";

const USER_API = "https://jsonplaceholder.typicode.com/posts";

function UserDetails() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(USER_API);

        // check HTTP error
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("Fetched Data:", data); // 👈 check in console

        setUsers(data);
      } catch (err) {
        console.log("Fetch error:", err);
        setError("API not reachable");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Post IDs with Titles (Fetch API)</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.map((item) => (
        <div key={item.id} style={styles.card}>
          <p style={styles.id}>ID: {item.id}</p>
          <p style={styles.title}>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default UserDetails;

const styles = {
  container: {
    maxWidth: "700px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  card: {
    backgroundColor: "#f4f8ff",
    padding: "12px",
    marginBottom: "10px",
    borderLeft: "6px solid #0d6efd",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  id: {
    color: "#d63384",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  title: {
    color: "#212529",
  },
};
