import styled from "styled-components";

export const FactsSliderWrapper = styled.div`
  margin-top: 56px;
  margin-bottom: 104px;
  display: flex;
  justify-content: center;
  background: #f4f5f9;

  .swiper-button-prev {
    postition: relative;
    color: #3877ee;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);
  }
  .swiper-button-next {
    color: #3877ee;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(56, 119, 238, 0.1);
  }
  .swiper-button-prev::after {
    font-size: 13px;
    font-weight: bold;
    width: 11px;
  }
  .swiper-button-next::after {
    font-size: 13px;
    font-weight: bold;
    width: 6px;
  }
`;

export const FactsWrapper = styled.section`
  width: 320px;
  height: 135px;
  margin-left: 100px;
`;

export const DateSpanWrapper = styled.span`
  font-family: Bebas Neue;
  font-size: 25px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
  color: #3877ee;
`;

export const DatesTextWrapper = styled.div`
  width: 320px;
  height: 90px;
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #42567a;
`;

export const ButtonWrapper = styled.button`
  position: absolute;
  top: 60px;
  left: 60px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  color: #42567a;
  background: white;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const ButtonArrowWrapper = styled.button`
  position: relative;
  width: 6.25px;
  height: 12.5px;
  left: 421.25px;
  top: 766.25px;

  border: 2px solid #42567a;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;
