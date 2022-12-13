export type InputProps = {
  id: string;
  value: number;
  label: string;
};

export const InputRGB = ({ id, value, label }: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" min={1} max={255} value={value} />
    </>
  );
};
