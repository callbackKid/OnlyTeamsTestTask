import { useContext } from "react";
import { ContextRGB } from "./context";

export const ColorsSwatch = () => {
  const { red, green, blue } = useContext(ContextRGB);
  return (
    <div
      style={{
        width: 400,
        height: 400,
        margin: "auto",
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }}
    ></div>
  );
};
