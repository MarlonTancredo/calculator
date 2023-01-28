import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

import Calculator from "./calculator/Calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <h1>Calculator</h1>
      <Calculator />
    </div>
  </React.StrictMode>
);
