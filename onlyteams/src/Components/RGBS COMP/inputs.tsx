import { InputRGB } from "./input";
import { InputWrapper } from "./Wrappers";
import { ContextRGB } from "./context";
import { ChangeEvent, useContext } from "react";

export const InputsRGB = () => {
  const { red, green, blue, dispatch } = useContext(ContextRGB);
  const adjustRed = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "ADJUST_RED",
      payload: +event?.target.value,
    });
  const adjustGreen = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "ADJUST_GREEN",
      payload: +event?.target.value,
    });
  const adjustBlue = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "ADJUST_BLUE",
      payload: +event?.target.value,
    });

  return (
    <InputWrapper>
      <InputRGB
        id="red"
        label="red"
        value={red}
        onChange={adjustRed}
      ></InputRGB>
      <InputRGB
        id="green"
        label="green"
        value={green}
        onChange={adjustGreen}
      ></InputRGB>
      <InputRGB
        id="blue"
        label="blue"
        value={blue}
        onChange={adjustBlue}
      ></InputRGB>
    </InputWrapper>
  );
};
