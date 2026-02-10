import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // ✅ READ (GET)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/posts");
        setPosts(res.data);
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // ✅ CREATE (POST)
  const addPost = async () => {
    try {
      await axios.post("http://localhost:3000/posts", {
        title,
        body
      });

      setTitle("");
      setBody("");

      // refresh list
      const res = await axios.get("http://localhost:3000/posts");
      setPosts(res.data);
    } catch (error) {
      console.log("Error adding post:", error);
    }
  };

  // ✅ DELETE
  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);

      // refresh list
      const res = await axios.get("http://localhost:3000/posts");
      setPosts(res.data);
    } catch (error) {
      console.log("Error deleting post:", error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
     

      <div style={{ margin: "20px" }}>
        <h2>Posts</h2>

        {/* ADD FORM */}
        <h3>Add New Post</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br /><br />

        <button onClick={addPost}>Add Post</button>

        <hr />

        {/* LIST */}
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <Link to={`/posts/${post.id}`}>View</Link>{" "}
                  <button onClick={() => deletePost(post.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Posts;
