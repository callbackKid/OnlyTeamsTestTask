import React, { createContext, useReducer } from "react";
import { ActionType, reducer } from "./reducer";
import { RgbColorType } from "./types";

const initialState: RgbColorType = {
  red: 0,
  green: 0,
  blue: 0,
};

interface ContextRgbType extends RgbColorType {
  dispatch: React.Dispatch<ActionType>;
}

export const ContextRGB = createContext<ContextRgbType>(
  initialState as ContextRgbType
);

export const RgbContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [rgb, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  return (
    <ContextRGB.Provider value={{ ...rgb, dispatch }}>
      {children}
    </ContextRGB.Provider>
  );
};
