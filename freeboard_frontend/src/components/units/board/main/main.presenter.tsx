import * as s from "./main.styles";

import { Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function MainUI() {
  return (
    <s.Wrapper>
      <s.CustonSwiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <s.CustonSwiperSlide>Slide 1</s.CustonSwiperSlide>
        <s.CustonSwiperSlide>Slide 2</s.CustonSwiperSlide>
        <s.CustonSwiperSlide>Slide 3</s.CustonSwiperSlide>
        <s.CustonSwiperSlide>Slide 4</s.CustonSwiperSlide>
        <s.CustonSwiperSlide>Slide 5</s.CustonSwiperSlide>
        <s.CustonSwiperSlide>Slide 6</s.CustonSwiperSlide>
      </s.CustonSwiper>
    </s.Wrapper>
  );
}
