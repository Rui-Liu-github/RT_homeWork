import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";

import {
  addTodo,
  deleteTodo,
  toggleEdit,
  editTodo,
} from "../Day17_18homework/todosSlice";

// import {
//   addToDoTask,
//   deleteTask,
//   editTask,
//   updateTask,
// } from "../Day17_18homework/TodoReduxOriginal";
//use react Redux
// Provides a Provider component to integrate the Redux store with the React component tree.
// connect React components to the Redux store use hooks :  hooks like useSelector and useDispatch

const TodoList_Redux: FC = () => {
  const [task, setTask] = useState<string>("");
  //rootState is the top level state
  //rootState {todos, ...}
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //dispatch(addTodo("add task one"));
    //trim() This ensures that empty or whitespace-only input (like " ") will not be added to your todo list.
    if (task.trim()) {
      dispatch(addTodo(task));
      // dispatch(addToDoTask(task));
      setTask(""); // Clear input after adding a task
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
    // dispatch(deleteTask(id));
  };

  const handleEdit = (id: number) => {
    dispatch(toggleEdit(id));
    // dispatch(editTask(id));
  };

  function handleListUpdate(id: number, e: any) {
    const newToDo = e.target.value;

    dispatch(editTodo({ id: id, task: newToDo }));
    // dispatch(updateTask({ id: id, task: newToDo }));
  }

  return (
    <div className="contentBox">
      <form onSubmit={handleSubmit} style={{ position: "relative" }}>
        <h1 style={{ borderBottom: "solid 2px #dededf", padding: "10px" }}>
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
            placeholder="Add Item..."
          />
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              padding: "8px",
              backgroundColor: "orange",
              cursor: "pointer",
              color: "#fff",
              position: "absolute",
              left: "0",
            }}
          >
            ADD
          </button>
        </label>
      </form>
      {/* Render Todos */}
      <div className="list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              border: "1px solid #ddd",
              marginBottom: "5px",
            }}
          >
            {todo.isEdit ? (
              <input
                type="text"
                defaultValue={todo.task}
                onChange={(e) => handleListUpdate(todo.id, e)}
                style={{
                  width: "70%",
                  marginRight: "10px",
                  padding: "5px",
                }}
              />
            ) : (
              <span>{todo.task}</span>
            )}
            <div>
              <button
                onClick={() => handleDelete(todo.id)}
                style={{
                  marginRight: "5px",
                  padding: "5px",
                  backgroundColor: "red",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(todo.id)}
                style={{
                  padding: "5px",
                  backgroundColor: "green",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {todo.isEdit ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList_Redux;
