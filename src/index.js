import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./app/app.component";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
