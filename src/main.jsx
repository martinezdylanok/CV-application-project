import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PageTitle from "./components/pageTitle.jsx";
import GeneralInfo from "./components/generalInfo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <PageTitle />
      <GeneralInfo />
   </React.StrictMode>,
);
