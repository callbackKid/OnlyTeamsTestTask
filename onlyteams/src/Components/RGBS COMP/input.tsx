import { InputProps } from "./types";

export const InputRGB = ({ id, value, label, onChange }: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        min={1}
        max={255}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
