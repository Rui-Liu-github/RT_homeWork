import React from "react";
import "../../../styles/hw.css";
import { ActionType } from "./TodoList_Reducer";

interface Props {
  todoItem: {
    id: number;
    task: string;
    isEdit: boolean;
  };
  dispatch: React.Dispatch<ActionType>;
}

function ToDo(props: Props) {
  const { todoItem, dispatch } = props;

  function handleDelete() {
    dispatch({ type: "delete_task", payload: { taskId: todoItem.id } });
  }

  function handleEdit() {
    console.log("edit now!!!");
    dispatch({ type: "edit_task", payload: { taskId: todoItem.id } });
  }

  function handleInputEditChange(e: any) {
    const newToDo = e.target.value;
    dispatch({
      type: "update_task",
      payload: { taskId: todoItem.id, newToDoTask: newToDo },
    });
    // update after that
  }
  return (
    <div>
      <div className="takeItem">
        {todoItem.isEdit ? (
          <input
            type="text"
            onChange={(e) => handleInputEditChange(e)}
            value={todoItem.task}
            className="taskName"
          />
        ) : (
          <span className="taskName">{todoItem.task}</span>
        )}

        <div className="takeActions">
          <button onClick={handleDelete}>Delete</button>{" "}
          <button onClick={handleEdit}>
            {todoItem.isEdit ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
