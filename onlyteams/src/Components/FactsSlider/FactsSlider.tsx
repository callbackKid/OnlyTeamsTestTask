import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import {
  FactsSliderWrapper,
  DateSpanWrapper,
  DatesTextWrapper,
  FactsWrapper,
} from "./FActsSliderWrapper";

type DatesProps = {
  children: React.ReactNode;
};

export const Dates = (props: DatesProps) => {
  return (
    <FactsSliderWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        modules={[Navigation]}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <FactsWrapper>
            <DateSpanWrapper> 2015 </DateSpanWrapper>
            <DatesTextWrapper>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </DatesTextWrapper>
          </FactsWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <FactsWrapper>
            <DateSpanWrapper> 2016 </DateSpanWrapper>
            <DatesTextWrapper>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </DatesTextWrapper>
          </FactsWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <FactsWrapper>
            <DateSpanWrapper> 2017 </DateSpanWrapper>
            <DatesTextWrapper>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </DatesTextWrapper>
          </FactsWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <FactsWrapper>
            <DateSpanWrapper> 2018 </DateSpanWrapper>
            <DatesTextWrapper>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части
            </DatesTextWrapper>
          </FactsWrapper>
        </SwiperSlide>
      </Swiper>
    </FactsSliderWrapper>
  );
};
