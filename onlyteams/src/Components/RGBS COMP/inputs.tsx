import { InputRGB } from "./input";
import { InputWrapper } from "./Wrappers";
import { ContextRGB } from "./context";
import { useContext } from "react";

export const InputsRGB = () => {
  const { red, green, blue, dispatch } = useContext(ContextRGB);
  return (
    <InputWrapper>
      <InputRGB id="red" label="red" value={red}></InputRGB>
      <InputRGB id="green" label="green" value={green}></InputRGB>
      <InputRGB id="blue" label="blue" value={blue}></InputRGB>
    </InputWrapper>
  );
};
