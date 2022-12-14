import { RgbColorType } from "./types";

export const ColorsSwatch = ({ red, green, blue }: RgbColorType) => {
  return (
    <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}> </div>
  );
};
