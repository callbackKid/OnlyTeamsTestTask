type SliderProps = {
  id: string;
  value: number;
  label: string;
};

export const SliderRGB = ({ id, value, label }: SliderProps) => {
  return (
    <>
      <label htmlFor={id}> {label} </label>
      <input id={id} type="range" min={1} max={255} value={value} />
    </>
  );
};
