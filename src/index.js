import React from "react";
import ReactDOM from "react-dom/client";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <div>
      <PrimaryButton>Hello</PrimaryButton>
      <SecondaryButton>Hello</SecondaryButton>
      <TertiaryButton>Hello</TertiaryButton>
    </div>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
