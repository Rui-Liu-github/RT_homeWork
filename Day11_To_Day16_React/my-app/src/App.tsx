import React from "react";
import { RouterProvider } from "react-router-dom";
import routerConfig from "./router";
// import './App.css';
import "./styles/hw.css";
import store from "./store/index";
// import storeOriginal from "./store/storeOriginalRedux";
import { Provider } from "react-redux";

function App() {
  return (
    // <RouterProvider router={routerConfig}></RouterProvider>
    <Provider store={store}>
      <RouterProvider router={routerConfig}></RouterProvider>
    </Provider>
  );
}

export default App;
