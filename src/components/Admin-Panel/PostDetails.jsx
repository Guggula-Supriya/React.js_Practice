import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function PostDetails() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // READ SINGLE
  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setBody(res.data.body);
      });
  }, [id]);

  // UPDATE (PUT)
  const updatePost = async () => {
    await axios.put(`http://localhost:3000/posts/${id}`, {
      title,
      body
    });
    alert("Post Updated!");
  };

  return (
    <div style={{ display: "flex" }}>

      <div style={{ margin: "20px" }}>
        <Link to="/posts">⬅ Back</Link>

        <h3>Edit Post</h3>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br /><br />

        <button onClick={updatePost}>Update Post</button>
      </div>
    </div>
  );
}

export default PostDetails;
