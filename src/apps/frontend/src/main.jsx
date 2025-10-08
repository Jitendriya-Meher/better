import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import  { Toaster }  from 'react-hot-toast';
import { TodoProvider } from "./context/todoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
    <Toaster/>
  </React.StrictMode>
);
