import styled from "@emotion/styled";
import { Container } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
export const Wrapper = styled(Container)`
  height: 100vh;


`;
export const CustonSwiper = styled(Swiper)`
  width: 100%;
  height: 400px;
`;

export const CustonSwiperSlide = styled(SwiperSlide)`
  
`;
export const Img = styled.img<{color: string}>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: ${props=>props.color};
`