import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import Router from "./Router";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
