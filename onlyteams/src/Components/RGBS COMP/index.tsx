import { ColorsSwatch } from "./ColorsSwatch";
import React from "react";
import { ThemeContext } from "../../theme";
import { ColorAdjustment } from "./inputs";
import { InputRGB } from "./input";
import { SliderRGB } from "./slider";

export const App = () => {
  const themes = React.useContext(ThemeContext);
  return (
    <div style={{ ...themes.dark }}>
      <ColorsSwatch />
      <ColorAdjustment Adjustment={InputRGB} />
      <ColorAdjustment Adjustment={SliderRGB} />
    </div>
  );
};
