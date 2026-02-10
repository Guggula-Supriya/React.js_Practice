import { useState } from "react";
import bg from "../../assets/background-image.jpg";

export default function Todolist() {
  const [text, setText] = useState("");            // Input State
  const [tasks, setTasks] = useState([]);          // Task List / Dynamic List
  const [showList, setShowList] = useState(true);  // Show / hide list state
  const [editId, setEditId] = useState(null);
  const [hover, setHover] = useState(false);
  // 🔹 Alphabetical sort helper
  const sortByName = (arr) =>
    arr.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );

  const addTask = () => {
    if (!text.trim()) return;

    if (editId) {
      const updatedTasks = tasks.map((t) =>
        t.id === editId ? { ...t, name: text } : t
      );

      setTasks(sortByName([...updatedTasks]));
      setEditId(null);
    } else {
      const newTasks = [ ...tasks,
        { id: Date.now(), name: text },
      ];

      setTasks(sortByName([...newTasks]));
    }

    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (task) => {
    setText(task.name);
    setEditId(task.id);
  };

  return (
    <div style={styles.page(bg)}>
      <div style={{...styles.card, transform: hover ? "scale(1.03)" : "scale(1)",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h1 style={styles.title}>TO_DO_LIST</h1>

        <input style={styles.input}               // Controlled Inputs
          placeholder="add item..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button style={styles.addBtn} onClick={addTask}>
          {editId ? "UPDATE" : "ADD"}            {/* Conditional rendering using ternary operator*/}
        </button>

        <button style={styles.toggleBtn}
          onClick={() => setShowList(!showList)}
        >
          {showList ? "Hide List" : "Show List"}
        </button>
        {/* Conditional rendering */}
        {showList && (               
          <div style={styles.listBox}>
            {tasks.map((task) => (
              <div key={task.id} style={styles.taskRow}>
                <span>{task.name}</span>
                <div>
                  <button
                    style={styles.actionBtn}
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    style={styles.actionBtn}
                    onClick={() => editTask(task)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
// Inline Styling
const styles = {
  page: (bgi) => ({
    height: "100vh",
    position: "fixed",
    inset: 0,
    backgroundImage: `url(${bgi})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  card: {
    width: "520px",
    padding: "25px",
    background: "rgba(0,0,0,0.55)",
    borderRadius: "14px",
    color: "#fff",
    transition: "0.4s ease",
  },

  title: {
    fontSize: "40px",
    fontWeight: "800",
    background: "linear-gradient(90deg, #6366f1, #22c55e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
    letterSpacing: "2px",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    marginBottom: "12px",
  },

  addBtn: {
    background: "#111",
    color: "#fff",
    padding: "8px 18px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
  },

  toggleBtn: {
    background: "#2563eb",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },

  listBox: {
    marginTop: "20px",
    border: "1px solid #9ca3af",
  },

  taskRow: {
    background: "#d1d5db",
    color: "#000",
    padding: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #9ca3af",
    transition: "0.3s",
  },

  actionBtn: {
    marginLeft: "8px",
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },
};
