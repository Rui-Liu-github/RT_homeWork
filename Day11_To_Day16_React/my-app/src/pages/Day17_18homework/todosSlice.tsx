import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoType {
  id: number;
  task: string;
  isEdit: boolean;
  completed: boolean;
}

interface StateType {
  todos: TodoType[];
}

const initialState: StateType = {
  todos: [
    {
      id: Date.now(),
      task: "this is the first todo task,just as test",
      isEdit: false,
      completed: false,
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        task: action.payload,
        isEdit: false,
        completed: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleEdit: (state, action: PayloadAction<number>) => {
      //find() is really good and I don't need to use map
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isEdit = !todo.isEdit;
      }
    },
    editTodo: (state, action: PayloadAction<{ id: number; task: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.task = action.payload.task;
      }
    },
    updateSelectTodo: (
      state,
      action: PayloadAction<{ id: number; checked: boolean }>
    ) => {
      const todo = state.todos.find(
        (todo) => todo.id === Number(action.payload.id)
      );

      if (todo) {
        todo.completed = action.payload.checked;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleEdit, editTodo, updateSelectTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
