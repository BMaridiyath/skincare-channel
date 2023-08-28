import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

window.initWidget = (appParams) => {
  const root = ReactDOM.createRoot(document.getElementById(appParams.rootID));
  root.render(
    <React.StrictMode>
      <App events={appParams.events} region={appParams.region} />
    </React.StrictMode>
  );
  reportWebVitals();
};

if (process.env.NODE_ENV !== "production") {
  window.codeBuilder = window.initWidget({
    rootID: "root",
    region: "EU-France",
    events: {},
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
