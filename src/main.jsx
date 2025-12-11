import { StrictMode } from "react";
//StrictMode 是 React 的開發工具，用于在開發階段檢測潜在問题

import "./index.css";
//router
import router from "./router";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// analytics
import { initGA4 } from "./libs/analytics";
// 初始化 GA4
initGA4();

const app = createRoot(document.getElementById("root"));
app.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
