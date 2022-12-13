import { RgbColorType } from "./sliders";

export const ColorsSwatch = ({ red, green, blue }: RgbColorType) => {
  return (
    <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}> </div>
  );
};
