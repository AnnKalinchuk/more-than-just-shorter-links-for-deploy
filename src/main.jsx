import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import LinksProvider from "./components/context/LinksContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LinksProvider>
    <App />
  </LinksProvider>
);
