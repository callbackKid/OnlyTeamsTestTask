import { ChangeEvent, useContext } from "react";
import { ContextRGB } from "./context";
import { SliderRGB } from "./slider";
import { InputWrapper } from "./Wrappers";

export const SlidersRGB = () => {
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
      <SliderRGB
        id="red"
        label="red"
        value={red}
        onChange={adjustRed}
      ></SliderRGB>
      <SliderRGB
        id="green"
        label="green"
        value={green}
        onChange={adjustGreen}
      ></SliderRGB>
      <SliderRGB
        id="blue"
        label="blue"
        value={blue}
        onChange={adjustBlue}
      ></SliderRGB>
    </InputWrapper>
  );
};
