import React from "react";
import ReactDOM from "react-dom/client";
import PrimaryButton from "./components/Buttons";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => <PrimaryButton>Hello</PrimaryButton>;
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
