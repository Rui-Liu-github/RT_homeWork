import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../pages/Day17_18homework/todosSlice";

const store = configureStore({
  reducer: {
    // define a top level state named 'todos'
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
