import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/index";

import {
  addTodo,
  deleteTodo,
  toggleEdit,
  editTodo,
  updateSelectTodo,
} from "../Day17_18homework/todosSlice";

import { fetchTodos } from "../Day17_18homework/todosSlice";
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

  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(task));
    // dispatch(addToDoTask(task));
    setTask(""); // Clear input after adding a task
    console.log(todos);
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

    dispatch(editTodo({ id, task: newToDo }));
    // dispatch(updateTask({ id: id, task: newToDo }));
  }

  function handleCheckBoxChange(e: any) {
    // console.log(e.target.id);
    console.log(e.target.checked);
    const { id, checked } = e.target;
    dispatch(updateSelectTodo({ id, checked }));
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
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
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
            {/* checkbox select */}
            <input
              type="checkBox"
              id={todo.id.toString()}
              name={todo.task}
              checked={todo.completed}
              onChange={handleCheckBoxChange}
            />
            {/* task content */}
            {todo.isEdit ? (
              <input
                type="text"
                defaultValue={todo.task}
                onChange={(e) => handleListUpdate(todo.id, e)}
                style={{
                  width: "60%",
                  marginRight: "8px",
                  padding: "5px",
                }}
              />
            ) : (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "gray" : "black",
                }}
              >
                {todo.task}
              </span>
            )}
            <div>
              <button
                onClick={() => handleDelete(todo.id)}
                disabled={todo.completed ? true : false}
                style={{
                  marginRight: "5px",
                  padding: "5px",
                  backgroundColor: todo.completed ? "gray" : "#da4f7a",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(todo.id)}
                disabled={todo.completed ? true : false}
                style={{
                  padding: "5px",
                  backgroundColor: todo.completed ? "gray" : "green",
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
