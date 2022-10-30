import React from "react";
import ReactDOM from "react-dom/client";

import "@/index.scss";

import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(<App />);
// ReactDOM.createRoot(root as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
