import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { Provider } from "react-redux";
// import store from "./ReduxTodoSolution/redux/store.ts";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>

// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
