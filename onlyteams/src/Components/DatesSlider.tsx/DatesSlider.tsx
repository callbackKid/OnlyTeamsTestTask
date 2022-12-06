import {
  BigDateWrapper,
  CircleWrapper,
  DatesSliderWrapper,
} from "./DatesSliderWrapper";

export const DatesSlider = (props: any) => {
  return (
    <DatesSliderWrapper>
      <CircleWrapper />
      <BigDateWrapper>{props.date1}</BigDateWrapper>
      <BigDateWrapper style={{ color: "#EF5DA8" }}>
        {props.date2}
      </BigDateWrapper>
    </DatesSliderWrapper>
  );
};
