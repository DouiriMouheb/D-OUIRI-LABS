import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./components/landingpage.jsx";
import "./index.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
