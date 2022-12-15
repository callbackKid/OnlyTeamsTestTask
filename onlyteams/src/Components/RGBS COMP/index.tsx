import { SlidersRGB } from "./sliders";
import { ColorsSwatch } from "./ColorsSwatch";
import React from "react";
import { ThemeContext } from "../../theme";
import { InputsRGB } from "./inputs";

export const App = () => {
  const themes = React.useContext(ThemeContext);
  return (
    <div style={{ ...themes.dark }}>
      <InputsRGB />
      <ColorsSwatch />
      <SlidersRGB />
    </div>
  );
};
