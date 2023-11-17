import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.tsx";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Root />
    </ThemeContextProvider>
  </React.StrictMode>
);
