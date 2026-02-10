import React, { useEffect, useState } from "react";
import axios from "axios";

const USER_API = "https://jsonplaceholder.typicode.com/posts";

function UserPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true); // start loading

        const response = await axios.get(USER_API);
        setUsers(response.data); // store API data

      } catch (err) {
        setError("Failed to fetch data");
        console.log(err);

      } finally {
        setLoading(false); // stop loading
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Post IDs with Titles</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map((item) => (
          <li
            key={item.id}
            style={{
              backgroundColor: "#d1e7ff",
              margin: "8px",
              padding: "10px",
              borderRadius: "6px",
              fontWeight: "bold",
              listStyle: "none",
            }}
          >
            <span style={{ color: "red" }}>ID:</span> {item.id} <br />
            <span style={{ color: "green" }}>Title:</span> {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
