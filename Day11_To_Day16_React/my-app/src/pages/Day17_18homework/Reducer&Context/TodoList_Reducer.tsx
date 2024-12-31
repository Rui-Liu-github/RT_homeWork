import React, { useReducer, useState } from "react";
import ToDo from "./ToDo";
import "../../../styles/hw.css";

export interface ActionType {
  type: "add_task" | "delete_task" | "edit_task" | "update_task";
  payload: any;
}

interface TodosType {
  id: number;
  task: string;
  isEdit: boolean;
}

const ACTIONS = {
  ADD_TODO_TASK: "add_task",
  DELETE_TASK: "delete_task",
  EDIT_TASK: "edit_task",
  UPDATE_TASK: "update_task",
};

function reducer(todos: TodosType[], action: ActionType): TodosType[] {
  switch (action.type) {
    case ACTIONS.ADD_TODO_TASK:
      return [...todos, addNewTodo(action.payload.taskName)];
    case ACTIONS.DELETE_TASK:
      return todos.filter((task) => task.id !== action.payload.taskId);
    case ACTIONS.EDIT_TASK:
      return todos.map((todo) => {
        console.log(action.payload.taskId);
        if (todo.id === action.payload.taskId) {
          return { ...todo, isEdit: !todo.isEdit };
        }
        return todo;
      });
    case ACTIONS.UPDATE_TASK:
      return todos.map((todo) => {
        //console.log(action.payload.taskId);
        if (todo.id === action.payload.taskId) {
          return { ...todo, task: action.payload.newToDoTask };
        }
        return todo;
      });
    default:
      return todos;
  }
}

function addNewTodo(task: string): TodosType {
  return {
    id: Date.now(),
    task: task,
    isEdit: false,
  };
}

// function changeEdit(isEdit: boolean) {
//   return !isEdit;
// }
function TodoList_Reducer() {
  const [task, setTask] = useState<string>("");

  // create useReducer to manage complex data state
  const [todos, despatch] = useReducer(reducer, [] as TodosType[]);

  function handleSubmit(e: any) {
    // console.log("e", e);
    e.preventDefault();
    despatch({ type: "add_task", payload: { taskName: task } });
    setTask("");
  }

  return (
    <div className="contentBox">
      <form onSubmit={handleSubmit} style={{ position: "relative" }}>
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
              padding: "10px",
              display: "block",
              marginBottom: "10px",
            }}
            placeholder="add Item..."
          />
          <button
            style={{
              padding: "8px",
              backgroundColor: "orange",
              cursor: "pointer",
              color: "#fff",
              position: "absolute",
              left: "0",
            }}
            onClick={handleSubmit}
          >
            ADD
          </button>
        </label>
      </form>
      {/* to do list */}
      <div className="list">
        {todos.map((todoTask) => (
          <ToDo key={todoTask.id} todoItem={todoTask} dispatch={despatch} />
        ))}
      </div>
    </div>
  );
}

export default TodoList_Reducer;
