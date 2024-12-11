import React from 'react';
import { RouterProvider } from "react-router-dom";
import routerConfig from "./router";
// import './App.css';
import './styles/hw.css';

function App() {
  return (
    <RouterProvider router={routerConfig}></RouterProvider>
  )
}

export default App;

