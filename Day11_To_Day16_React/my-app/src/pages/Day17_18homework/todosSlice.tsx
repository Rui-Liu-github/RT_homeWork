import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoType {
  id: number;
  task: string;
  isEdit: boolean;
}

interface StateType {
  todos: TodoType[];
}

const initialState: StateType = {
  todos: [],
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
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleEdit: (state, action: PayloadAction<number>) => {
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
  },
});

export const { addTodo, deleteTodo, toggleEdit, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
