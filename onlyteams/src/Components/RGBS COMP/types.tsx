import { ChangeEvent } from "react";

export interface RgbColorType {
  red: number;
  blue: number;
  green: number;
}

export type SliderProps = {
  id: string;
  value: number;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type InputProps = {
  id: string;
  value: number;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
