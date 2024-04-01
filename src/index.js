import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { InternetConnectionWraper } from "./Components/internetConnectionWraper";
import "antd/dist/antd.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <InternetConnectionWraper>
        <App/>
      </InternetConnectionWraper>
    </BrowserRouter>
)