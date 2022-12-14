import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./theme";
import { RgbContextProvider } from "./Components/RGBS COMP/context";
import { RGBComp } from "./Components/RGBS COMP";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RgbContextProvider>
      <ThemeProvider>
        <RGBComp red={0} blue={0} green={0} />
      </ThemeProvider>
    </RgbContextProvider>
  </React.StrictMode>
);
