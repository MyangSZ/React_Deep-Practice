import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CounterPorvider } from "./context/counterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterPorvider>
    <App />
  </CounterPorvider>
);
