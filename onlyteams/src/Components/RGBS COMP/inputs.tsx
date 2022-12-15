import { InputRGB } from "./input";
import { InputWrapper } from "./Wrappers";
import { ContextRGB } from "./context";
import { ChangeEvent, useContext } from "react";
import { InputProps } from "./types";

export interface ColorAdjustmentProps {
  Adjustment: React.ComponentType<InputProps>;
}

export const ColorAdjustment = ({ Adjustment }: ColorAdjustmentProps) => {
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
      <Adjustment id="red" label="red" value={red} onChange={adjustRed} />
      <Adjustment
        id="green"
        label="green"
        value={green}
        onChange={adjustGreen}
      />
      <Adjustment id="blue" label="blue" value={blue} onChange={adjustBlue} />
    </InputWrapper>
  );
};
