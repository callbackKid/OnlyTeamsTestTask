import { SliderProps } from "./types";

export const SliderRGB = ({ id, value, label, onChange }: SliderProps) => {
  return (
    <>
      <label htmlFor={id}> {label} </label>
      <input
        id={id}
        type="range"
        min={1}
        max={255}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
