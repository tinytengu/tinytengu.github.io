import React from "react";
import ReactDOM from "react-dom/client";

import "@/index.scss";

import App from "./App";
import { PointerContextProvider } from "@/contexts/pointer";

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <PointerContextProvider>
      <App />
    </PointerContextProvider>
  </React.StrictMode>
);
