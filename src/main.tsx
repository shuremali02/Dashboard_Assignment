import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { FilterProvider } from "@/components/context/FilterContext"; // correct path check karna

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </StrictMode>
);
