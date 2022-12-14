import { useReducer } from "react";

import { SlidersRGB } from "./sliders";
import { InputsRGB } from "./inputs";
import { ColorsSwatch } from "./ColorsSwatch";

import { reducer } from "./reducer";
import { RgbColorType } from "./types";
import React from "react";
import { ThemeContext } from "../../theme";

export const RGBComp = ({ red, green, blue }: RgbColorType) => {
  const themes = React.useContext(ThemeContext);
  const [rgb, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <div style={{ ...themes.dark }}>
      <ColorsSwatch {...rgb} />
      <SlidersRGB />
    </div>
  );
};
