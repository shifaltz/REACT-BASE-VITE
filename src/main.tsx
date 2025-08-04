import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./lib/font-awesome";
import { FontScaleProvider } from "./lib/font-scale-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FontScaleProvider>
      <App />
    </FontScaleProvider>
  </StrictMode>
);
