import React from "react";
import ReactDOM from "react-dom/client";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <div>
      <PrimaryButton disabled>Hello</PrimaryButton>
      <SecondaryButton disabled>Hello</SecondaryButton>
      <TertiaryButton>Hello</TertiaryButton>
      <GlobalStyle />
    </div>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
