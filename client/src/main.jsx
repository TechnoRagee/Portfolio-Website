// ============================================================
// main.jsx — React App Entry Point
// ------------------------------------------------------------
// Mounts the React app into the #root div in index.html
// ============================================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Mount the app to the DOM element with id="root"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
