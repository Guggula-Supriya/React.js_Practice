import { useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (text === "") return;
    setTasks([...tasks, text]);
    setText("");
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <input
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={addTask}>Add</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    padding: "20px",
    border: "1px solid black",
  },
};
