import { StrictMode } from "react";
//StrictMode 是 React 的開發工具，用于在開發階段檢測潜在問题
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//首屏進入也懶加

const app = createRoot(document.getElementById("root"));
app.render(
  <StrictMode>
    <App />
  </StrictMode>
);
