import { useEffect, useState } from "react";

export default function AppTask() {
  const [page, setPage] = useState("add");
  const [hover, setHover] = useState(false);
  const [editId, setEditId] = useState(null);
  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [form, setForm] = useState({
    TaskName: "",
    projectName: "",
    purpose: "",
    reference: "",
  });
  useEffect(() => { localStorage.setItem("tasks", JSON.stringify(tasks));}, [tasks]);
  const sidebar = ["add", "list", "about"];
  const fields = ["TaskName", "projectName", "purpose"];
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => { if (!form.TaskName.trim()) return alert("Task Name required");
    const updatedTasks = editId ? tasks.map((t) => (t.id === editId ? { ...form, id: editId } : t)) : [...tasks, { ...form, id: Date.now() }];
    setTasks(updatedTasks);
    
  };
  const edit = (task) => {setForm({ TaskName: "", projectName: "", purpose: "", reference: "" });
    setEditId(null);
    setPage("list");
    setForm(task);
    setEditId(task.id);
    setPage("add");
  };
  const remove = (id) =>
    setTasks(tasks.filter((t) => t.id !== id));
  return (
    <div style={styles.page}>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <h4 style={styles.sidebarTitle}>CONTROLS</h4>
        {sidebar.map((p) => (
          <div
            key={p}
            onClick={() => setPage(p)}
            style={{ ...styles.sidebarItem,
              background: page === p ? "#e0edff" : "#f9fafb",
            }}
          >
            {p === "add" ? "Add Task" : p === "list" ? "Task List" : "About"}
          </div>
        ))}
      </aside>

      {/* MAIN */}
      <main style={styles.main}>
        {page === "add" && (
          <>
            <h1>{editId ? "Edit Task" : "Add Task"}</h1>

            {fields.map((f) => (
              <div key={f} style={styles.row}>
                <label style={styles.label}>
                  {f.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  name={f}
                  value={form[f]}
                  onChange={onChange}
                  style={styles.input}
                />
              </div>
            ))}

            <div style={styles.row}>
              <label style={styles.label}>Reference</label>
              <textarea
                name="reference"
                value={form.reference}
                onChange={onChange}
                style={styles.textarea}
              />
            </div>

            <button
              onClick={submit}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{ ...styles.button, ...(hover && styles.buttonHover) }}
            >
              {editId ? "Update Task" : "Submit"}
            </button>
          </>
        )}

        {page === "list" && (
          <>
            <h1>Task List</h1>
            {tasks.length === 0 ? (
              <p>No tasks available</p>
            ) : (
              <table style={styles.table}>
                <thead>
                  <tr>
                    {["Task", "Project", "Purpose", "Actions"].map((h) => (
                      <th key={h} style={styles.th}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((t) => (
                    <tr key={t.id}>
                      <td style={styles.td}>{t.TaskName}</td>
                      <td style={styles.td}>{t.projectName}</td>
                      <td style={styles.td}>{t.purpose}</td>
                      <td style={styles.td}>
                        <button style={styles.linkBtn} onClick={() => edit(t)}>
                          Edit
                        </button>
                        <button
                          style={styles.deleteBtn}
                          onClick={() => remove(t.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}

        {page === "about" && (
          <>
            <h1>About</h1>
            <p>
              Task Management Dashboard built with React using Dynamic List
              Rendering and localStorage.
            </p>
          </>
        )}
      </main>
    </div>
  );
}
/* ===== STYLES ===== */
const styles = {
  page: {
    position: "fixed",
    inset: 0,
    display: "flex", 
    minHeight: "100vh", 
    background: "#eaf6fb", 
    padding: 30,
},
  sidebar: { 
    width: 240, 
    background: "#fff", 
    padding: 15, 
    borderRadius: 10
},
  sidebarTitle: { 
    color: "#2563eb", 
    marginBottom: 12, 
    fontSize: 20,
    fontFamily: "Calibri",
},
  sidebarItem: {
    padding: 10,
    marginBottom: 10,
    border: "1px solid #e5e7eb",
    borderRadius: 6,
    cursor: "pointer",
},
  main: {
    flex: 1,
    background: "#fff",
    marginLeft: 25,
    padding: 30,
    borderRadius: 12,
},
  row: { 
    display: "flex", 
    alignItems: "center", 
    marginBottom: 15 
},
  label: { 
    width: 140, 
    fontWeight: 500 
},
  input: { 
    flex: 1, 
    padding: 10, 
    borderRadius: 6, 
    border: "1px solid #ccc" 
},
  textarea: { 
    flex: 1, 
    height: 80, 
    padding: 10, 
    borderRadius: 6 
},
  button: {
    marginTop: 20,
    padding: "12px 34px",
    background: "#4f4f7a",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    transition: "0.25s",
  },
  buttonHover: {
    transform: "scale(1.06)",
    background: "#6366f1",
    boxShadow: "0 12px 28px rgba(79,79,122,0.45)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse", 
    tableLayout: "fixed" },
  th: {
    padding: 12,
    borderBottom: "2px solid #e5e7eb",
    textAlign: "left" },
  td: { 
    padding: 12, 
    borderBottom: "1px solid #e5e7eb" 
},
  linkBtn: { 
    marginRight: 10, 
    border: "none", 
    background: "none", 
    color: "#2563eb" 
},
  deleteBtn: { 
    border: "none", 
    background: "none", 
    color: "#dc2626" 
},
};
