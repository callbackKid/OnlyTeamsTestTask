import { SliderRGB } from "./slider";
import { InputWrapper } from "./Wrappers";

export type RgbColorType = {
  red: number;
  blue: number;
  green: number;
};

export const SlidersRGB = ({ red, green, blue }: RgbColorType) => {
  return (
    <InputWrapper>
      <SliderRGB id="red" label="red" value={red}></SliderRGB>
      <SliderRGB id="green" label="green" value={green}></SliderRGB>
      <SliderRGB id="blue" label="blue" value={blue}></SliderRGB>
    </InputWrapper>
  );
};
