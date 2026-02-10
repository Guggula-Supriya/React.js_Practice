import { useState } from "react";

export default function PostsDashboard() {
  const [posts, setPosts] = useState([
    { id: 13, title: "Fusce massa lorem", date: "01/12/2012", comments: 0, published: true, views: 222 },
    { id: 12, title: "Qui tempore rerum", date: "07/11/2012", comments: 0, published: true, views: 719 },
  ]);

  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  /* ================= ADD / UPDATE ================= */
  const addOrUpdatePost = () => {
    if (!title.trim()) return;

    if (editId) {
      setPosts(
        posts.map((p) =>
          p.id === editId ? { ...p, title } : p
        )
      );
      setEditId(null);
    } else {
      setPosts([
        ...posts,
        {
          id: Date.now(),
          title,
          date: new Date().toLocaleDateString(),
          comments: 0,
          published: true,
          views: 0,
        },
      ]);
    }
    setTitle("");
  };

  /* ================= EDIT ================= */
  const editPost = (post) => {
    setTitle(post.title);
    setEditId(post.id);
  };

  /* ================= DELETE ================= */
  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  /* ================= SHOW ================= */
  const showPost = (post) => {
    alert(
      `Title: ${post.title}\nPublished: ${post.date}\nViews: ${post.views}`
    );
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Posts Management</h2>

      {/* ADD / EDIT FORM */}
      <div style={styles.form}>
        <input
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <button onClick={addOrUpdatePost} style={styles.primaryBtn}>
          {editId ? "Update Post" : "Add Post"}
        </button>
      </div>

      {/* TABLE */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Com.</th>
            <th>Views</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td><input type="checkbox" /></td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.date}</td>
              <td>{post.comments}</td>
              <td>{post.views}</td>
              <td>
                <button onClick={() => editPost(post)} style={styles.linkBtn}>
                  Edit
                </button>
                <button onClick={() => showPost(post)} style={styles.linkBtn}>
                  Show
                </button>
                <button onClick={() => deletePost(post.id)} style={styles.deleteBtn}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
    fontFamily: "Inter, Arial",
    background: "#f4f6f8",
    minHeight: "100vh",
  },

  heading: {
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  primaryBtn: {
    padding: "10px 18px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  table: {
    width: "100%",
    background: "#fff",
    borderCollapse: "collapse",
  },

  linkBtn: {
    marginRight: "8px",
    background: "none",
    border: "none",
    color: "#2563eb",
    cursor: "pointer",
  },

  deleteBtn: {
    background: "none",
    border: "none",
    color: "#dc2626",
    cursor: "pointer",
  },
};
