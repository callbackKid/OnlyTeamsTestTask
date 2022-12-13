import { RgbColorType, SlidersRGB } from "./sliders";
import { InputsRGB } from "./inputs";
import { ColorsSwatch } from "./ColorsSwatch";
import { useReducer } from "react";
import { reducer } from "./reducer";

export const RGBComp = ({ red, green, blue }: RgbColorType) => {
  const [rgb, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <div>
      <ColorsSwatch {...rgb} />
      <InputsRGB {...rgb} />
      <SlidersRGB {...rgb} />
    </div>
  );
};
