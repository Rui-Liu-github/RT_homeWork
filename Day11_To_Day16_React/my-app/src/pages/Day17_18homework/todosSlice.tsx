import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoType {
  id: number;
  task: string;
  isEdit: boolean;
  completed: boolean;
}

interface StateType {
  todos: TodoType[];
  loading: boolean;
  error: string | null;
}

const initialState: StateType = {
  todos: [
    // {
    //   id: Date.now(),
    //   task: "this is the first todo task,just as test",
    //   isEdit: false,
    //   completed: false,
    // },
  ],
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await fetch("http://localhost:8000/todos");
    console.log("request todos success");
    const data = await response.json();
    return data;
  } catch (error: any) {
    return error.message;
  }
});

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
  //fetch data use extraReducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTodos.fulfilled,
        (state, action: PayloadAction<TodoType[]>) => {
          state.loading = false;
          state.todos = action.payload;
        }
      )
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch data todos";
      });
  },
});

export const { addTodo, deleteTodo, toggleEdit, editTodo, updateSelectTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
