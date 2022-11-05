import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./components/context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
