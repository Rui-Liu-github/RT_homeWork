import { useState, FC } from "react";
import "../../style.css";

export default function TodoListApp() {
  // write your todo list app here
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleClick = () => {
    // return task !== "" && setTasks([...tasks, task]);
    if (task !== "") {
      setTasks([...tasks, task]);
    }
    setTask("");
  };

  const handleRemove = (index: any) => {
    const newTasks = [...tasks];
    setTasks(newTasks.filter((_, i) => i !== index)); //ignore the task elemnt using _
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleInputEditChange = (index: any, e: any) => {
    let newTasks = [...tasks];
    newTasks.map((taskEdit, i) => {
      if (i === index && taskEdit === newTasks[i]) {
        newTasks[i] = e.target.value;
      }
    });
    setTasks(newTasks);
  };

  return (
    <div className="contentBox" style={{ position: "relative" }}>
      <h1
        style={{
          borderBottom: "solid 2px #dededf",
          padding: "10px",
        }}
      >
        TO DO LIST
      </h1>
      <label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            width: "100%",
            padding: "6px",
            display: "block",
            marginBottom: "10px",
          }}
          placeholder="add Item..."
        />
        <button
          style={{
            padding: "4px",
            backgroundColor: "black",
            color: "#fff",
            position: "absolute",
            left: "0",
          }}
          onClick={handleClick}
        >
          ADD
        </button>
      </label>

      {/* show the added list */}
      <div className="list">
        {tasks.map((task, index) => {
          return (
            <div key={index} className="takeItem">
              {isEdit ? (
                <input
                  type="text"
                  value={task}
                  onChange={(e) => handleInputEditChange(index, e)}
                  className="taskName"
                />
              ) : (
                <span className="taskName">{task}</span>
              )}

              <div className="takeActions">
                <button onClick={() => handleRemove(index)}>Delete</button>{" "}
                <button onClick={handleEdit}>{isEdit ? "Save" : "Edit"}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
