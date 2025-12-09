import { StrictMode } from "react";
//StrictMode 是 React 的開發工具，用于在開發階段檢測潜在問题
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
const app = createRoot(document.getElementById("root"));
app.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
