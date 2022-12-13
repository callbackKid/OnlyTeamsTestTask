import { InputRGB } from "./input";
import { RgbColorType } from "./sliders";
import { InputWrapper } from "./Wrappers";

export const InputsRGB = ({ red, green, blue }: RgbColorType) => {
  return (
    <InputWrapper>
      <InputRGB id="red" label="red" value={red}></InputRGB>
      <InputRGB id="green" label="green" value={green}></InputRGB>
      <InputRGB id="blue" label="blue" value={blue}></InputRGB>
    </InputWrapper>
  );
};
